
import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { ProjectArt } from './Poster';

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="w-[84vw] shrink-0 snap-start sm:w-[62vw] lg:w-[40vw] xl:w-[36vw]"
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring relative flex aspect-[4/5] flex-col overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:ring-white/25 sm:aspect-[16/12] lg:aspect-auto lg:h-[66vh]"
        >
          {/* Project artwork */}
          <motion.div
            layoutId={`art-${project.id}`}
            className="absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.05]">
              <ProjectArt project={project} />
            </div>
          </motion.div>

          {/* Readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

          {/* Top labels: reserved space prevents overlap */}
          <div className="relative z-[1] flex items-start justify-between gap-3 px-5 pt-5 sm:px-7 sm:pt-7">
            <div className="flex min-w-0 items-center gap-2">
              <span className="shrink-0 font-display text-xl leading-none text-crimson-2">
                S
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-bone/85 sm:text-[10px] sm:tracking-[0.3em]">
                ORIGINAL
              </span>
            </div>

            <span className="max-w-[46%] shrink-0 rounded border border-white/25 bg-black/40 px-2 py-1 text-right text-[9px] font-semibold leading-tight text-bone/90 backdrop-blur sm:text-[10px]">
              {project.year}
            </span>
          </div>

          {/* Content stays aligned at the bottom */}
          <div className="relative z-[1] mt-auto min-w-0 p-5 sm:p-7 lg:p-8 [transform:translateZ(40px)]">
            <p className="mb-3 line-clamp-2 text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-mist sm:text-[10px] sm:tracking-[0.22em]">
              {project.genre}
            </p>

            <motion.h3
              layoutId={`title-${project.id}`}
              className="max-w-full break-words font-display text-[clamp(2rem,4.5vw,4.2rem)] leading-[0.92] tracking-wide text-bone [overflow-wrap:anywhere]"
            >
              {project.title}
            </motion.h3>

            <p className="mt-3 line-clamp-3 max-w-xl text-[12px] leading-relaxed text-bone/85 sm:mt-4 sm:text-sm lg:text-[15px]">
              {project.logline}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[9px] font-medium leading-tight text-bone/85 backdrop-blur sm:text-[10px]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3">
              <span className="flex min-h-10 items-center gap-2 rounded-md bg-bone px-4 text-xs font-bold text-ink transition group-hover:bg-white sm:min-h-11 sm:px-5 sm:text-sm">
                ▶ View Project
              </span>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-10 items-center gap-2 rounded-md border border-white/25 bg-black/40 px-3 text-xs font-semibold text-bone backdrop-blur transition hover:border-bone sm:min-h-11 sm:px-4 sm:text-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
