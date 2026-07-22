// Helper to darken/lighten a hex color
function shadeColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

const BG = '#F5F5F0';

// ============ SUIT (Classic Single Breasted) ============
export function SuitSVG({ color = '#36454F', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -25);
  const shadow = shadeColor(color, -15);
  const highlight = shadeColor(color, 8);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      <path d="M 175 100 L 200 140 L 225 100 L 225 190 L 175 190 Z" fill="#FFFFFF" stroke="#DDD" strokeWidth="1" />
      <path d="M 192 140 L 208 140 L 210 240 L 200 260 L 190 240 Z" fill={darker} />
      <path d="M 195 145 L 205 145 L 205 155 L 195 155 Z" fill={shadeColor(darker, -15)} />
      <path d="M 90 170 Q 90 155 110 150 L 155 130 L 200 165 L 245 130 L 290 150 Q 310 155 310 170 L 320 460 Q 320 470 310 470 L 90 470 Q 80 470 80 460 Z" fill={color} stroke={darker} strokeWidth="1.5" />
      <path d="M 155 130 L 200 165 L 175 275 L 130 250 Z" fill={darker} />
      <path d="M 245 130 L 200 165 L 225 275 L 270 250 Z" fill={darker} />
      <path d="M 155 135 L 190 165 L 180 175 L 155 155 Z" fill={highlight} opacity="0.3" />
      <path d="M 245 135 L 210 165 L 220 175 L 245 155 Z" fill={highlight} opacity="0.3" />
      <line x1="200" y1="165" x2="200" y2="465" stroke={darker} strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="280" r="5" fill="#2C1810" /><circle cx="200" cy="325" r="5" fill="#2C1810" /><circle cx="200" cy="370" r="5" fill="#2C1810" />
      <path d="M 115 350 L 165 350 L 165 385 L 115 385 Z" fill={shadow} stroke={darker} strokeWidth="1" />
      <path d="M 235 350 L 285 350 L 285 385 L 235 385 Z" fill={shadow} stroke={darker} strokeWidth="1" />
      <rect x="238" y="220" width="30" height="20" fill="#FFFFFF" stroke={darker} strokeWidth="0.5" />
      <path d="M 90 170 Q 60 300 55 465 L 90 470 Q 90 300 110 175 Z" fill={shadow} opacity="0.5" />
      <path d="M 310 170 Q 340 300 345 465 L 310 470 Q 310 300 290 175 Z" fill={shadow} opacity="0.5" />
    </svg>
  );
}

// ============ DOUBLE BREASTED SUIT ============
export function DoubleBreastedSuitSVG({ color = '#000080', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -25);
  const shadow = shadeColor(color, -15);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      <path d="M 175 100 L 200 140 L 225 100 L 225 190 L 175 190 Z" fill="#FFFFFF" stroke="#DDD" />
      <path d="M 192 140 L 208 140 L 210 250 L 200 265 L 190 250 Z" fill="#8B0000" />
      <path d="M 85 170 Q 85 155 105 150 L 145 125 L 200 175 L 255 125 L 295 150 Q 315 155 315 170 L 325 465 Q 325 470 315 470 L 85 470 Q 75 470 75 465 Z" fill={color} stroke={darker} strokeWidth="1.5" />
      <path d="M 145 125 L 200 175 L 165 290 L 120 265 Z" fill={darker} />
      <path d="M 255 125 L 200 175 L 235 290 L 280 265 Z" fill={darker} />
      {/* Double breasted buttons - two rows */}
      <circle cx="165" cy="240" r="6" fill="#D4AF37" stroke="#8B7500" />
      <circle cx="235" cy="240" r="6" fill="#D4AF37" stroke="#8B7500" />
      <circle cx="165" cy="290" r="6" fill="#D4AF37" stroke="#8B7500" />
      <circle cx="235" cy="290" r="6" fill="#D4AF37" stroke="#8B7500" />
      <circle cx="165" cy="340" r="6" fill="#D4AF37" stroke="#8B7500" />
      <circle cx="235" cy="340" r="6" fill="#D4AF37" stroke="#8B7500" />
      <path d="M 115 380 L 165 380 L 165 415 L 115 415 Z" fill={shadow} stroke={darker} />
      <path d="M 235 380 L 285 380 L 285 415 L 235 415 Z" fill={shadow} stroke={darker} />
      <path d="M 85 170 Q 55 300 50 465 L 85 470 Q 85 300 105 175 Z" fill={shadow} opacity="0.5" />
      <path d="M 315 170 Q 345 300 350 465 L 315 470 Q 315 300 295 175 Z" fill={shadow} opacity="0.5" />
    </svg>
  );
}

