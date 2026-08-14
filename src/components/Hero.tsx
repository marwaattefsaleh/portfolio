import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, Coffee, Download, Mail, Sparkles } from 'lucide-react';
import { roles, site } from '../data/content';
import Avatar from './Avatar';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

// Friendly rewrite of the provided bio. Edit freely.
const heroIntro =
  "I'm an accomplished Senior iOS Developer with a proven track record at Enozom, delivering innovative applications with Swift and Agile development. I care deeply about great user experience, app performance, and mentoring the next generation of iOS engineers along the way.";

const ROTATE_MS = 2600;

const socials = [
  { label: 'LinkedIn', href: site.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: site.github, Icon: GithubIcon },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const },
    }),
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft pastel blobs in the background */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-blush-200/60 blur-3xl dark:bg-blush-300/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lavender-200/60 blur-3xl dark:bg-lavender-300/10"
      />
      <div
        aria-hidden="true"
        className="absolute right-1/3 top-1/4 h-56 w-56 rounded-full bg-sunny-200/50 blur-3xl dark:bg-sunny-300/10"
      />
      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0 text-lavender-300/40 dark:text-lavender-100/10"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:flex-row lg:gap-8 lg:pb-28 lg:pt-40">
        {/* ----- Text column ----- */}
        <div className="flex-1 text-center lg:text-left">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/60 px-4 py-1.5 text-sm font-semibold text-plum-soft shadow-soft backdrop-blur-sm dark:border-plum-800 dark:bg-plum-900/60 dark:text-lavender-100"
          >
            <span aria-hidden="true">👋</span>
            Hi, I&apos;m Marwa — welcome to my corner of the internet
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 font-display text-4xl font-bold leading-tight text-plum dark:text-cream sm:text-5xl lg:text-6xl"
          >
            Senior iOS Engineer
          </motion.h1>

          {/* Rotating role subtitle */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mt-4">
            <span
              aria-hidden="true"
              className="mr-2 inline-flex h-9 w-9 -translate-y-0.5 items-center justify-center rounded-full bg-gradient-to-br from-sunny-200 to-coral-400/70 text-coral-600 dark:text-cream"
            >
              <Sparkles size={16} />
            </span>
            <span
              className="inline-block overflow-hidden py-1 align-middle font-display text-xl font-semibold text-coral-500 dark:text-coral-400 sm:text-2xl"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-plum-soft dark:text-lavender-100/85 lg:mx-0"
          >
            {heroIntro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow"
            >
              View My Work
              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-violet-500/40 bg-white/50 px-7 py-3.5 text-sm font-bold text-violet-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-500 hover:text-white dark:bg-plum-900/50 dark:text-lavender-100"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 text-plum-soft shadow-soft transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-coral-500 hover:text-white dark:bg-plum-900/70 dark:text-lavender-100 dark:hover:bg-coral-500"
              >
                <Icon size={20} />
              </a>
            ))}
            <span className="ml-2 hidden text-sm text-plum-muted dark:text-lavender-100/60 sm:inline">
              {site.email} · {site.phone}
            </span>
          </motion.div>
        </div>

        {/* ----- Illustration column ----- */}
        <div className="relative flex-1">
          {/* Blob behind the avatar */}
          <div
            aria-hidden="true"
            className="blob absolute inset-0 m-auto h-[85%] w-[85%] bg-gradient-to-br from-blush-200 via-peach-200 to-sunny-200 dark:from-plum-800 dark:via-plum-900 dark:to-blush-300/20"
          />
          {/* Outer ring doodle */}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="blob-alt absolute inset-0 m-auto h-[78%] w-[78%] text-coral-400/50"
          >
            <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" />
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <Avatar className="relative z-10 mx-auto w-full max-w-md drop-shadow-lift" />
          </motion.div>

          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -left-2 top-10 z-20 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-2.5 text-sm font-semibold text-plum-soft shadow-lift backdrop-blur-sm dark:bg-plum-800/80 dark:text-cream"
            >
              <span aria-hidden="true">💻</span> Swift · SwiftUI · UIKit
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="absolute -right-2 bottom-16 z-20 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-2.5 text-sm font-semibold text-plum-soft shadow-lift backdrop-blur-sm dark:bg-plum-800/80 dark:text-cream"
            >
              <Coffee size={16} className="text-coral-500" /> Powered by coffee
            </motion.div>
          </motion.div>

          {/* Floating sparkles */}
          <motion.span
            aria-hidden="true"
            className="absolute left-6 top-24 text-2xl"
            animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            ✨
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute right-10 top-6 text-3xl"
            animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          >
            🚀
          </motion.span>
        </div>
      </div>
    </section>
  );
}
