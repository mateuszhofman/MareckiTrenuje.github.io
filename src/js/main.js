const navItems = document.querySelector('.nav__mobile-items')
const burgerBtn = document.querySelector('.burger__btn')
const allNavItems = document.querySelectorAll('.nav__mobile-items--item')

const questionBtn = document.querySelectorAll('.questions__box-item-info')
const questionText = document.querySelectorAll('.questions__box-item-info p')
const arrowBtn = document.querySelectorAll('.arrow-btn')
const answerText = document.querySelectorAll('.questions__box-item-text p')

const moreBtns = document.querySelectorAll('.offer-btn-more')
const closeBtns = document.querySelectorAll('.close-btn')
const offers = document.querySelectorAll('.offers__boxes-box-offer')
const infos = document.querySelectorAll('.offers__boxes-box-info')

const footerYear = document.querySelector('.footer-year')

// NAVIGATION
const showNav = () => {
	navItems.classList.toggle('active')
	burgerBtn.classList.toggle('burger__btn--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.classList.remove('active')
			burgerBtn.classList.remove('burger__btn--active')
		})
	})
}
// QUESTIONS
const setActiveQuestion = index => {
	answerText.forEach((answer, i) => {
		if (i === index) {
			answer.parentNode.classList.toggle('show')
		} else {
			answer.parentNode.classList.remove('show')
		}
	})

	arrowBtn.forEach((btn, i) => {
		if (i === index) {
			btn.classList.toggle('active')
		} else {
			btn.classList.remove('active')
		}
	})

	questionText.forEach((question, i) => {
		if (i === index) {
			question.classList.toggle('change')
		} else {
			question.classList.remove('change')
		}
	})
}

questionBtn.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		setActiveQuestion(index)
	})
})

// FOOTER
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// OFFERS
moreBtns.forEach((btn, index) => {
	btn.addEventListener('click', () => moreInformation(index))
})

closeBtns.forEach((btn, index) => {
	btn.addEventListener('click', () => moreInformation(index))
})

const moreInformation = index => {
	offers[index].classList.toggle('rotate')
	infos[index].classList.toggle('rotate')
}

// EVENTS

handleCurrentYear()
burgerBtn.addEventListener('click', showNav)
