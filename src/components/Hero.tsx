
import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  achievements,
  certifications,
  profile,
  projects,
  type ProfileId,
} from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function Hero({
  onPlay,
  onResume,
  profileId,
}: {
  onPlay: () => void;
  onResume: () => void;
  profileId: ProfileId;
}) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.45, 1], [0, 1]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });

  const imgRotY = useTransform(px, [-1, 1], [-2, 2]);
  const imgRotX = useTransform(py, [-1, 1], [1.5, -1.5]);
  const imgShiftX = useTransform(px, [-1, 1], [-5, 5]);
  const chipX = useTransform(px, [-1, 1], [12, -12]);
  const chipY = useTransform(py, [-1, 1], [8, -8]);
  const glowX = useTransform(px, [-1, 1], ['-3%', '3%']);

  const meta = [
    `${projects.length} Projects & Initiatives`,
    `${achievements.length} Highlights`,
    `${certifications.length} Certifications`,
  ];

  const floating = [
    {
      text: 'Founder & CEO',
      sub: 'TECHINS',
      pos: 'left-[2%] top-[30%]',
      depth: 1,
    },
    {
      text: '250+ Members',
      sub: 'Student community',
      pos: 'right-[0%] top-[18%]',
      depth: -1,
    },
    {
      text: 'IoT · Instrumentation',
      sub: 'Engineering focus',
      pos: 'right-[4%] bottom-[24%]',
      depth: 0.6,
    },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] w-full overflow-hidden lg:min-h-[100svh]"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* Background atmosphere */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ x: glowX }}
      >
        <div className="absolute right-[-12%] top-[-8%] h-[70svh] w-[90vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.28),rgba(229,19,43,0.06)_55%,transparent)] blur-2xl lg:right-[-4%] lg:h-[90vh] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[55svh] w-[65vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.2),transparent)] blur-2xl" />
      </motion.div>

      <Particles className="z-[1]" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <span
          className="light-streak left-[40%] top-[22%] w-[50vw]"
          style={{ animationDelay: '1.2s' }}
        />
        <span
          className="light-streak left-[30%] top-[64%] w-[40vw]"
          style={{ animationDelay: '3.6s' }}
        />
        <span
          className="light-streak left-[55%] top-[44%] w-[30vw]"
          style={{ animationDelay: '5.2s' }}
        />
      </div>

      {/* Portrait: centered on mobile, right-aligned on desktop */}
      <motion.div
        className="hero-portrait pointer-events-none absolute inset-x-0 top-5 z-[2] flex h-[43svh] items-center justify-center sm:top-6 sm:h-[48svh] md:h-[54svh] lg:inset-y-0 lg:left-auto lg:right-[1vw] lg:top-0 lg:h-full lg:w-[55vw] xl:right-[3vw] xl:w-[51vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full"
          style={{
            rotateY: fine ? imgRotY : 0,
            rotateX: fine ? imgRotX : 0,
            x: fine ? imgShiftX : 0,
            transformPerspective: 1200,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-[12%] h-[72%] w-[72%] -translate-x-1/2 rounded-full border border-crimson-2/15 shadow-[0_0_90px_rgba(229,19,43,0.18),inset_0_0_60px_rgba(229,19,43,0.1)] lg:top-[14%] lg:h-[78%] lg:w-[78%]"
          />

          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet || undefined}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 54vw"
            alt={profile.portrait.alt}
            draggable={false}
            className="hero-portrait-image absolute inset-0 mx-auto h-full w-full object-contain object-center drop-shadow-[0_24px_45px_rgba(0,0,0,0.55)] [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_70%_32%,rgba(255,61,90,0.1),transparent_70%)] mix-blend-screen"
          />

          {floating.map((f, i) => (
            <FloatChip
              key={f.text}
              {...f}
              index={i}
              mx={chipX}
              my={chipY}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Contrast overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[22svh] z-[3] h-[40svh] bg-gradient-to-b from-transparent via-ink/25 to-ink/95 sm:top-[28svh] lg:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.96)_24%,rgba(7,7,10,0.72)_43%,transparent_72%)] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-36 bg-gradient-to-t from-ink via-ink/65 to-transparent sm:h-48"
      />

      {/* Hero content */}
      <motion.div
        className="hero-copy gutter relative z-[4] mx-auto flex w-full min-w-0 max-w-[1600px] flex-col items-start justify-start pb-10 pt-[42svh] sm:pt-[47svh] sm:pb-14 lg:min-h-[100svh] lg:max-w-none lg:justify-center lg:pb-16 lg:pt-24 xl:pl-[max(var(--gutter),calc((100vw-1440px)/2))]"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-2 text-base sm:mb-3 sm:text-lg">
          <SeriesMark />
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-full font-display leading-[0.86] tracking-[0.015em] text-bone"
          style={{ fontSize: 'clamp(3.4rem, 10.5vw, 9.5rem)' }}
        >
          <span className="shimmer-text">{profile.firstName}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 max-w-full break-words font-sans text-[10px] font-bold tracking-[0.28em] text-crimson-2 sm:text-sm sm:tracking-[0.5em]"
        >
          {profile.seriesTag}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-4 flex max-w-2xl flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-medium text-mist sm:gap-x-3 sm:text-[13px] lg:mt-5"
        >
          <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">
            B.E. EIE
          </span>
          {meta.map((m) => (
            <span key={m} className="flex items-center gap-2 sm:gap-3">
              <span aria-hidden className="h-1 w-1 rounded-full bg-smoke" />
              {m}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="mt-3 max-w-2xl break-words text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-bone/90 sm:mt-4 sm:text-xs sm:tracking-[0.24em]"
        >
          {profile.tagline.join(' · ')}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 max-w-xl text-[13px] leading-relaxed text-bone/80 sm:mt-4 sm:text-base"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-5 flex w-full flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3"
        >
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="flex min-h-11 items-center gap-2 rounded-md bg-bone px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-white sm:min-h-12 sm:gap-3 sm:px-7 sm:text-[15px]"
            >
              <span className="text-lg">▶</span>
              Play Intro
            </button>
          </Magnetic>

          <Magnetic>
            {profileId === 'recruiter' ? (
              <button
                type="button"
                onClick={onResume}
                className="glass flex min-h-11 items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-bone transition hover:bg-white/15 sm:min-h-12 sm:gap-3 sm:px-7 sm:text-[15px]"
              >
                <span className="text-lg">⤓</span>
                View Resume
              </button>
            ) : (
              <button
                type="button"
                onClick={() => scrollTo('#originals')}
                className="glass flex min-h-11 items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-bone transition hover:bg-white/15 sm:min-h-12 sm:gap-3 sm:px-7 sm:text-[15px]"
              >
                <span className="text-xl leading-none">＋</span>
                My Work
              </button>
            )}
          </Magnetic>

          <button
            type="button"
            onClick={() => scrollTo('#about')}
            aria-label="More information"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10 sm:h-12 sm:w-12"
          >
            ⓘ
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] bg-ink"
        style={{ opacity: blackout }}
      />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({
  text,
  sub,
  pos,
  depth,
  index,
  mx,
  my,
}: {
  text: string;
  sub: string;
  pos: string;
  depth: number;
  index: number;
  mx: MV;
  my: MV;
}) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);

  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{
        duration: 0.9,
        delay: 1.1 + index * 0.18,
        ease: EASE,
      }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 5 + index,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <p className="text-sm font-semibold text-bone">{text}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-mist">
          {sub}
        </p>
      </motion.div>
    </motion.div>
  );
}
