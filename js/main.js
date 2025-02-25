function toggleBurgerMenu() {
    const burgerMenu = document.querySelector(".header__burger-menu");
    const closeMenu = document.querySelector(".header__close-nav");
    const navbar = document.querySelector(".header__nav");

    burgerMenu.addEventListener("click", () => {
        navbar.classList.add("header__nav-active")
    })

    closeMenu.addEventListener("click", () => {
        navbar.classList.remove("header__nav-active")
    })
}

toggleBurgerMenu();

function activateHeader() {
    const header = document.querySelector("header");
    window.onscroll = () => {
        if (window.scrollY > 100) {
            header.classList.add("header_active");
        }
        else {
            header.classList.remove("header_active");
        }
    }
}

activateHeader();


// SLider
const sliderArrows = document.querySelectorAll('.forest__arrow')
const leftSliderBtn = sliderArrows[0]
const rightSliderBtn = sliderArrows[1]

const sliderSection = document.querySelector('.forest')
const sliderSectionWidth = sliderSection.offsetWidth
const sliderImagesGrid = document.querySelector('.forest__pic-grid')
const sliderImages = document.querySelectorAll('.forest__img')

let sliderIndex = 0;
let intervalSlider;

function moveSlider(sliderIndex) {
    sliderImagesGrid.style.marginLeft = `-${sliderIndex * sliderSectionWidth}px`
}

function startSlider() {
    intervalSlider = setInterval(function () {
        if (sliderIndex < sliderImages.length - 1) {
            sliderIndex++;
            
        } else {
            sliderIndex = 0;
        }
        moveSlider(sliderIndex)
    }, 3000)
}

function resetSlider() {
    clearInterval(intervalSlider)
    startSlider()
}


leftSliderBtn.addEventListener('click', () => {
    if (sliderIndex !== 0) {
        sliderIndex--;
        moveSlider(sliderIndex)
        resetSlider()
    }

})

rightSliderBtn.addEventListener('click', () => {
    if (sliderIndex !== sliderImages.length - 1) {
        sliderIndex++;
    } else {
        sliderIndex = 0;
    }
    moveSlider(sliderIndex)
    resetSlider()
})

startSlider()

// Validation
const inputForm = document.querySelector('.register__form')
const inputFields = document.querySelectorAll('.register__input')
const nameInput = inputFields[0]
const emailInput = inputFields[1]
const messageInput = document.querySelector('.regsiter__textarea')

function validateInput(input, errorMessage) {
    if (input.value.trim() === '') {
        input.classList.add('error')
        input.nextElementSibling.textContent = `${errorMessage} отсутствует. Заполните все поля`
        return false
    } else {
        input.classList.remove('error')
        input.nextElementSibling.textContent = ''
        return true
    }
}

function checkInput(input, errorMessage) {
    input.addEventListener('change', () => {
        validateInput(input, errorMessage)
    })
}

checkInput(nameInput, 'Имя')
checkInput(emailInput, 'Почта')
checkInput(messageInput, 'Сообщение')


// Modal
const modalWindow = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__x')
const modalTexts = document.querySelectorAll('.modal__text')
const modalTextName = modalTexts[0]
const modalTextEmail = modalTexts[1]
const modalTextMessage = modalTexts[2]

modalClose.addEventListener('click', () => {
    modalWindow.classList.remove('opened')
})

modalWindow.addEventListener('click', (e)=> {
    if (e.target === modalWindow) {
        modalWindow.classList.remove('opened')
    }
    
})

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isNameValid = validateInput(nameInput, 'Имя')
    let isEmailValid = validateInput(emailInput, 'Почта')
    let isMessageValid = validateInput(messageInput, 'Сообщение')

    if (isNameValid && isEmailValid && isMessageValid) {
        modalTextName.textContent = `Имя: ${nameInput.value}`
        modalTextEmail.textContent = `Почта: ${emailInput.value}`
        modalTextMessage.textContent = `Сообщение: ${messageInput.value}`
        modalWindow.classList.add('opened')
    }
})
