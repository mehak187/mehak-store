// Animates a small clone of the product image flying into the cart icon.
export function flyToCart(sourceEl, imageSrc) {
  const cart = document.getElementById('cart-icon');
  if (!cart || !sourceEl || !imageSrc) return;

  const start = sourceEl.getBoundingClientRect();
  const end = cart.getBoundingClientRect();

  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.position = 'fixed';
  img.style.left = `${start.left}px`;
  img.style.top = `${start.top}px`;
  img.style.width = `${start.width}px`;
  img.style.height = `${start.height}px`;
  img.style.objectFit = 'cover';
  img.style.borderRadius = '12px';
  img.style.zIndex = '9999';
  img.style.pointerEvents = 'none';
  img.style.opacity = '0.95';
  img.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';
  img.style.transition = 'all 0.8s cubic-bezier(0.5, -0.1, 0.3, 1)';
  document.body.appendChild(img);

  // Next frame: animate towards the cart icon while shrinking.
  requestAnimationFrame(() => {
    img.style.left = `${end.left + end.width / 2 - 12}px`;
    img.style.top = `${end.top + end.height / 2 - 12}px`;
    img.style.width = '24px';
    img.style.height = '24px';
    img.style.opacity = '0.3';
    img.style.borderRadius = '50%';
  });

  setTimeout(() => img.remove(), 850);
}

// A heart emoji that flies from the clicked button into the wishlist icon.
export function flyHeart(sourceEl) {
  const target = document.getElementById('wishlist-icon');
  if (!target || !sourceEl) return;

  const start = sourceEl.getBoundingClientRect();
  const end = target.getBoundingClientRect();

  const el = document.createElement('div');
  el.textContent = '❤️';
  el.style.position = 'fixed';
  el.style.left = `${start.left + start.width / 2 - 12}px`;
  el.style.top = `${start.top + start.height / 2 - 12}px`;
  el.style.fontSize = '22px';
  el.style.zIndex = '9999';
  el.style.pointerEvents = 'none';
  el.style.transition = 'all 0.8s cubic-bezier(0.5, -0.1, 0.3, 1)';
  document.body.appendChild(el);

  requestAnimationFrame(() => {
    el.style.left = `${end.left + end.width / 2 - 11}px`;
    el.style.top = `${end.top + end.height / 2 - 11}px`;
    el.style.transform = 'scale(0.4)';
    el.style.opacity = '0.3';
  });

  setTimeout(() => el.remove(), 850);
}
