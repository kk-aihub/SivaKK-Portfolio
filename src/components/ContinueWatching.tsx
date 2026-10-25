
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { sectionMeta, type SectionId } from '../data/portfolio';
import { useWatchProgress } from '../hooks/sectionProgress';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { useFinePointer } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import { PosterBackdrop } from './Poster';
import { RailButtons } from './Rail';

const GLYPHS: Record<SectionId, string> = {
  about: 'S',
  journey: 'S01',
  originals: '3',
  picks: '10',
  skills: '{ }',
  moments: '★',
  story: 'CV',
};

export default function ContinueWatching({
  order,
}: {
  order: SectionId[];
}) {
  const progress = useWatchProgress();
  const { scrollTo } = useSmoothScroll();
  const fine = useFinePointer();
  const [hovered, setHovered] = useState<number | null>(null);
  const rail = useRef<HTMLDivElement>(null);

  return (
    <section
      aria-label="Continue Exploring"
      className="relative z-10 w-full min-w-0 pb-8 pt-2 sm:pb-10 sm:pt-4"
    >
      <div className="gutter mx-auto mb-3 flex w-full max-w-7xl min-w-0 items-end justify-between gap-4 sm:mb-4">
        <RevealText
          as="h2"
          text="Continue Exploring"
          className="font-sans text-lg font-semibold tracking-tight text-bone sm:text-2xl"
        />
        <span className="hidden max-w-xs text-right text-xs leading-relaxed text-smoke sm:block">
          Progress shows what you&apos;ve watched so far
        </span>
      </div>

      <div className="group/rail relative w-full min-w-0">
        <div
          ref={rail}
          className="rail gutter flex w-full min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain py-4 sm:gap-4 sm:py-6"
          data-cursor={fine ? undefined : 'drag'}
        >
          {order.map((id, i) => {
            const meta = sectionMeta[id];
            const p = progress[id] ?? 0;
            const shift =
              fine && hovered !== null && hovered !== i
                ? i < hovered
                  ? -8
                  : 8
                : 0;

            return (
              <motion.button
                key={id}
                type="button"
                data-cursor="play"
                aria-label={`Explore ${meta.card}`}
                onClick={() => scrollTo(`#${id}`)}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className="group relative aspect-video w-[78%] min-w-0 shrink-0 snap-start overflow-visible text-left sm:w-[46%] md:w-[32%] lg:w-[24%] xl:w-[22%]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                animate={{
                  x: shift,
                  scale: fine && hovered === i ? 1.035 : 1,
                  zIndex: hovered === i ? 10 : 1,
                }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,61,90,0.5)]">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: hovered === i ? 1.08 : 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <PosterBackdrop palette={meta.palette}>
                      <span className="absolute -right-2 -top-4 font-display text-7xl leading-none text-white/[0.07] sm:-top-6 sm:text-9xl">
                        {GLYPHS[id]}
                      </span>
                    </PosterBackdrop>
                  </motion.div>

                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                    <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-crimson-2 sm:text-[10px] sm:tracking-[0.3em]">
                      Episode {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="break-words font-display text-xl leading-tight tracking-wide text-bone sm:text-2xl lg:text-3xl">
                      {meta.card}
                    </span>

                    <span className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-mist sm:text-xs lg:translate-y-2 lg:opacity-0 lg:transition lg:duration-300 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                      {meta.meta}
                    </span>
                  </div>

                  <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/40 text-xs text-bone backdrop-blur transition duration-300 group-hover:border-bone group-hover:bg-bone group-hover:text-ink sm:right-3 sm:top-3 sm:h-9 sm:w-9">
                    ▶
                  </span>
                </div>

                <div className="mt-2 h-[3px] w-full overflow-hidden rounded bg-white/15">
                  <motion.div
                    className="h-full origin-left bg-crimson"
                    animate={{ scaleX: Math.max(0.04, p) }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        <RailButtons rail={rail} />
      </div>
    </section>
  );
}
