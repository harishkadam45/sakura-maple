import { useEffect, useState } from 'react';
import { langs, nav, ui, type Lang } from '../data/site';
import Logo from './Logo';

function LangToggle({ lang, className = '' }: { lang: Lang; className?: string }) {
  // Keep the visitor on the same section when switching language.
  const [hash, setHash] = useState('');
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <div
      role="group"
      aria-label={ui[lang].language}
      className={`flex items-center border border-fg/20 text-[11px] tracking-[0.16em] ${className}`}
    >
      {(Object.keys(langs) as Lang[]).map((code) => {
        const current = code === lang;
        return (
          <a
            key={code}
            href={langs[code].home + hash}
            hrefLang={code}
            lang={code}
            aria-current={current ? 'true' : undefined}
            title={langs[code].name}
            className={`px-3 py-2 transition-colors duration-300 ${
              current ? 'bg-fg text-surface' : 'text-fg/70 hover:text-gold'
            }`}
          >
            {langs[code].label}
          </a>
        );
      })}
    </div>
  );
}

function ThemeToggle({ lang, className = '' }: { lang: Lang; className?: string }) {
  // The current theme lives on <html data-theme>, set before paint in Layout.astro.
  // Icons are swapped with CSS, so there is no flash or hydration mismatch.
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode: the choice just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui[lang].theme}
      title={ui[lang].theme}
      className={`h-[34px] w-[34px] shrink-0 items-center justify-center border border-fg/20 text-fg/75 transition-colors duration-300 hover:border-gold hover:text-gold ${className}`}
    >
      {/* Moon: shown in the light theme (click for night) */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      {/* Sun: shown in the dark theme (click for day) */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="hidden h-4 w-4 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
    </button>
  );
}

export default function Header({ lang = 'en' }: { lang?: Lang }) {
  const t = ui[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 text-fg transition-colors duration-500 ${
        scrolled || open ? 'bg-surface-2/95 backdrop-blur' : 'bg-surface-2'
      } ${scrolled ? 'border-b border-fg/10' : 'border-b border-transparent'}`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo lang={lang} />

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap py-2 text-[12px] uppercase tracking-[0.2em] text-fg/75 transition-colors hover:text-fg"
            >
              {item.label[lang]}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} className="hidden sm:flex" />
          <ThemeToggle lang={lang} className="hidden sm:flex" />
          <a
            href="#retailers"
            className="btn btn-solid hidden whitespace-nowrap !px-5 !py-3 md:inline-flex"
          >
            {t.findInStore}
          </a>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] xl:hidden"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-6 bg-fg transition-transform duration-300 ${
                open ? 'translate-y-[4px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-6 bg-fg transition-transform duration-300 ${
                open ? '-translate-y-[4px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto bg-surface-2 px-5 pb-24 sm:px-8 xl:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col border-t border-fg/10">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-fg/10 py-5 font-display text-2xl"
            >
              {item.label[lang]}
              <span className="font-sans text-[11px] tracking-[0.2em] text-gold">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <div className="mt-8 flex items-center justify-between gap-4">
          <span className="text-[11px] uppercase tracking-[0.24em] text-fg/50">
            {t.settings}
          </span>
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} />
            <ThemeToggle lang={lang} className="flex" />
          </div>
        </div>
        <a href="#wholesale" onClick={() => setOpen(false)} className="btn btn-solid mt-6 w-full">
          {t.wholesaleInquiry}
        </a>
      </div>
    </header>
  );
}
