const toggleMenuBtn = document.querySelector('#toggleMenuBtn')
const dropdownMenu = document.getElementById('dropdownMenu')

console. log(toggleMenuBtn)
toggleMenuBtn.addEventListener('click', function () {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.disply === "") {
        dropdownMenu.style.display = 'block'
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

prevBtn.addEventListener('click', function (){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
})
nextBtn.addEventListener('click', function (){
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
})

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
     event.preventDefault();
    let formData = new FormData(this);
   
    let feedbackData = {};
    
    FormData.forEach(function(value, key) {
        feedbackData[key] = value;
    });
    
    feedbackData['userId'] = 1;
    
    fetch('https://jsonplaceholder.typicode.com/posts ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
    })
    .then(response => response.json())
    .then(data => {
        
        console.log('Успешно отправлено:', data);
        
        then.resset();
    })
    .catch(error => {
       
        console.error('Ошибка:', error);
        
    }) 
})