// ============ 3-PIECE SUIT (WITH VEST) ============
export function ThreePieceSuitSVG({ color = '#1A1A1A', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -25);
  const shadow = shadeColor(color, -15);
  const vestColor = shadeColor(color, 5);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      <path d="M 175 100 L 200 140 L 225 100 L 225 190 L 175 190 Z" fill="#FFFFFF" stroke="#DDD" />
      <path d="M 192 140 L 208 140 L 210 220 L 200 235 L 190 220 Z" fill={darker} />
      {/* Vest */}
      <path d="M 155 170 L 200 200 L 245 170 L 250 340 Q 250 350 240 350 L 160 350 Q 150 350 150 340 Z" fill={vestColor} stroke={darker} strokeWidth="1" />
      <line x1="200" y1="200" x2="200" y2="350" stroke={darker} strokeWidth="0.8" opacity="0.7" />
      <circle cx="200" cy="240" r="3" fill="#2C1810" />
      <circle cx="200" cy="270" r="3" fill="#2C1810" />
      <circle cx="200" cy="300" r="3" fill="#2C1810" />
      <circle cx="200" cy="330" r="3" fill="#2C1810" />
      {/* Jacket - open showing vest */}
      <path d="M 90 170 Q 90 155 110 150 L 155 130 L 155 170 L 155 350 L 100 465 L 90 465 Z" fill={color} stroke={darker} strokeWidth="1.5" />
      <path d="M 310 170 Q 310 155 290 150 L 245 130 L 245 170 L 245 350 L 300 465 L 310 465 Z" fill={color} stroke={darker} strokeWidth="1.5" />
      <path d="M 155 130 L 155 350 L 130 340 L 130 220 Z" fill={darker} />
      <path d="M 245 130 L 245 350 L 270 340 L 270 220 Z" fill={darker} />
      {/* Pants extension */}
      <path d="M 100 465 L 300 465 L 305 470 L 95 470 Z" fill={color} />
      <path d="M 90 170 Q 60 300 55 465 L 100 465 Q 100 300 110 175 Z" fill={shadow} opacity="0.5" />
      <path d="M 310 170 Q 340 300 345 465 L 300 465 Q 300 300 290 175 Z" fill={shadow} opacity="0.5" />
    </svg>
  );
}

// ============ DRESS ============
export function DressSVG({ color = '#000000', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -20);
  const shadow = shadeColor(color, -10);
  const highlight = shadeColor(color, 15);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      <path d="M 160 90 L 175 90 L 175 140 L 160 140 Z" fill={color} />
      <path d="M 225 90 L 240 90 L 240 140 L 225 140 Z" fill={color} />
      <path d="M 155 140 Q 155 130 165 130 L 235 130 Q 245 130 245 140 L 250 240 L 150 240 Z" fill={color} stroke={darker} strokeWidth="1" />
      <path d="M 150 240 L 250 240 L 245 265 L 155 265 Z" fill={darker} />
      <path d="M 155 265 L 245 265 L 340 470 Q 340 480 330 480 L 70 480 Q 60 480 60 470 Z" fill={color} stroke={darker} strokeWidth="1" />
      <path d="M 155 265 L 100 480 L 90 480 L 145 265 Z" fill={shadow} opacity="0.5" />
      <path d="M 175 265 L 145 480 L 135 480 L 170 265 Z" fill={shadow} opacity="0.3" />
      <path d="M 235 265 L 265 480 L 255 480 L 230 265 Z" fill={shadow} opacity="0.4" />
      <path d="M 250 265 L 310 480 L 300 480 L 240 265 Z" fill={shadow} opacity="0.3" />
      <path d="M 165 135 L 185 135 L 175 220 L 165 220 Z" fill={highlight} opacity="0.3" />
      <rect x="195" y="245" width="10" height="10" fill="#D4AF37" />
    </svg>
  );
}

