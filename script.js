function showPage(pageName) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const target = document.getElementById(pageName);
  if (target) target.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('popstate', () => {
  showPage(location.hash.replace('#', '') || 'home');
});
