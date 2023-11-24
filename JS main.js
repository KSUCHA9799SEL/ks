const toggleMenuBtn = document.querySelector('#toggleMenuBtn')
const dropdownMenu = document.getElementById('dropdownMenu')

console. log(toggleMenuBtn)
toggleMenuBtn.addEventListener('click', function () {
    if (dropdownMenu.style.disply === 'none' || dropdownMenu.style.disply === "") {
        dropdownMenu.style.disply = 'block'
    } else {
        dropdownMenu.style.disply = 'none'
    }
})
window.addEventListener('click', function (event) {
    if (!event.target.matches('#toggleMenuBtn')) {
        dropdownMenu.style.display = 'none';
    }
})

const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const slides = document.querySelectorAll('.slide')

let currentSlide = 0;
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'
        } else {
            slide.style.display ='none'
        }
    })
}
showSlide(currentSlide)
prevBtn.addEventListener('click', function () {
    currentSlide = (currentSlide - 1)
})