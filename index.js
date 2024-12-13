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

	nav.forEach((navItem) => {
		navItem.addEventListener('click', () => {
			const navContent = navItem.nextElementSibling

			if (navContent && navContent.classList.contains('nav_content_item')) {
				navContent.classList.toggle('visible')
			}
		})
	})

	const chocolateItems = document.querySelectorAll('.chocolate__selectable')

	chocolateItems.forEach((item) => {
		item.addEventListener('click', () => {
			if (item.classList.contains('active')) {
				item.classList.remove('active')
			} else {
				chocolateItems.forEach((chocolate) =>
					chocolate.classList.remove('active')
				)

				item.classList.add('active')
			}
		})
	})
})
