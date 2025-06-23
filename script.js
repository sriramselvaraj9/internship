const navLinks = document.querySelectorAll("header nav a");
const logoLinks = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-bar");
const navbar = document.querySelector("header nav");
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});
const activePage = () => {
    const header = document.querySelector("header");
    const barBox = document.querySelector(".bars-box");

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barBox.classList.remove('active');
    setTimeout(() => {
        barBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => {
                sections[idx].classList.add("active");
            }, 1100);
        }
    });
})

logoLinks.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add("active");
        }, 1100);
    }
})
const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-detail");

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        resumeBtns.forEach(btn => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");

        resumeDetails.forEach(detail => {
            detail.classList.remove("active");
        });
        resumeDetails[idx].classList.add("active");
    });
});



const arrowRigth = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
    const portfolioDetails = document.querySelectorAll(".portfolio-details");


    portfolioDetails.forEach(detail => {
        detail.classList.remove("active");
    });
    portfolioDetails[index].classList.add('active');
};

arrowRigth.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 5;
        arrowRigth.classList.add('disabled');
    }
    activePortfolio();
});
