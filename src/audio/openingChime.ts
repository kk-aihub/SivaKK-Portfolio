type StopSound = () => void;

type Tone = {
  frequency: number;
  startsAt: number;
  duration: number;
  gain: number;
  type: OscillatorType;
  endFrequency?: number;
};

const AudioContextClass =
  typeof window === 'undefined'
    ? undefined
    : window.AudioContext ??
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

/**
 * A short original cinematic signature: a low swell followed by a bright two-note chime.
 * It is synthesized in the browser, so no external audio asset or brand sound is used.
 */
export async function playOpeningChime(delayMs: number): Promise<StopSound | null> {
  if (!AudioContextClass) return null;

  const context = new AudioContextClass();
  const resume = context.resume();
  const master = context.createGain();
  const oscillators: OscillatorNode[] = [];

  master.gain.setValueAtTime(0.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(0.42, context.currentTime + 0.03);
  master.connect(context.destination);

  try {
    await resume;
  } catch {
    void context.close();
    return null;
  }

  const start = context.currentTime + Math.max(0, delayMs) / 1000;

  const playTone = ({ frequency, startsAt, duration, gain, type, endFrequency }: Tone) => {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    const toneStart = start + startsAt;
    const toneEnd = toneStart + duration;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, toneStart);
    if (endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(endFrequency, toneEnd);
    }

    envelope.gain.setValueAtTime(0.0001, toneStart);
    envelope.gain.exponentialRampToValueAtTime(gain, toneStart + Math.min(0.035, duration * 0.2));
    envelope.gain.exponentialRampToValueAtTime(0.0001, toneEnd);

    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(toneStart);
    oscillator.stop(toneEnd + 0.03);
    oscillators.push(oscillator);
  };

  // Low cinematic lift, then an original warm two-note signature timed to the name reveal.
  playTone({ frequency: 58, endFrequency: 46, startsAt: 0, duration: 0.72, gain: 0.76, type: 'sine' });
  playTone({ frequency: 122, endFrequency: 82, startsAt: 0.04, duration: 0.46, gain: 0.11, type: 'sawtooth' });
  playTone({ frequency: 392, startsAt: 0.19, duration: 0.62, gain: 0.2, type: 'sine' });
  playTone({ frequency: 587.33, startsAt: 0.29, duration: 0.84, gain: 0.16, type: 'sine' });
  playTone({ frequency: 783.99, startsAt: 0.37, duration: 0.48, gain: 0.055, type: 'triangle' });

  let stopped = false;
  return () => {
    if (stopped) return;
    stopped = true;
    oscillators.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        // The oscillator has already naturally ended.
      }
    });
    master.disconnect();
    void context.close();
  };
}
