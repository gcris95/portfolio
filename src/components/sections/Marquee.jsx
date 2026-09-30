import {siMilanote, siReact, siGit, siTrello, siTailwindcss, siTypescript, siVite, siFigma, siUnity, siNpm, siCss, siCplusplus, siC, siPython} from 'simple-icons';

const stack = [siMilanote, siGit, siTrello, siReact, siTailwindcss, siTypescript, siVite, siFigma, siUnity, siNpm, siCss, siCplusplus, siC, siPython];

const MIN_ITEMS = 24;
const SECONDS_PER_ITEM = 5; 

export default function Marquee({ items = stack }) {
  const repeat = Math.ceil(MIN_ITEMS / items.length);
  const group = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="marquee flex overflow-hidden border-b border-border py-6 mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {[0, 1].map((g) => (
        <ul
          key={g}
          aria-hidden={g === 1}
          className="marquee-group flex shrink-0 items-center"
          style={{ animationDuration: `${group.length * SECONDS_PER_ITEM}s` }}
        >
          {group.map((icon, i) => (
            <li
              key={`${g}-${i}`}
              style={{ '--brand': `#${icon.hex}` }}
              className="px-6 md:px-8 text-primary transition-colors hover:text-(--brand)"
            >
              <svg
                viewBox="0 0 24 24"
                role="img"
                aria-label={g === 0 ? icon.title : undefined}
                className="h-7 w-7 fill-current"
              >
                <title>{icon.title}</title>
                <path d={icon.path}/>                 
              </svg>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}