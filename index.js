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

	const nav = document.querySelectorAll('.nav')

	nav.forEach((nav_item) => {
		nav_item.addEventListener('click', () => {
			const nav_content = nav_item.nextElementSibling

			if (nav_content && nav_content.classList.contains('nav_content_item')) {
				nav_content.classList.toggle('visible')
			}
		})
	})
})
