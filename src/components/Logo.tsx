import { langs, ui, type Lang } from '../data/site';

/**
 * The real Sakura Maple logo. The original wordmark is white, so there are two
 * exports: one for dark surfaces and one recoloured for light surfaces.
 * `onDark` forces the dark-surface version (footer), otherwise it follows the theme.
 */
export default function Logo({
  lang = 'en',
  onDark = false,
  className = '',
}: {
  lang?: Lang;
  onDark?: boolean;
  className?: string;
}) {
  const img = 'h-6 w-auto sm:h-[26px]';
  return (
    <a
      href={langs[lang].home}
      className={`block shrink-0 ${className}`}
      aria-label={ui[lang].homeLabel}
    >
      {onDark ? (
        <img src="/images/logo-on-dark.webp" alt="Sakura Maple" width="720" height="73" className={img} />
      ) : (
        <>
          <img
            src="/images/logo-on-light.webp"
            alt="Sakura Maple"
            width="720"
            height="73"
            className={`${img} dark:hidden`}
          />
          <img
            src="/images/logo-on-dark.webp"
            alt=""
            aria-hidden="true"
            width="720"
            height="73"
            className={`${img} hidden dark:block`}
          />
        </>
      )}
    </a>
  );
}
