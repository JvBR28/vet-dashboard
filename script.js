const menuBtn = document.getElementById('menu-button');

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('close');
}

menuBtn.addEventListener('click', toggleMenu);