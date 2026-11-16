import { useState } from 'react';
import { categories, products, ui, type Category, type Lang } from '../data/site';

export default function Collections({ lang = 'en' }: { lang?: Lang }) {
  const t = ui[lang].collections;
  const [active, setActive] = useState<Category | 'all'>('all');
  const visible = active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label={t.tabsLabel}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {categories.map((c) => {
          const selected = c.id === active;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c.id)}
              className={`shrink-0 border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                selected
                  ? 'border-fg bg-fg text-surface'
                  : 'border-fg/15 text-fg/70 hover:border-fg hover:text-fg'
              }`}
            >
              {c.label[lang]}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p) => (
          <li key={p.id}>
            <a href="#collections" className="group block">
              {/* Product photos are shot on white, so the tile stays white in both themes. */}
              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-white">
                <span
                  aria-hidden="true"
                  className={`absolute right-3 top-4 text-ink/35 [writing-mode:vertical-rl] sm:right-4 sm:top-5 ${
                    lang === 'ja'
                      ? 'text-[9px] tracking-[0.36em] sm:text-[10px]'
                      : 'font-display text-[11px] tracking-[0.3em] sm:text-[13px]'
                  }`}
                >
                  {p.accent[lang]}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3ede2] transition-transform duration-700 group-hover:scale-110"
                />
                <img
                  src={`/images/${p.image}`}
                  alt={`${p.name[lang]} ${p.sizes[lang]}`}
                  width={p.width}
                  height={p.height}
                  loading="lazy"
                  className={`relative h-[74%] w-auto max-w-[68%] object-contain transition-transform duration-700 ease-out group-hover:-translate-y-2 ${
                    p.cutout ? 'drop-shadow-xl' : 'mix-blend-multiply'
                  }`}
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gold sm:text-[11px]">
                    {p.note[lang]}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg leading-tight sm:text-[21px]">
                    {p.name[lang]}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-2 hidden text-lg text-fg/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-shu sm:block"
                >
                  →
                </span>
              </div>
              <p className="mt-3 hidden max-w-sm text-[15px] leading-relaxed text-fg/65 sm:block">
                {p.description[lang]}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-fg/45 sm:mt-4">
                {p.sizes[lang]}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
