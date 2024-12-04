document.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('.selection__section')

	sections.forEach((section) => {
		section.addEventListener('click', () => {
			const content = section.nextElementSibling

			if (content && content.classList.contains('selection__content')) {
				content.classList.toggle('hidden')
			}
		})
	})
})

function toggleBlock() {
	const block = document.querySelector('.nav__content-hidden')
	block.classList.toggle('visible')
}
// function processElements() {
// 	const sections = document.querySelectorAll('.selection__section')

// 	sections.forEach((section) => {
// 		section.addEventListener('click', () => {
// 			const content = section.nextElementSibling

// 			if (content && content.classList.contains('selection__content')) {
// 				content.classList.toggle('hidden')
// 			}
// 		})
// 	})
//er
