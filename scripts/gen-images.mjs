// One-off generator for placeholder art (avatars, case-study mockups, decor icons).
// Run with: node scripts/gen-images.mjs
import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

function write(path, svg) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg.trim());
}

const initialsAvatar = ({ file, initials, from, to, fg = "#000000" }) => {
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
    font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="${fg}">${initials}</text>
</svg>`;
  write(file, svg);
};

// Testimonial avatars — bd860f gold-family gradients, black initials
initialsAvatar({ file: "public/images/testimonials/marcus.svg", initials: "M", from: "#e0a83a", to: "#7a5a0a" });
initialsAvatar({ file: "public/images/testimonials/elena.svg", initials: "E", from: "#d9a52c", to: "#6a4e09" });
initialsAvatar({ file: "public/images/testimonials/tony.svg", initials: "T", from: "#bd860f", to: "#5c440a" });
initialsAvatar({ file: "public/images/testimonials/priya.svg", initials: "P", from: "#e8bb54", to: "#7a5a0a" });
initialsAvatar({ file: "public/images/testimonials/jamal.svg", initials: "J", from: "#cf9518", to: "#644a08" });
initialsAvatar({ file: "public/images/testimonials/wren.svg", initials: "W", from: "#e0a83a", to: "#6a4e09" });

// Case-study browser-window mockups — black ground, bd860f gold-family accents per card
const projectMockup = ({ file, title, accent, accentDim }) => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="75%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="520" rx="18" fill="url(#bg)"/>
  <rect width="800" height="520" rx="18" fill="url(#glow)"/>
  <rect x="0" y="0" width="800" height="44" rx="18" fill="rgba(0,0,0,0.5)"/>
  <circle cx="26" cy="22" r="6" fill="${accentDim}"/>
  <circle cx="46" cy="22" r="6" fill="${accentDim}"/>
  <circle cx="66" cy="22" r="6" fill="${accentDim}"/>
  <rect x="120" y="14" width="300" height="16" rx="8" fill="rgba(255,255,255,0.12)"/>
  <rect x="60" y="90" width="300" height="26" rx="6" fill="rgba(255,255,255,0.92)"/>
  <rect x="60" y="130" width="440" height="14" rx="6" fill="rgba(255,255,255,0.45)"/>
  <rect x="60" y="152" width="380" height="14" rx="6" fill="rgba(255,255,255,0.3)"/>
  <rect x="60" y="190" width="150" height="42" rx="21" fill="${accent}"/>
  <rect x="60" y="260" width="210" height="200" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(189,134,15,0.2)"/>
  <rect x="290" y="260" width="210" height="200" rx="14" fill="rgba(255,255,255,0.1)" stroke="rgba(189,134,15,0.2)"/>
  <rect x="520" y="260" width="210" height="200" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(189,134,15,0.2)"/>
  <rect x="80" y="285" width="170" height="90" rx="8" fill="rgba(0,0,0,0.35)"/>
  <rect x="310" y="285" width="170" height="90" rx="8" fill="rgba(0,0,0,0.35)"/>
  <rect x="540" y="285" width="170" height="90" rx="8" fill="rgba(0,0,0,0.35)"/>
  <text x="400" y="500" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.85)">${title}</text>
</svg>`;
  write(file, svg);
};

projectMockup({ file: "public/images/projects/ironclad-roofing.svg", title: "Ironclad Roofing", accent: "#bd860f", accentDim: "#7a5a0a" });
projectMockup({ file: "public/images/projects/meridian-law.svg", title: "Meridian Law Group", accent: "#d9a52c", accentDim: "#6a4e09" });
projectMockup({ file: "public/images/projects/apex-plumbing.svg", title: "Apex Plumbing & HVAC", accent: "#e8bb54", accentDim: "#7a5a0a" });
projectMockup({ file: "public/images/projects/sterling-cole.svg", title: "Sterling & Cole CPA", accent: "#cf9518", accentDim: "#5c440a" });
projectMockup({ file: "public/images/projects/brightline-electrical.svg", title: "Brightline Electrical", accent: "#e0a83a", accentDim: "#644a08" });
projectMockup({ file: "public/images/projects/harbor-dental.svg", title: "Harbor Dental Group", accent: "#d9a52c", accentDim: "#6a4e09" });

// Decorative accent icons for featured case-study cards
write(
  "public/images/decor/helmet.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <path d="M120 200c0-60 36-100 80-100s80 40 80 100" fill="none" stroke="#bd860f" stroke-width="16" stroke-linecap="round"/>
  <rect x="100" y="196" width="200" height="26" rx="13" fill="#bd860f"/>
  <rect x="188" y="140" width="24" height="40" rx="6" fill="#7a5a0a"/>
</svg>`
);
write(
  "public/images/decor/scale.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <line x1="200" y1="60" x2="200" y2="230" stroke="#bd860f" stroke-width="10" stroke-linecap="round"/>
  <line x1="120" y1="90" x2="280" y2="90" stroke="#bd860f" stroke-width="10" stroke-linecap="round"/>
  <circle cx="120" cy="140" r="34" fill="none" stroke="#bd860f" stroke-width="8"/>
  <circle cx="280" cy="140" r="34" fill="none" stroke="#bd860f" stroke-width="8"/>
  <rect x="160" y="230" width="80" height="16" rx="8" fill="#bd860f"/>
</svg>`
);

console.log("Generated placeholder images.");
