const registryItems = document.querySelector('.registry__items');

const arr = fetch('https://64f609f32b07270f705e0a7c.mockapi.io/registery').then((res) => res.json()).then((json) => getToHtml(json))

function getToHtml(obj) {
	obj.forEach((obj) => {
		const toHtml = `
		<div class="registry__item">
			<div class="registry__avatar"><img src="img/${obj.avatar}.jpg" alt="${obj.avatar}"></div>
			<div class="registry__name">${obj.name}</div>
			<div class="registry__status ${obj.status}">Подлежит мобилизаций</div>
			<button class="registry__button">Отправить повестку</button>
		</div>
		`

		registryItems.insertAdjacentHTML('beforeend', toHtml)
	})

	const buttons = document.querySelectorAll('.registry__button');

	buttons.forEach((button) => {
		button.addEventListener("click", function () {
			alert('Повестка отправлена')
		});
	})

}



