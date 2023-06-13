console.log("Jay Shree Ram");
const body = document.querySelector("header");
const logIn = document.querySelector("#log");
const logInForm = document.querySelector(".reg__log");
const registerForm = document.querySelector(".register__container");
const closeForm = document.querySelector("#close__form");
const closeForm2 = document.querySelector("#close__form__2");
const signUp = document.querySelector("#sign_up");
const signIn = document.querySelector("#sign-in");
const hamburgerMenu = document.querySelector(".hamburger");
const closeHamburgerMenu = document.querySelector("#nav__close");
const navControls = document.querySelector(".nav__controls");
const navItems = document.querySelector(".nav__items");
const navLink =document.querySelectorAll(".nav__link");

const aboutButton  = document.querySelector("#aboutsection");
const aboutContainer = document.querySelector(".about__section"); 
const closeAbout = document.querySelector(".close__about");

const coursePopUp = document.querySelector(".get__course__popup");
const getCourseButton = document.querySelector("#get_course");
const closeCourse = document.querySelector(".close__course");


logIn.addEventListener("click", () => {
    logInForm.classList.add("openForm");
    body.classList.add("blur");
})

closeForm.addEventListener("click", function () {
        logInForm.classList.remove("openForm");
        registerForm.classList.remove("showRegister");
        body.classList.remove("blur");
    });

closeForm2.addEventListener("click", () => {
    registerForm.classList.remove("showRegister");
    body.classList.remove("blur");
})

signUp.addEventListener("click", () => {
    registerForm.classList.add("showRegister");
    logInForm.classList.remove("openForm");
})

signIn.addEventListener("click", () => {
    registerForm.classList.remove("showRegister");
    logInForm.classList.add("openForm");
})

hamburgerMenu.addEventListener("click", () => {
    navControls.classList.add("show__nav");
})

closeHamburgerMenu.addEventListener("click", () => {
    navControls.classList.remove("show__nav");
})

navLink.forEach((i) => {
    i.addEventListener("click", () => {
    navControls.classList.remove("show__nav");
    })
})

aboutButton.addEventListener("click", () => {
    aboutContainer.classList.add("showAbout");
    body.classList.add("blur");
})

closeAbout.addEventListener("click", () => {
    aboutContainer.classList.remove("showAbout");
    body.classList.remove("blur");
})

getCourseButton.addEventListener("click", () => {
    coursePopUp.classList.add("showCoursePopUp");
})

closeCourse.addEventListener("click", () => {
    coursePopUp.classList.remove("showCoursePopUp");
})


