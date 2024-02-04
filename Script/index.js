function goToPage() {
    window.location.href = "login.html";
}

document.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var heroSection = document.querySelector('.hero-section');
    var scrollTop = window.scrollY;

    if (scrollTop > heroSection.offsetHeight - header.offsetHeight) {
        header.classList.add('nav-scrolled');
    } else {
        header.classList.remove('nav-scrolled', 'line-2');
    }
});