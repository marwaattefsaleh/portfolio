import { useState, type CSSProperties, type FormEvent } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { site } from '../data/content';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const contactItems = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: 'Phone', value: site.phone, href: `tel:${site.phoneHref}`, Icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/marwa-attef', href: site.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/marwa-attef', href: site.github, Icon: GithubIcon },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // -------------------------------------------------------------------
    // Front-end only: opens the visitor's email app pre-filled.
    // To route through a real service instead, replace this block with a
    // fetch() to a form provider such as Formspree or Resend.
    //   e.g. await fetch('https://formspree.io/f/yourFormId', {
    //          method: 'POST',
    //          body: new FormData(e.currentTarget),
    //        });
    // -------------------------------------------------------------------
    const subject = encodeURIComponent(`Hello from ${name || 'your portfolio'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClasses =
    'w-full rounded-2xl border-2 border-lavender-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-plum outline-none transition-colors placeholder:text-plum-muted/70 focus:border-coral-400 dark:border-plum-700 dark:bg-plum-900/60 dark:text-cream dark:placeholder:text-lavender-100/40';

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-peach-50 to-cream py-20 dark:from-plum-950 dark:via-plum-900/40 dark:to-plum-950 sm:py-28"
    >
      {/* blob decoration */}
      <div aria-hidden="true" className="blob absolute -right-24 top-16 h-80 w-80 bg-sunny-200/60 blur-2xl dark:bg-sunny-300/5" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span aria-hidden="true" className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blush-200 via-peach-200 to-sunny-200 text-2xl shadow-soft dark:from-plum-800 dark:via-plum-800 dark:to-blush-300/30">
            🚀
          </span>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-coral-500 dark:text-coral-400">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-plum dark:text-cream sm:text-4xl">
            Let&apos;s build something great together
          </h2>
          <p className="mt-3 text-base leading-relaxed text-plum-soft dark:text-lavender-100/75 sm:text-lg">
            Whether it&apos;s a new app idea, a collaboration, or just to say hi — my inbox is
            always open.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details card */}
          <div className="reveal space-y-4">
            <div className="flex items-center gap-3 rounded-3xl border border-white/70 bg-white/70 p-5 shadow-soft dark:border-plum-800 dark:bg-plum-900/60">
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blush-100 text-xl dark:bg-plum-800">
                📍
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-plum-muted dark:text-lavender-100/60">
                  Based in
                </p>
                <p className="font-semibold text-plum dark:text-cream">Alexandria, Egypt</p>
              </div>
            </div>

            {contactItems.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-white/70 bg-white/70 p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-coral-400/50 hover:shadow-lift dark:border-plum-800 dark:bg-plum-900/60"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lavender-100 text-violet-600 transition-colors duration-300 group-hover:bg-coral-500 group-hover:text-white dark:bg-plum-800 dark:text-lavender-300">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-plum-muted dark:text-lavender-100/60">
                    {label}
                  </p>
                  <p className="truncate font-semibold text-plum dark:text-cream">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-5 rounded-4xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-sm dark:border-plum-800 dark:bg-plum-900/60 sm:p-8"
            style={{ '--reveal-delay': '120ms' } as CSSProperties}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold text-plum dark:text-cream">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold text-plum dark:text-cream">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-bold text-plum dark:text-cream">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project…"
                className={`${inputClasses} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow"
            >
              <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              Send Message
            </button>

            <p aria-live="polite" className="text-center text-sm font-medium text-[#2FA27E] dark:text-[#7DDCB5]">
              {sent ? 'Opening your email app… 💌' : '\u00A0'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