// ============ SHOE (Leather Loafer) ============
export function ShoeSVG({ color = '#8B4513', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -30);
  const highlight = shadeColor(color, 15);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      {/* Sole */}
      <path d="M 60 340 Q 60 380 100 380 L 320 380 Q 360 380 360 340 L 355 320 L 65 320 Z" fill={darker} />
      {/* Main shoe body */}
      <path d="M 65 320 L 355 320 Q 360 200 250 180 Q 200 175 150 200 Q 80 220 65 320 Z" fill={color} stroke={darker} strokeWidth="2" />
      {/* Top opening */}
      <path d="M 150 200 Q 200 190 250 200 Q 260 220 250 240 Q 200 235 150 240 Q 140 220 150 200 Z" fill={darker} />
      {/* Tassel/decoration */}
      <ellipse cx="200" cy="230" rx="30" ry="8" fill={darker} />
      <line x1="185" y1="238" x2="180" y2="260" stroke={darker} strokeWidth="3" />
      <line x1="195" y1="238" x2="192" y2="262" stroke={darker} strokeWidth="3" />
      <line x1="205" y1="238" x2="208" y2="262" stroke={darker} strokeWidth="3" />
      <line x1="215" y1="238" x2="220" y2="260" stroke={darker} strokeWidth="3" />
      <circle cx="180" cy="265" r="3" fill={darker} />
      <circle cx="192" cy="267" r="3" fill={darker} />
      <circle cx="208" cy="267" r="3" fill={darker} />
      <circle cx="220" cy="265" r="3" fill={darker} />
      {/* Highlight/shine */}
      <path d="M 80 290 Q 100 260 200 250 Q 300 260 340 290" fill="none" stroke={highlight} strokeWidth="2" opacity="0.6" />
      {/* Stitching detail */}
      <path d="M 65 340 L 355 340" stroke={darker} strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
    </svg>
  );
}

// ============ SNEAKER ============
export function SneakerSVG({ color = '#FFFFFF', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -25);
  const highlight = shadeColor(color, 10);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      {/* Sole */}
      <path d="M 50 360 Q 50 400 100 400 L 340 400 Q 370 400 370 360 L 365 340 L 55 340 Z" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
      <path d="M 55 375 L 365 375" stroke="#333" strokeWidth="0.8" strokeDasharray="4,3" />
      {/* Main sneaker body */}
      <path d="M 55 340 L 365 340 Q 370 220 260 190 Q 220 180 180 195 Q 90 215 55 340 Z" fill={color} stroke={darker} strokeWidth="2" />
      {/* Toe cap */}
      <path d="M 55 340 Q 60 280 120 265 Q 150 260 155 340 Z" fill={darker} opacity="0.6" />
      {/* Laces area */}
      <path d="M 160 260 Q 210 240 260 210 L 265 240 Q 220 275 165 285 Z" fill="#FFFFFF" stroke={darker} strokeWidth="1" />
      {/* Laces */}
      <line x1="175" y1="270" x2="235" y2="235" stroke="#333" strokeWidth="2" />
      <line x1="175" y1="285" x2="245" y2="248" stroke="#333" strokeWidth="2" />
      <line x1="180" y1="255" x2="250" y2="220" stroke="#333" strokeWidth="2" />
      {/* Eyelets */}
      <circle cx="175" cy="270" r="3" fill="#333" />
      <circle cx="235" cy="235" r="3" fill="#333" />
      <circle cx="175" cy="285" r="3" fill="#333" />
      <circle cx="245" cy="248" r="3" fill="#333" />
      {/* Side stripes */}
      <path d="M 200 300 Q 240 290 290 285 L 295 310 Q 240 320 200 325 Z" fill={darker} opacity="0.7" />
      <path d="M 260 195 Q 320 210 340 260 L 315 265 Q 300 225 250 215 Z" fill={darker} opacity="0.6" />
      {/* Highlight */}
      <path d="M 90 260 Q 150 230 250 220" fill="none" stroke={highlight} strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

// ============ WATCH ============
export function WatchSVG({ color = '#E5B26E', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -30);
  const highlight = shadeColor(color, 20);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      {/* Strap top */}
      <rect x="175" y="50" width="50" height="150" fill={color} stroke={darker} strokeWidth="1" />
      <line x1="180" y1="80" x2="220" y2="80" stroke={darker} strokeWidth="0.5" />
      <line x1="180" y1="110" x2="220" y2="110" stroke={darker} strokeWidth="0.5" />
      <line x1="180" y1="140" x2="220" y2="140" stroke={darker} strokeWidth="0.5" />
      <line x1="180" y1="170" x2="220" y2="170" stroke={darker} strokeWidth="0.5" />
      {/* Strap bottom */}
      <rect x="175" y="300" width="50" height="150" fill={color} stroke={darker} strokeWidth="1" />
      <line x1="180" y1="330" x2="220" y2="330" stroke={darker} strokeWidth="0.5" />
      <line x1="180" y1="360" x2="220" y2="360" stroke={darker} strokeWidth="0.5" />
      <line x1="180" y1="390" x2="220" y2="390" stroke={darker} strokeWidth="0.5" />
      <line x1="180" y1="420" x2="220" y2="420" stroke={darker} strokeWidth="0.5" />
      {/* Buckle */}
      <rect x="180" y="440" width="40" height="15" fill={darker} />
      {/* Watch face outer */}
      <circle cx="200" cy="250" r="80" fill={color} stroke={darker} strokeWidth="3" />
      {/* Watch face inner (dial) */}
      <circle cx="200" cy="250" r="70" fill="#F5F5F0" stroke={darker} strokeWidth="1" />
      {/* Hour markers */}
      <line x1="200" y1="185" x2="200" y2="200" stroke="#000" strokeWidth="3" />
      <line x1="265" y1="250" x2="250" y2="250" stroke="#000" strokeWidth="3" />
      <line x1="200" y1="315" x2="200" y2="300" stroke="#000" strokeWidth="3" />
      <line x1="135" y1="250" x2="150" y2="250" stroke="#000" strokeWidth="3" />
      {/* Diagonal markers */}
      <circle cx="245" cy="205" r="3" fill="#000" />
      <circle cx="245" cy="295" r="3" fill="#000" />
      <circle cx="155" cy="295" r="3" fill="#000" />
      <circle cx="155" cy="205" r="3" fill="#000" />
      {/* Hour hand */}
      <line x1="200" y1="250" x2="200" y2="205" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      {/* Minute hand */}
      <line x1="200" y1="250" x2="240" y2="230" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      {/* Second hand */}
      <line x1="200" y1="250" x2="180" y2="280" stroke="#DC143C" strokeWidth="1.5" strokeLinecap="round" />
      {/* Center */}
      <circle cx="200" cy="250" r="4" fill="#000" />
      {/* Crown */}
      <rect x="279" y="245" width="10" height="10" fill={darker} />
      {/* Highlight */}
      <ellipse cx="180" cy="220" rx="20" ry="10" fill={highlight} opacity="0.4" />
    </svg>
  );
}

