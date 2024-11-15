const navItems = document.querySelector('.nav__mobile-items')
const burgerBtn = document.querySelector('.burger__btn')
const allNavItems = document.querySelectorAll('.nav__mobile-items--item')

// const section = document.querySelectorAll('.section')
// const navLink = document.querySelectorAll('.nav-list a')

const questionBtn = document.querySelectorAll('.questions__box-item-info')
const questionText = document.querySelectorAll('.questions__box-item-info p')
const arrowBtn = document.querySelectorAll('.arrow-btn')
const answerText = document.querySelectorAll('.questions__box-item-text p')

// const footerYear = document.querySelector('.footer-year')

const showNav = () => {
	navItems.classList.toggle('active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.classList.remove('active')
		})
	})
}
const setActiveQuestion = index => {
	answerText.forEach((answer, i) => {
		if (i === index) {
			answer.classList.toggle('show')
		}
	})

	arrowBtn.forEach((btn, i) => {
		if (i === index) {
			btn.classList.toggle('active')
		}
	})
	questionText.forEach((question, i) => {
		if (i === index) {
			question.classList.toggle('change')
		}
	})
}
questionBtn.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		setActiveQuestion(index)
	})
})

// window.onscroll = () => {
// 	section.forEach(sec => {
// 		let top = window.scrollY
// 		let offset = sec.offsetTop - 90
// 		let height = sec.offsetHeight
// 		let id = sec.getAttribute('id')

// 		if (top >= offset && top < offset + height) {
// 			navLink.forEach(link => {
// 				link.classList.remove('active')
// 				document.querySelector('.nav-list a[href*=' + id + ']').classList.add('active')
// 			})
// 		}
// 	})
// }

// const handleCurrentYear = () => {
// 	const year = new Date().getFullYear()
// 	footerYear.innerText = year
// }
// handleCurrentYear()

burgerBtn.addEventListener('click', showNav)
