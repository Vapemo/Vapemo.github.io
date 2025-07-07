// Reemplaza íconos Feather
feather.replace();

// Esperar a que todo el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-theme');

  // Recuperar tema guardado del localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Alternar el modo claro/oscuro al hacer clic
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Scroll suave en anclas que empiezan con #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