// ============ HANDBAG ============
export function HandbagSVG({ color = '#B87333', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -25);
  const highlight = shadeColor(color, 15);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      {/* Handle */}
      <path d="M 145 180 Q 145 100 200 100 Q 255 100 255 180" fill="none" stroke={darker} strokeWidth="8" strokeLinecap="round" />
      <path d="M 145 180 Q 145 100 200 100 Q 255 100 255 180" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
      {/* Bag body */}
      <path d="M 100 200 L 300 200 Q 320 200 320 220 L 340 400 Q 340 420 320 420 L 80 420 Q 60 420 60 400 L 80 220 Q 80 200 100 200 Z" fill={color} stroke={darker} strokeWidth="2" />
      {/* Front pocket */}
      <path d="M 120 260 L 280 260 L 285 350 Q 285 360 275 360 L 125 360 Q 115 360 115 350 Z" fill={darker} opacity="0.4" />
      {/* Zipper line */}
      <line x1="80" y1="220" x2="320" y2="220" stroke={darker} strokeWidth="1.5" strokeDasharray="4,2" />
      {/* Buckle/clasp */}
      <rect x="185" y="230" width="30" height="15" fill="#D4AF37" stroke="#8B7500" strokeWidth="1" />
      <rect x="190" y="234" width="20" height="7" fill="none" stroke="#8B7500" strokeWidth="1" />
      {/* Brand plate */}
      <rect x="180" y="310" width="40" height="15" fill="#D4AF37" opacity="0.9" />
      <text x="200" y="321" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#000">LUXE</text>
      {/* Highlights */}
      <path d="M 100 240 Q 105 300 100 400" fill="none" stroke={highlight} strokeWidth="3" opacity="0.5" />
      <path d="M 300 240 Q 295 300 300 400" fill="none" stroke={darker} strokeWidth="3" opacity="0.3" />
      {/* Bottom shadow */}
      <ellipse cx="200" cy="430" rx="120" ry="8" fill="#000" opacity="0.2" />
    </svg>
  );
}

