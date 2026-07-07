// One-off generator for placeholder art (avatars, project mockups, album art).
// Run with: node scripts/gen-images.mjs
import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

function write(path, svg) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg.trim());
}

const initialsAvatar = ({ file, initials, from, to, fg = "#f5f5f4" }) => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="100" fill="url(#g)"/>
  <text x="50%" y="53%" text-anchor="middle" dominant-baseline="middle"
    font-family="Inter, Arial, sans-serif" font-size="72" font-weight="600" fill="${fg}">${initials}</text>
</svg>`;
  write(file, svg);
};

// Testimonial avatars
initialsAvatar({ file: "public/images/testimonials/abhinav.svg", initials: "A", from: "#6366f1", to: "#312e81" });
initialsAvatar({ file: "public/images/testimonials/ayo.svg", initials: "A", from: "#0ea5e9", to: "#0c4a6e" });
initialsAvatar({ file: "public/images/testimonials/ifranulla.svg", initials: "I", from: "#22c55e", to: "#14532d" });
initialsAvatar({ file: "public/images/testimonials/neha.svg", initials: "N", from: "#f59e0b", to: "#78350f" });
initialsAvatar({ file: "public/images/testimonials/rohan.svg", initials: "R", from: "#ec4899", to: "#831843" });
initialsAvatar({ file: "public/images/testimonials/aditi.svg", initials: "A", from: "#8b5cf6", to: "#4c1d95" });

// Profile avatar (abstract, not a real photo)
write(
  "public/images/avatar.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a5b4fc"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ring)" stroke-width="3" opacity="0.5"/>
  <circle cx="200" cy="160" r="62" fill="#3f3f46"/>
  <path d="M90 340c8-70 55-110 110-110s102 40 110 110" fill="#3f3f46"/>
  <text x="50%" y="94%" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="600" fill="#e4e4e7">SM</text>
</svg>`
);

// Music placeholders (generic album-art style, no real cover art)
const musicArt = ({ file, label, from, to }) => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" rx="24" fill="url(#g)"/>
  <circle cx="200" cy="200" r="70" fill="rgba(0,0,0,0.25)"/>
  <circle cx="200" cy="200" r="70" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <circle cx="200" cy="200" r="14" fill="#0a0a0a"/>
  <text x="50%" y="92%" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.85)">${label}</text>
</svg>`;
  write(file, svg);
};

musicArt({ file: "public/images/music/black-to-back.svg", label: "Amy Winehouse", from: "#f59e0b", to: "#7c2d12" });
musicArt({ file: "public/images/music/beanie-song.svg", label: "Chezile", from: "#06b6d4", to: "#164e63" });
musicArt({ file: "public/images/music/feel-it-still.svg", label: "Portugal. The Man", from: "#84cc16", to: "#365314" });
musicArt({ file: "public/images/music/feel-me.svg", label: "Selena Gomez", from: "#ec4899", to: "#831843" });
musicArt({ file: "public/images/music/i-was-never-there.svg", label: "The Weeknd", from: "#71717a", to: "#18181b" });
musicArt({ file: "public/images/music/not-like-us.svg", label: "Kendrick Lamar", from: "#ef4444", to: "#450a0a" });
musicArt({ file: "public/images/music/when-i-grow-up.svg", label: "NF", from: "#3b82f6", to: "#1e3a8a" });
musicArt({ file: "public/images/music/hold-on.svg", label: "Chord Overstreet", from: "#a855f7", to: "#3b0764" });
musicArt({ file: "public/images/music/easy-on-me.svg", label: "Adele", from: "#64748b", to: "#0f172a" });

// Project browser-window mockups
const projectMockup = ({ file, title, from, to, accent }) => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="520" rx="18" fill="url(#bg)"/>
  <rect x="0" y="0" width="800" height="44" rx="18" fill="rgba(0,0,0,0.25)"/>
  <circle cx="26" cy="22" r="6" fill="#f87171"/>
  <circle cx="46" cy="22" r="6" fill="#fbbf24"/>
  <circle cx="66" cy="22" r="6" fill="#34d399"/>
  <rect x="120" y="14" width="300" height="16" rx="8" fill="rgba(255,255,255,0.15)"/>
  <rect x="60" y="90" width="300" height="26" rx="6" fill="rgba(255,255,255,0.9)"/>
  <rect x="60" y="130" width="440" height="14" rx="6" fill="rgba(255,255,255,0.5)"/>
  <rect x="60" y="152" width="380" height="14" rx="6" fill="rgba(255,255,255,0.35)"/>
  <rect x="60" y="190" width="140" height="42" rx="10" fill="${accent}"/>
  <rect x="60" y="260" width="210" height="200" rx="14" fill="rgba(255,255,255,0.12)"/>
  <rect x="290" y="260" width="210" height="200" rx="14" fill="rgba(255,255,255,0.18)"/>
  <rect x="520" y="260" width="210" height="200" rx="14" fill="rgba(255,255,255,0.12)"/>
  <rect x="80" y="285" width="170" height="90" rx="8" fill="rgba(0,0,0,0.2)"/>
  <rect x="310" y="285" width="170" height="90" rx="8" fill="rgba(0,0,0,0.2)"/>
  <rect x="540" y="285" width="170" height="90" rx="8" fill="rgba(0,0,0,0.2)"/>
  <text x="400" y="500" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.85)">${title}</text>
</svg>`;
  write(file, svg);
};

