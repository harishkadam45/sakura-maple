// Turns the full-size originals in src/assets/original into web-sized WebP files
// in public/images. Re-run with `npm run images` after adding or replacing photos.
import sharp from 'sharp';
import fs from 'node:fs';

const SRC = 'src/assets/original';
const OUT = 'public/images';
fs.mkdirSync(OUT, { recursive: true });

// Product shots: trim the empty border so every bottle fills its tile the same way.
// `left` keeps only the left part of the image (front label) where the photo
// shows the front and back of the bottle side by side.
const products = [
  { in: 'sakura-250ml.jpg', out: 'sakura-250ml', left: 0.5 },
  { in: 'sakura-375ml.jpg', out: 'sakura-375ml', left: 0.5 },
  { in: 'sakura-1l.jpg', out: 'sakura-1l' },
  { in: 'sakura-45gal.jpg', out: 'sakura-45gal' },
  { in: 'sierra-250ml.jpg', out: 'sierra-250ml' },
  { in: 'sierra-375ml.jpg', out: 'sierra-375ml' },
  { in: 'kiki-maple.png', out: 'kiki-maple' },
  { in: 'kiki-blueberry.png', out: 'kiki-blueberry' },
  { in: 'kiki-strawberry.png', out: 'kiki-strawberry' },
  { in: 'kiki-cranberry.png', out: 'kiki-cranberry' },
  { in: 'kiki-lemon.png', out: 'kiki-lemon' },
];

for (const p of products) {
  let input = await sharp(`${SRC}/${p.in}`).rotate().toBuffer();
  if (p.left) {
    const { width, height } = await sharp(input).metadata();
    input = await sharp(input)
      .extract({ left: 0, top: 0, width: Math.round(width * p.left), height })
      .toBuffer();
  }
  const trimmed = await sharp(input).trim({ threshold: 12 }).toBuffer();
  const info = await sharp(trimmed)
    .resize({ height: 1000, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(`${OUT}/${p.out}.webp`);
  console.log(`${p.out}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}

// Photography: just resize.
const photos = [
  { in: 'pancakes.jpg', out: 'pancakes', width: 1500 },
  { in: 'hero-poster.jpg', out: 'breakfast-bowl', width: 1280 },
  { in: 'lifestyle-syrup.jpg', out: 'baumkuchen', width: 800 },
  { in: 'lifestyle-kiki.jpg', out: 'sap-tap', width: 1080 },
  { in: 'cutting-board.jpg', out: 'cutting-board', width: 1400 },
];
for (const p of photos) {
  const info = await sharp(`${SRC}/${p.in}`)
    .resize({ width: p.width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${p.out}.webp`);
  console.log(`${p.out}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}

// Logo: the original wordmark is white (made for dark backgrounds). Export it as-is
// for dark surfaces, plus a copy with the wordmark recoloured for light surfaces.
const svg = fs.readFileSync(`${SRC}/logo.svg`, 'utf8');
const logos = [
  { out: 'logo-on-dark', svg },
  { out: 'logo-on-light', svg: svg.replaceAll('fill="#FFFFFF"', 'fill="#0d0c0b"') },
];
for (const l of logos) {
  const info = await sharp(Buffer.from(l.svg), { density: 72 })
    .resize({ width: 720 })
    .webp({ quality: 90 })
    .toFile(`${OUT}/${l.out}.webp`);
  console.log(`${l.out}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