// ============ SUNGLASSES ============
export function SunglassesSVG({ color = '#000000', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -30);
  const highlight = shadeColor(color, 20);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      {/* Left temple */}
      <path d="M 65 240 L 30 220 L 20 250 L 60 275 Z" fill={color} stroke={darker} strokeWidth="1" />
      {/* Right temple */}
      <path d="M 335 240 L 370 220 L 380 250 L 340 275 Z" fill={color} stroke={darker} strokeWidth="1" />
      {/* Left lens frame */}
      <path d="M 65 220 Q 65 180 130 180 Q 195 180 195 220 L 195 280 Q 195 310 130 310 Q 65 310 65 280 Z" fill={color} stroke={darker} strokeWidth="3" />
      {/* Right lens frame */}
      <path d="M 205 220 Q 205 180 270 180 Q 335 180 335 220 L 335 280 Q 335 310 270 310 Q 205 310 205 280 Z" fill={color} stroke={darker} strokeWidth="3" />
      {/* Left lens (tinted) */}
      <path d="M 75 225 Q 75 190 130 190 Q 185 190 185 225 L 185 275 Q 185 300 130 300 Q 75 300 75 275 Z" fill="#1a1a1a" opacity="0.7" />
      {/* Right lens (tinted) */}
      <path d="M 215 225 Q 215 190 270 190 Q 325 190 325 225 L 325 275 Q 325 300 270 300 Q 215 300 215 275 Z" fill="#1a1a1a" opacity="0.7" />
      {/* Left lens reflection */}
      <ellipse cx="105" cy="215" rx="25" ry="12" fill="#FFFFFF" opacity="0.3" />
      <path d="M 90 250 Q 100 240 130 250" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
      {/* Right lens reflection */}
      <ellipse cx="245" cy="215" rx="25" ry="12" fill="#FFFFFF" opacity="0.3" />
      <path d="M 230 250 Q 240 240 270 250" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
      {/* Nose bridge */}
      <path d="M 195 220 L 205 220 L 210 240 L 190 240 Z" fill={color} stroke={darker} strokeWidth="1.5" />
      {/* Brand logo on temple */}
      <circle cx="45" cy="245" r="5" fill="#D4AF37" />
      <circle cx="355" cy="245" r="5" fill="#D4AF37" />
    </svg>
  );
}

// ============ NECKLACE ============
export function NecklaceSVG({ color = '#D4AF37', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -20);
  const highlight = shadeColor(color, 20);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      {/* Chain (curve) */}
      <path d="M 90 100 Q 200 60 310 100 L 310 200 Q 305 260 250 290 L 200 320 L 150 290 Q 95 260 90 200 Z" fill="none" stroke={color} strokeWidth="3" />
      {/* Chain links - simplified as dots */}
      {[...Array(30)].map((_, i) => {
        const angle = (i / 29) * Math.PI;
        const cx = 200 - 110 * Math.cos(angle);
        const cy = 100 + 40 * Math.sin(angle) - Math.abs(Math.cos(angle)) * 5;
        return <circle key={i} cx={cx} cy={cy} r="3" fill={color} stroke={darker} strokeWidth="0.5" />;
      })}
      {/* Pendant chain going down */}
      <line x1="200" y1="140" x2="200" y2="320" stroke={color} strokeWidth="2" strokeDasharray="4,2" />
      {/* Pendant setting */}
      <circle cx="200" cy="360" r="35" fill={color} stroke={darker} strokeWidth="2" />
      {/* Diamond */}
      <path d="M 200 335 L 220 355 L 200 400 L 180 355 Z" fill="#F0F8FF" stroke="#B0C4DE" strokeWidth="1.5" />
      <path d="M 200 335 L 220 355 L 200 365 L 180 355 Z" fill="#FFFFFF" />
      <path d="M 200 335 L 210 345 L 200 355 L 190 345 Z" fill="#B0E0E6" opacity="0.6" />
      {/* Sparkle */}
      <circle cx="200" cy="358" r="2" fill="#FFF" />
      <circle cx="195" cy="365" r="1" fill="#FFF" />
      <circle cx="205" cy="365" r="1" fill="#FFF" />
      {/* Highlight on gold setting */}
      <ellipse cx="185" cy="345" rx="10" ry="5" fill={highlight} opacity="0.6" />
      {/* Rays around diamond */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="200" y1="360"
          x2={200 + 55 * Math.cos((deg * Math.PI) / 180)}
          y2={360 + 55 * Math.sin((deg * Math.PI) / 180)}
          stroke="#FFD700" strokeWidth="0.5" opacity="0.3"
        />
      ))}
    </svg>
  );
}

