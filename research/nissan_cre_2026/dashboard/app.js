const filterButtons = document.querySelectorAll('[data-filter]');
const signalItems = document.querySelectorAll('.signal-item');
const navLinks = document.querySelectorAll('.nav-list a');
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    signalItems.forEach((item) => {
      item.hidden = filter !== 'all' && !item.classList.contains(filter);
    });
  });
});

const activateNav = () => {
  const current = sections
    .map((section) => ({ id: section.id, top: Math.abs(section.getBoundingClientRect().top - 110) }))
    .sort((a, b) => a.top - b.top)[0];

  if (!current) return;
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`));
};

window.addEventListener('scroll', activateNav, { passive: true });
activateNav();
