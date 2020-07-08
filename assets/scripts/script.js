var mainNavigation = document.getElementById('js-menu');
var navigationToggle = document.getElementById('js-navbar-toggle');
if (navigationToggle && mainNavigation) {
    navigationToggle.addEventListener('click', function() {
        console.log(`class name: ${mainNavigation.className}`);
        mainNavigation.classList.toggle('active');
    });
}