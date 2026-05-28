```javascript
const header = document.querySelector('header');

const sections = document.querySelectorAll('section[id]');

function handleHeaderSticky(){

    if(window.scrollY > 30){

        header.classList.add('sticky');

    }

    else{

        header.classList.remove('sticky');

    }

}

function setActiveLink(){

    let scrollY = window.pageYOffset;

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight;

        const sectionTop = current.offsetTop - 100;

        const sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav-items a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            navLink.classList.add('active');

        }

        else{

            navLink.classList.remove('active');

        }

    });

}

window.addEventListener('scroll', () => {

    handleHeaderSticky();

    setActiveLink();

});

window.addEventListener('load', () => {

    handleHeaderSticky();

    setActiveLink();

});
```