// ============ SWEATER ============
export function SweaterSVG({ color = '#800020', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -20);
  const shadow = shadeColor(color, -10);
  const highlight = shadeColor(color, 10);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      {/* Sweater main body */}
      <path d="M 100 150 L 100 430 Q 100 450 120 450 L 280 450 Q 300 450 300 430 L 300 150 L 250 120 L 200 140 L 150 120 Z" fill={color} stroke={darker} strokeWidth="2" />
      {/* Left sleeve */}
      <path d="M 100 150 L 40 200 L 30 380 Q 30 400 45 400 L 100 400 Z" fill={color} stroke={darker} strokeWidth="2" />
      {/* Right sleeve */}
      <path d="M 300 150 L 360 200 L 370 380 Q 370 400 355 400 L 300 400 Z" fill={color} stroke={darker} strokeWidth="2" />
      {/* Collar (turtleneck or crew) */}
      <path d="M 150 120 L 200 140 L 250 120 Q 240 100 200 100 Q 160 100 150 120 Z" fill={darker} stroke={shadeColor(darker, -10)} strokeWidth="1" />
      {/* Ribbed cuffs left */}
      <path d="M 45 400 L 100 400 L 100 430 Q 100 445 85 445 L 55 445 Q 40 445 40 430 Z" fill={darker} />
      <line x1="50" y1="410" x2="95" y2="410" stroke={color} strokeWidth="0.5" />
      <line x1="50" y1="420" x2="95" y2="420" stroke={color} strokeWidth="0.5" />
      <line x1="50" y1="430" x2="95" y2="430" stroke={color} strokeWidth="0.5" />
      <line x1="50" y1="440" x2="95" y2="440" stroke={color} strokeWidth="0.5" />
      {/* Ribbed cuffs right */}
      <path d="M 300 400 L 355 400 Q 360 400 360 430 Q 360 445 345 445 L 315 445 Q 300 445 300 430 Z" fill={darker} />
      <line x1="305" y1="410" x2="355" y2="410" stroke={color} strokeWidth="0.5" />
      <line x1="305" y1="420" x2="355" y2="420" stroke={color} strokeWidth="0.5" />
      <line x1="305" y1="430" x2="355" y2="430" stroke={color} strokeWidth="0.5" />
      <line x1="305" y1="440" x2="355" y2="440" stroke={color} strokeWidth="0.5" />
      {/* Bottom ribbed hem */}
      <path d="M 100 420 L 300 420 L 300 450 L 100 450 Z" fill={shadow} />
      <line x1="105" y1="430" x2="295" y2="430" stroke={color} strokeWidth="0.5" />
      <line x1="105" y1="438" x2="295" y2="438" stroke={color} strokeWidth="0.5" />
      <line x1="105" y1="445" x2="295" y2="445" stroke={color} strokeWidth="0.5" />
      {/* Knit texture (cable pattern hint) */}
      {[...Array(6)].map((_, i) => (
        <line key={i} x1={130 + i * 25} y1="180" x2={130 + i * 25} y2="415" stroke={darker} strokeWidth="0.5" opacity="0.4" />
      ))}
      {/* Highlight on left shoulder */}
      <path d="M 110 160 Q 130 170 130 220" fill="none" stroke={highlight} strokeWidth="3" opacity="0.4" />
    </svg>
  );
}

