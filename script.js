/* === 1) Typing effect (vanilla, no library needed) === */
(function typeIt() {
  const el = document.getElementById('element');
  if (!el) return; // only on pages that have #element

  const words = ['Web Developer', 'Python Developer', 'UI/UX Designer'];
  let w = 0, i = 0, deleting = false;

  function tick() {
    const word = words[w];
    el.textContent = deleting ? word.slice(0, i--) : word.slice(0, i++);

    if (!deleting && i === word.length + 5) deleting = true;        // pause at end
    if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; }

    setTimeout(tick, deleting ? 60 : 90);
  }
  tick();
})();

/* === 4) Highlight the current page in the nav === */
(function setActiveNav() {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const file = a.getAttribute('href').split('/').pop();
    if (file === here) a.classList.add('active');
  });
})();




