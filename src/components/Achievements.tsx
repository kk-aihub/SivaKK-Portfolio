import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg
      viewBox="0 0 30 64"
      className={`h-12 w-auto shrink-0 text-[#d9b46a] ${
        side === 'r' ? '-scale-x-100' : ''
      }`}
      aria-hidden
    >
      <path
        d="M26 62C10 52 4 36 8 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse
          key={y}
          cx={i < 2 ? 9 : 8 + i * 1.6}
          cy={y}
          rx="5"
          ry="2.2"
          fill="currentColor"
          opacity="0.85"
          transform={`rotate(-40 ${8 + i * 1.6} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading
        kicker="Milestones · Recognition · Impact"
        title="Achievements & Highlights"
      />

      <div className="gutter grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            className="h-full min-w-0"
            initial={{ opacity: 0, y: 35, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{
              duration: 0.65,
              delay: Math.min(i, 5) * 0.06,
              ease: EASE,
            }}
          >
            <Tilt max={6} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-7 ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60 sm:min-h-[380px]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25"
                />

                <div className="relative flex min-h-[66px] items-center justify-center gap-2">
                  <Laurel side="l" />
                  <p className="max-w-[150px] text-center text-[9px] font-bold uppercase leading-relaxed tracking-[0.18em] text-[#d9b46a]">
                    {a.laurel}
                  </p>
                  <Laurel side="r" />
                </div>

                <h3 className="relative mt-5 min-h-[2.8em] break-words text-center font-display text-2xl leading-tight tracking-wide text-bone [overflow-wrap:anywhere]">
                  {a.title}
                </h3>

                <p className="relative mt-3 min-h-[2.5em] break-words text-center text-[11px] font-semibold uppercase leading-relaxed tracking-[0.13em] text-[#d9b46a] [overflow-wrap:anywhere]">
                  {a.org}
                </p>

                <p className="relative mt-4 flex-1 break-words text-center text-[13px] leading-relaxed text-bone/70 [overflow-wrap:anywhere]">
                  {a.detail}
                </p>

                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-5 inline-flex min-h-10 shrink-0 items-center justify-center gap-1 border-t border-[#d9b46a]/15 pt-4 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 transition hover:decoration-[#d9b46a]"
                  >
                    View certificate ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
            Certifications
            <span className="text-mist"> · {certifications.length} credentials</span>
          </h3>
          <p className="text-xs text-smoke">{issuers.join(' · ')}</p>
        </div>

        <div className="group/rail relative">
          <div
            ref={rail}
            className="rail gutter flex snap-x snap-mandatory gap-3 overflow-x-auto py-5"
          >
            {certifications.map((c, i) => {
              const cardClassName =
                'group relative flex min-h-[170px] w-[245px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30';
              const content = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <span className="break-words text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-crimson-2">
                      {c.issuer}
                    </span>
                    {c.link ? (
                      <span className="shrink-0 text-sm text-smoke transition group-hover:text-bone" aria-hidden>
                        ↗
                      </span>
                    ) : (
                      <span className="shrink-0 text-[10px] uppercase tracking-wider text-smoke">
                        Credential
                      </span>
                    )}
                  </div>
                  <div className="mt-5">
                    <p className="break-words text-sm font-medium leading-snug text-bone">
                      {c.name}
                    </p>
                    {c.date && (
                      <p className="mt-3 text-xs text-smoke">Issued {c.date}</p>
                    )}
                  </div>
                </>
              );

              return (
                <motion.div
                  key={`${c.issuer}-${c.name}`}
                  className="shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(i, 6) * 0.04,
                    ease: EASE,
                  }}
                >
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className={cardClassName}
                    >
                      {content}
                    </a>
                  ) : (
                    <article className={cardClassName}>{content}</article>
                  )}
                </motion.div>
              );
            })}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>
    </>
  );
}
