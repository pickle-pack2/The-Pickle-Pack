const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

// IMPORTANT: Replace this with your official Facebook Page URL before publishing.
// Example: https://www.facebook.com/YourPicklePackPage
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/share/1bzVchP2Jo/?mibextid=wwXIfr';
document.querySelectorAll('.facebook-link').forEach(link => {
  if (FACEBOOK_PAGE_URL) {
    link.href = FACEBOOK_PAGE_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('Add your official Pickle Pack Facebook Page URL in script.js before publishing this website.');
    });
  }
});