// ============ BLAZER (like suit but shorter) ============
export function BlazerSVG({ color = '#D5D5CD', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -25);
  const shadow = shadeColor(color, -15);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      <path d="M 175 100 L 200 140 L 225 100 L 225 190 L 175 190 Z" fill="#FFFFFF" stroke="#DDD" />
      <path d="M 90 170 Q 90 155 110 150 L 155 130 L 200 165 L 245 130 L 290 150 Q 310 155 310 170 L 315 420 Q 315 430 305 430 L 95 430 Q 85 430 85 420 Z" fill={color} stroke={darker} strokeWidth="1.5" />
      <path d="M 155 130 L 200 165 L 175 280 L 130 250 Z" fill={darker} />
      <path d="M 245 130 L 200 165 L 225 280 L 270 250 Z" fill={darker} />
      <line x1="200" y1="165" x2="200" y2="425" stroke={darker} strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="300" r="5" fill="#8B4513" />
      <circle cx="200" cy="345" r="5" fill="#8B4513" />
      <path d="M 115 360 L 165 360 L 165 395 L 115 395 Z" fill={shadow} stroke={darker} />
      <path d="M 235 360 L 285 360 L 285 395 L 235 395 Z" fill={shadow} stroke={darker} />
      <rect x="238" y="220" width="30" height="20" fill="#FFFFFF" stroke={darker} strokeWidth="0.5" />
      <path d="M 90 170 Q 60 300 55 425 L 90 430 Q 90 300 110 175 Z" fill={shadow} opacity="0.5" />
      <path d="M 310 170 Q 340 300 345 425 L 310 430 Q 310 300 290 175 Z" fill={shadow} opacity="0.5" />
    </svg>
  );
}

// ============ COAT / TRENCH ============
export function CoatSVG({ color = '#C19A6B', className = 'w-full h-full' }) {
  const darker = shadeColor(color, -25);
  const shadow = shadeColor(color, -15);

  return (
    <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="500" fill={BG} />
      <path d="M 175 90 L 200 130 L 225 90 L 225 180 L 175 180 Z" fill="#FFFFFF" stroke="#DDD" />
      {/* Long coat body */}
      <path d="M 80 160 Q 80 145 100 140 L 150 120 L 200 155 L 250 120 L 300 140 Q 320 145 320 160 L 335 475 Q 335 485 325 485 L 75 485 Q 65 485 65 475 Z" fill={color} stroke={darker} strokeWidth="1.5" />
      <path d="M 150 120 L 200 155 L 170 300 L 120 270 Z" fill={darker} />
      <path d="M 250 120 L 200 155 L 230 300 L 280 270 Z" fill={darker} />
      <line x1="200" y1="155" x2="200" y2="480" stroke={darker} strokeWidth="1" opacity="0.6" />
      {/* Double-breasted buttons */}
      <circle cx="175" cy="240" r="5" fill="#8B4513" /><circle cx="225" cy="240" r="5" fill="#8B4513" />
      <circle cx="175" cy="290" r="5" fill="#8B4513" /><circle cx="225" cy="290" r="5" fill="#8B4513" />
      <circle cx="175" cy="340" r="5" fill="#8B4513" /><circle cx="225" cy="340" r="5" fill="#8B4513" />
      {/* Belt */}
      <rect x="80" y="330" width="240" height="20" fill={darker} />
      <rect x="180" y="330" width="40" height="20" fill={shadeColor(darker, -15)} />
      <rect x="188" y="335" width="24" height="10" fill="#D4AF37" />
      {/* Pockets */}
      <path d="M 110 380 L 165 380 L 165 425 L 110 425 Z" fill={shadow} stroke={darker} />
      <path d="M 235 380 L 290 380 L 290 425 L 235 425 Z" fill={shadow} stroke={darker} />
      <path d="M 80 160 Q 50 320 45 480 L 80 485 Q 80 320 100 165 Z" fill={shadow} opacity="0.5" />
      <path d="M 320 160 Q 350 320 355 480 L 320 485 Q 320 320 300 165 Z" fill={shadow} opacity="0.5" />
    </svg>
  );
}

// Component selector - picks the right SVG by type
export function ProductSVGRenderer({ type, color, className }) {
  switch (type) {
    case 'suit': return <SuitSVG color={color} className={className} />;
    case 'suit-double': return <DoubleBreastedSuitSVG color={color} className={className} />;
    case 'suit-3piece': return <ThreePieceSuitSVG color={color} className={className} />;
    case 'dress': return <DressSVG color={color} className={className} />;
    case 'shoe': return <ShoeSVG color={color} className={className} />;
    case 'sneaker': return <SneakerSVG color={color} className={className} />;
    case 'watch': return <WatchSVG color={color} className={className} />;
    case 'handbag': return <HandbagSVG color={color} className={className} />;
    case 'sunglasses': return <SunglassesSVG color={color} className={className} />;
    case 'necklace': return <NecklaceSVG color={color} className={className} />;
    case 'sweater': return <SweaterSVG color={color} className={className} />;
    case 'blazer': return <BlazerSVG color={color} className={className} />;
    case 'coat': return <CoatSVG color={color} className={className} />;
    default: return null;
  }
}
