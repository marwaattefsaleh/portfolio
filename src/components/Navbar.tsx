import { useEffect, useMemo, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { site } from '../data/content';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  const activeId = useActiveSection();

  // Solid/blurred background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Close the drawer with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {
      /* private mode — ignore */
    }
  };

  const navClasses = useMemo(
    () =>
      [
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/85 dark:bg-plum-900/85 shadow-soft backdrop-blur-md'
          : 'bg-transparent',
      ].join(' '),
    [scrolled]
  );

  const drawerLinks = (
    <ul className="flex flex-col gap-1">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={() => setDrawerOpen(false)}
            className={`block rounded-xl px-4 py-3 text-lg font-semibold transition-colors ${
              activeId === link.href.slice(1)
                ? 'bg-blush-100 text-coral-600 dark:bg-blush-300/20 dark:text-blush-300'
                : 'text-plum-soft hover:bg-lavender-100 dark:text-lavender-100 dark:hover:bg-plum-800'
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className={navClasses}>
        <nav
          aria-label="Primary"
          className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 font-display text-2xl font-bold text-plum dark:text-cream"
          >
            <span
              className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blush-300 via-coral-400 to-sunny-300 text-lg text-white shadow-soft transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
              aria-hidden="true"
            >
              ✨
            </span>
            Marwa Attef
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    activeId === link.href.slice(1)
                      ? 'bg-blush-100 text-coral-600 dark:bg-blush-300/20 dark:text-blush-300'
                      : 'text-plum-soft hover:bg-lavender-100 hover:text-violet-600 dark:text-lavender-100/90 dark:hover:bg-plum-800 dark:hover:text-cream'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-hand controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid h-10 w-10 place-items-center rounded-full bg-lavender-100 text-violet-600 transition-transform duration-200 hover:scale-110 active:scale-95 dark:bg-plum-800 dark:text-sunny-200"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden rounded-full bg-coral-500 px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow lg:inline-flex"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setDrawerOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              className="grid h-10 w-10 place-items-center rounded-full bg-lavender-100 text-plum transition-transform duration-200 hover:scale-110 dark:bg-plum-800 dark:text-cream lg:hidden"
            >
              {drawerOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-in drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 lg:hidden ${drawerOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-plum-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-cream-soft p-6 pt-24 shadow-lift transition-transform duration-300 ease-out dark:bg-plum-900 ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {drawerLinks}
          <a
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            className="rounded-full bg-coral-500 px-5 py-3 text-center text-sm font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-600"
          >
            Let&apos;s Talk
          </a>
          <p className="mt-auto text-xs text-plum-muted dark:text-lavender-100/50">
            {site.email}
          </p>
        </div>
      </div>
    </>
  );
}

/** Tiny scrollspy: highlights the nav link matching the section in view. */
function useActiveSection() {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
