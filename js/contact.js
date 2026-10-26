document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contact');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      e.preventDefault();
      alert('Adresse e-mail invalide');
    }
  });
});