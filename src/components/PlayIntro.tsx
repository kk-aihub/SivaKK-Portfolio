
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { introSlides, profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';

const SLIDE_MS = 3600;

export default function PlayIntro({ onClose }: { onClose: () => void }) {
  useScrollLock(true);

  const reduced = useReducedMotionPref();
  const [phase, setPhase] = useState<'zoom' | 'reel' | 'end'>(
    reduced ? 'reel' : 'zoom',
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);

  useEffect(() => {
    if (phase !== 'zoom') return;
    const timer = window.setTimeout(() => setPhase('reel'), 1700);
    return () => window.clearTimeout(timer);
  }, [phase]);

  const next = useCallback(() => {
    setIndex((current) => {
      if (current >= introSlides.length - 1) {
        setPhase('end');
        return current;
      }
      return current + 1;
    });
    progress.set(0);
  }, [progress]);

  const prev = useCallback(() => {
    setIndex((current) => Math.max(0, current - 1));
    progress.set(0);
  }, [progress]);

  useEffect(() => {
    if (phase !== 'reel' || paused) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const value = progress.get() + (now - last) / SLIDE_MS;
      last = now;

      if (value >= 1) {
        next();
        return;
      }

      progress.set(value);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, paused, index, next, progress]);

  useEffect(() => {
    if (phase !== 'end') return;
    const timer = window.setTimeout(onClose, 2200);
    return () => window.clearTimeout(timer);
  }, [phase, onClose]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();

      if (event.key === ' ') {
        event.preventDefault();
        setPaused((current) => !current);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, next, prev]);

  const slide = introSlides[index];

  return (
    <motion.div
      className="fixed inset-0 z-[130] overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
      role="dialog"
      aria-modal="true"
      aria-label="Intro highlight reel"
    >
      {/* Centered portrait zoom */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        initial={{ scale: 1, opacity: 1 }}
        animate={
          phase === 'zoom'
            ? { scale: [1, 1.06, 1.45], opacity: [0.95, 1, 0] }
            : {
                opacity: 0.12,
                scale: 1.08,
                filter: 'blur(3px)',
              }
        }
        transition={{
          duration: phase === 'zoom' ? 1.7 : 1.2,
          ease: [0.7, 0, 0.2, 1],
          times: phase === 'zoom' ? [0, 0.3, 1] : undefined,
        }}
        style={{ transformOrigin: '50% 42%' }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet || undefined}
          sizes="100vw"
          alt=""
          draggable={false}
          className="h-[78svh] w-full max-w-[min(100vw,680px)] object-contain object-center sm:h-[86svh] sm:max-w-[min(90vw,760px)] lg:h-[92svh] lg:max-w-[min(70vw,900px)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_42%,rgba(120,10,25,0.32),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65"
      />

      {/* Progress indicators */}
      {phase !== 'zoom' && (
        <div className="absolute inset-x-0 top-0 z-20 flex gap-1.5 px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-10 sm:pt-6">
          {introSlides.map((item, i) => (
            <div
              key={item.kicker}
              className="h-[3px] min-w-0 flex-1 overflow-hidden rounded bg-white/20"
            >
              <motion.div
                className="h-full origin-left bg-bone"
                style={{
                  scaleX:
                    i === index && phase === 'reel'
                      ? progress
                      : i < index || phase === 'end'
                        ? 1
                        : 0,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Highlight slides */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-5 pb-20 pt-20 text-center sm:px-10 sm:pb-24">
        <AnimatePresence mode="wait">
          {phase === 'reel' && (
            <motion.div
              key={index}
              className="w-full max-w-4xl"
              initial={{ opacity: 0, y: 12, scale: 1.03, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, scale: 0.98, filter: 'blur(8px)' }}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2 sm:text-xs sm:tracking-[0.5em]">
                Episode {String(index + 1).padStart(2, '0')} · {slide.kicker}
              </p>

              <h2
                className="break-words font-display leading-[0.9] text-bone"
                style={{ fontSize: 'clamp(2.6rem, 9vw, 8.5rem)' }}
              >
                {slide.title}
              </h2>

              <div className="mx-auto mt-5 max-w-2xl space-y-2 sm:mt-6">
                {slide.lines.map((line, i) => (
                  <motion.p
                    key={line}
                    className="break-words text-sm leading-relaxed text-bone/85 sm:text-lg lg:text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.12,
                      duration: 0.5,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              {slide.chips && (
                <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6">
                  {slide.chips.map((chip, i) => (
                    <motion.span
                      key={chip}
                      className="glass rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-bone sm:text-xs"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div
              key="end"
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.12em' }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              <p className="font-display text-4xl text-bone sm:text-7xl">
                NOW STREAMING
              </p>
              <p className="mt-3 break-words text-[10px] font-semibold tracking-[0.25em] text-mist sm:text-xs sm:tracking-[0.4em]">
                {profile.displayName.toUpperCase()}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tap zones */}
      {phase === 'reel' && (
        <>
          <button
            type="button"
            aria-label="Previous highlight"
            className="absolute inset-y-12 left-0 z-[5] w-[15%] sm:w-1/5"
            onClick={prev}
          />
          <button
            type="button"
            aria-label="Next highlight"
            className="absolute inset-y-12 right-0 z-[5] w-[15%] sm:w-1/5"
            onClick={next}
          />
        </>
      )}

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10 sm:pb-8">
        <div className="flex min-w-0 items-center gap-2">
          {phase === 'reel' && (
            <button
              type="button"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? 'Resume' : 'Pause'}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-bone transition hover:bg-white/10 sm:h-11 sm:w-11"
            >
              {paused ? '▶' : '❚❚'}
            </button>
          )}
          <span className="hidden text-[11px] tracking-[0.2em] text-smoke sm:block">
            SPACE · ← → · ESC
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          data-cursor="close"
          className="shrink-0 rounded-full bg-bone px-4 py-2.5 text-[10px] font-bold tracking-[0.12em] text-ink transition hover:bg-white sm:px-5 sm:text-xs sm:tracking-[0.18em]"
        >
          BACK TO BROWSE
        </button>
      </div>
    </motion.div>
  );
}
