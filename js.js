// Scroll effect + sticky header + active link

const header = document.querySelector('header');
const sections = document.querySelectorAll('section[id]');

// Header sticky
function handleHeaderSticky() {
    if (window.scrollY > 30) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Active link on scroll
function setActiveLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav-items a[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

// Scroll events
window.addEventListener('scroll', () => {
    handleHeaderSticky();
    setActiveLink();
});

// Load events
window.addEventListener('load', () => {
    handleHeaderSticky();
    setActiveLink();
});

// Teste GitHub
console.log("JS atualizado com sucesso");
console.log("TESTE NOVO");