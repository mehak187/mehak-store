// Bursts colorful confetti particles from a point on screen.
export function burstConfetti(originX, originY) {
  const colors = ['#B87333', '#D4AF37', '#10B981', '#EF4444', '#4169E1', '#F4C2C2'];
  const count = 70;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = 6 + Math.random() * 7;
    p.style.position = 'fixed';
    p.style.left = `${originX}px`;
    p.style.top = `${originY}px`;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.background = colors[i % colors.length];
    p.style.zIndex = '99999';
    p.style.pointerEvents = 'none';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 180 + Math.random() * 320;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 220;
    const rot = Math.random() * 720 - 360;

    p.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${vx}px, ${vy + 500}px) rotate(${rot}deg)`, opacity: 0 },
      ],
      { duration: 1300 + Math.random() * 700, easing: 'cubic-bezier(0.2, 0.6, 0.35, 1)' }
    );

    setTimeout(() => p.remove(), 2100);
  }
}
