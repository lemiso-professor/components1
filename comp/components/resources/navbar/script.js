  document.addEventListener("DOMContentLoaded", function() {
            const toggleSubmenu = document.querySelector('.toggle-submenu');
            const submenuDropdown = document.querySelector('.sub-dropdown');

            submenuDropdown.addEventListener('click', function() {
                submenuDropdown.classList.toggle('hidden');
            });
        });
