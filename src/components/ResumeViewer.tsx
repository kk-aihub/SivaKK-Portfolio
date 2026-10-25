
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

export default function ResumeSection({
  onView,
}: {
  onView: () => void;
}) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />

      <div className="gutter mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          className="min-w-0 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <CollapsibleSheet />
        </motion.div>

        <aside className="min-w-0 w-full lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-2xl italic leading-tight text-bone sm:text-3xl">
            Every episode, on one page.
          </p>

          <p className="mt-3 text-sm leading-6 text-mist">
            Education, training, projects, achievements and{' '}
            {certifications.length} certifications — view it here or take a
            copy with you.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-5 py-3 text-sm font-bold text-ink transition hover:bg-white sm:text-[15px]"
              >
                ▶ View Resume
              </button>
            </Magnetic>

            {profile.resumePdf ? (
              <Magnetic className="w-full">
                <a
                  href={profile.resumePdf}
                  download="Siva_KK_Resume.pdf"
                  data-cursor="link"
                  className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-bone transition hover:bg-white/15 sm:text-[15px]"
                >
                  ⤓ Download Resume
                </a>
              </Magnetic>
            ) : (
              <p className="rounded-md border border-white/10 px-4 py-3 text-center text-xs leading-relaxed text-smoke">
                Resume download will be available when the PDF is added.
              </p>
            )}
          </div>

          <dl className="mt-6 grid min-w-0 grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center sm:mt-8">
            {[
              {
                v: education[0]?.score?.replace('CGPA ', '') || '—',
                k: 'CGPA',
              },
              { v: String(projects.length), k: 'Originals' },
              { v: String(certifications.length), k: 'Certs' },
            ].map((item) => (
              <div
                key={item.k}
                className="min-w-0 bg-ink-2 px-1.5 py-4 sm:px-2 sm:py-5"
              >
                <dd className="break-words font-display text-xl leading-tight text-bone sm:text-2xl lg:text-3xl">
                  {item.v}
                </dd>
                <dt className="mt-2 break-words text-[9px] font-bold uppercase tracking-[0.12em] text-smoke sm:text-[10px] sm:tracking-[0.2em]">
                  {item.k}
                </dt>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </>
  );
}

function CollapsibleSheet() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-w-0 w-full">
      <div
        className={`min-w-0 overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${
          open ? 'max-h-[6000px]' : 'max-h-[560px]'
        }`}
      >
        <ResumeSheet />
      </div>

      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-44 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone"
          >
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return (
    <h4 className="mb-3 mt-7 border-b border-white/10 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2 first:mt-0 sm:tracking-[0.3em]">
      {children}
    </h4>
  );
}

export function ResumeSheet() {
  return (
    <article className="relative min-w-0 w-full overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-4 ring-1 ring-white/10 sm:p-6 lg:p-8">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent"
      />

      <header className="mb-6 flex min-w-0 flex-col gap-4 border-b border-white/10 pb-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-5 sm:pb-6">
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.3em] text-smoke">
            STARRING
          </p>
          <h3 className="mt-2 break-words font-display text-[clamp(1.8rem,7vw,3.2rem)] leading-[0.95] tracking-wide text-bone">
            {profile.fullName}
          </h3>
        </div>

        <div className="min-w-0 break-words text-xs leading-6 text-mist sm:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="block break-all hover:text-bone"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-x-2 sm:justify-end">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-bone"
            >
              LinkedIn ↗
            </a>
            <span aria-hidden>·</span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-bone"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      <div className="grid min-w-0 grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-x-10">
        <div className="min-w-0">
          <H>Education</H>

          {education.map((item) => (
            <div key={item.school} className="mb-4 min-w-0">
              <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-3">
                <p className="break-words text-sm font-semibold leading-relaxed text-bone">
                  {item.school}, {item.place}
                </p>
                <p className="shrink-0 text-xs text-smoke">{item.period}</p>
              </div>
              <p className="break-words text-xs leading-relaxed text-mist">
                {item.degree} ·{' '}
                <span className="text-bone/80">{item.score}</span>
              </p>
            </div>
          ))}

          <H>Work Experience</H>

          {experience.map((item) => (
            <div key={item.company} className="mb-5 min-w-0">
              <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-3">
                <p className="break-words text-sm font-semibold leading-relaxed text-bone">
                  {item.company} — {item.role}
                </p>
                <p className="shrink-0 text-xs text-smoke">{item.period}</p>
              </div>

              <ul className="mt-2 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex min-w-0 gap-2 break-words text-xs leading-6 text-mist"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Projects</H>

          {projects.map((item) => (
            <div key={item.id} className="mb-4 min-w-0">
              <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-3">
                <p className="break-words text-sm font-semibold text-bone">
                  {item.title}
                </p>
                <p className="text-xs text-smoke">{item.year}</p>
              </div>
              <p className="break-words text-xs leading-5 text-mist">
                {item.stack.join(', ')}
              </p>
            </div>
          ))}
        </div>

        <div className="min-w-0">
          <H>Skills</H>

          <div className="space-y-3">
            {skillCategories.map((category) => (
              <p
                key={category.id}
                className="break-words text-xs leading-6 text-mist"
              >
                <span className="font-semibold text-bone">
                  {category.title}:{' '}
                </span>
                {category.skills.map((skill) => skill.name).join(', ')}
              </p>
            ))}
          </div>

          <H>Achievements</H>

          <ul className="space-y-3">
            {achievements.map((item) => (
              <li
                key={item.id}
                className="break-words text-xs leading-6 text-mist"
              >
                <span className="font-semibold text-bone">
                  {item.title} — {item.org}.
                </span>{' '}
                {item.detail}
              </li>
            ))}
          </ul>

          <H>Certifications</H>

          <div className="space-y-3">
            {Array.from(new Set(certifications.map((item) => item.issuer))).map(
              (issuer) => (
                <p
                  key={issuer}
                  className="break-words text-xs leading-6 text-mist"
                >
                  <span className="font-semibold text-bone">{issuer}: </span>
                  {certifications
                    .filter((item) => item.issuer === issuer)
                    .map((item) => item.name)
                    .join(', ')}
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