projectMockup({ file: "public/images/projects/ayoremi.svg", title: "AyoRemi", from: "#fb7185", to: "#4c0519", accent: "#fda4af" });
projectMockup({ file: "public/images/projects/mechx-ai.svg", title: "MechX-AI", from: "#38bdf8", to: "#0c4a6e", accent: "#7dd3fc" });
projectMockup({ file: "public/images/projects/zenithsolar.svg", title: "ZenithSolar", from: "#fbbf24", to: "#78350f", accent: "#fde68a" });
projectMockup({ file: "public/images/projects/novasolar.svg", title: "NovaSolar", from: "#fb923c", to: "#7c2d12", accent: "#fed7aa" });
projectMockup({ file: "public/images/projects/quantumdock.svg", title: "QuantumDock", from: "#a78bfa", to: "#312e81", accent: "#ddd6fe" });
projectMockup({ file: "public/images/projects/dev-creations.svg", title: "Dev-Creations", from: "#34d399", to: "#064e3b", accent: "#a7f3d0" });

// Decorative illustrations for the two featured project cards
write(
  "public/images/decor/cloth.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="c" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#e11d48"/>
    </linearGradient>
  </defs>
  <path d="M140 40 L170 20 L200 40 L230 20 L260 40 L250 90 L220 80 L220 260 L180 260 L180 80 L150 90 Z" fill="url(#c)"/>
  <circle cx="200" cy="35" r="14" fill="#4c0519" opacity="0.4"/>
</svg>`
);
write(
  "public/images/decor/mechx.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7dd3fc"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <circle cx="200" cy="150" r="90" fill="url(#m)" opacity="0.9"/>
  <circle cx="200" cy="150" r="34" fill="#0c4a6e"/>
  <g stroke="#0c4a6e" stroke-width="16" stroke-linecap="round">
    <line x1="200" y1="60" x2="200" y2="90"/>
    <line x1="200" y1="210" x2="200" y2="240"/>
    <line x1="110" y1="150" x2="140" y2="150"/>
    <line x1="260" y1="150" x2="290" y2="150"/>
  </g>
</svg>`
);

// Partner/agency graphic
write(
  "public/images/partner-graphic.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500">
  <defs>
    <linearGradient id="p" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="500" fill="url(#p)"/>
  <circle cx="220" cy="120" r="180" fill="url(#glow)" opacity="0.18"/>
  <circle cx="1000" cy="420" r="220" fill="url(#glow)" opacity="0.12"/>
  <rect x="80" y="140" width="360" height="240" rx="16" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
  <rect x="480" y="90" width="360" height="290" rx="16" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.15)"/>
  <rect x="880" y="150" width="240" height="230" rx="16" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
  <text x="600" y="450" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="600" fill="rgba(255,255,255,0.85)">Zenith Studio</text>
</svg>`
);

console.log("Generated placeholder images.");
