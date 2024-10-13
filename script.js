let bir = document.querySelector(".bir")
let sakkiz = document.querySelector(".sakkiz")
let besh = document.querySelector(".besh")
let on = document.querySelector(".on")

let son1 = 0
let son2 = 0
let son3 = 0
let son4 = 0

let start1 = true
let start2 = true
let start3 = true
let start4 = true

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10 && start1) {
        start1 = false;
        let interval = setInterval(() => {
            son1++;
            bir.innerHTML = son1;

            if (son1 === 125) {
                clearInterval(interval);
            }

        }, 10);
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10 && start2) {
        start2 = false;
        let interval = setInterval(() => {
            son2++;
            sakkiz.innerHTML = son2;

            if (son2 === 865) {
                clearInterval(interval);
            }

        }, 1);
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10 && start3) {
        start3 = false;
        let interval = setInterval(() => {
            son3++;
            besh.innerHTML = son3;

            if (son3 === 510) {
                clearInterval(interval);
            }

        }, 10);
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10 && start4) {
        start4 = false;
        let interval = setInterval(() => {
            son4++;
            on.innerHTML = son4;

            if (son4 === 1350) {
                clearInterval(interval);
            }

        }, 1);
    }
})

let imagesCarusel = document.querySelector(".imagesCarusel")
let textCarusel = document.querySelector(".textCarusel")

let son = 0
let number = -2

setInterval(() => {
    if (son == 0) {
        son = 2
        number = 0 
    }
    else if (son == 2) {
        son = 1
        number = -1
    }
    else {
        son = 0
        number = -2
    }
    imagesCarusel.style.transform = `translateY(-${355 * son}px)`
    textCarusel.style.transform = `translateY(${350 * number}px)`
}, 5000);

let fixed = document.querySelector(".fixed")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        fixed.classList.add("fixxed")
    } else{
        fixed.classList.remove("fixxed")
    }
})

let nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 550) {
        nav.classList.add("navbar")
        nav.classList.remove("navbar1")
    } else {
        nav.classList.remove("navbar")
        nav.classList.add("navbar1")
    }
})

let bars = document.querySelector(".bars")
let container = document.querySelector(".container")
let cloose = document.querySelector(".fa-x")

bars.addEventListener("click", () => {
    container.classList.add("visible")
})

cloose.addEventListener("click", () => {
    container.classList.remove("visible")
})

container.addEventListener("click", () => {
    container.classList.remove("visible")
})
