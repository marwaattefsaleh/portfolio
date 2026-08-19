import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { projects, type Project } from '../data/content';

// Per-card accent gradients (cycled through by index)
const accents = [
  'from-blush-200 to-coral-400/80',
  'from-lavender-200 to-violet-500/80',
  'from-sunny-200 to-peach-300/80',
  'from-mint-200 to-teal-400/70',
  'from-peach-200 to-coral-400/70',
  'from-blush-200 to-lavender-400/80',
];

const emojis = ['🛒', '🏡', '🍽️', '✈️', '🚗', '🗓️', '🍗', '🛵', '📦', '🎓', '🎨', '📋', '🏭', '📡', '💳', '💬', '⚽', '🚢'];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-lavender-50 to-cream py-20 dark:from-plum-950 dark:via-plum-900/40 dark:to-plum-950 sm:py-28"
    >
      {/* blob decoration */}
      <div aria-hidden="true" className="blob-alt absolute -left-24 top-1/3 h-80 w-80 bg-blush-100/70 blur-2xl dark:bg-blush-300/5" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span aria-hidden="true" className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blush-200 via-peach-200 to-sunny-200 text-2xl shadow-soft dark:from-plum-800 dark:via-plum-800 dark:to-blush-300/30">
            🚀
          </span>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-coral-500 dark:text-coral-400">
            Projects
          </p>
          <h2 className="font-display text-3xl font-bold text-plum dark:text-cream sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-3 text-base leading-relaxed text-plum-soft dark:text-lavender-100/75 sm:text-lg">
            A selection of apps I&apos;ve shipped — tap a card for highlights.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const accent = accents[index % accents.length];
  const emoji = emojis[index % emojis.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className={`group flex flex-col rounded-4xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift dark:border-plum-800 dark:bg-plum-900/60 ${
        open ? 'hover:translate-y-0' : ''
      }`}
    >
      {/* Accent banner */}
      <div className={`mb-5 grid h-20 place-items-center rounded-3xl bg-gradient-to-br ${accent} text-4xl shadow-soft transition-transform duration-300 group-hover:scale-[1.03]`}>
        <span aria-hidden="true">{emoji}</span>
      </div>

      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold text-plum dark:text-cream">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-plum-soft dark:text-lavender-100/75">
            {project.tagline}
          </p>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="mt-1 shrink-0 rounded-lg p-1.5 text-plum-soft/50 transition-colors hover:bg-lavender-100 hover:text-coral-500 dark:text-lavender-100/40 dark:hover:bg-plum-800 dark:hover:text-coral-400"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Tech badges */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-lavender-100 px-2.5 py-1 text-xs font-semibold text-violet-600 dark:bg-plum-800 dark:text-lavender-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expand highlights */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-coral-500 transition-colors hover:text-coral-600 dark:text-coral-400"
      >
        Highlights
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="highlights"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-2 border-t border-lavender-200/70 pt-4 dark:border-plum-800">
              {project.highlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-plum-soft dark:text-lavender-100/80">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-400" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
