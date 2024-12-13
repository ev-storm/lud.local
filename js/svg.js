
function totalSvg() {
	// Получаем все элементы path с классом .l1 внутри .btn-svg
	let paths = document.querySelectorAll('.btn-svg > svg > path');

	let lengths = [];

	// Проходим по каждому элементу path
	paths.forEach(function(path) {
			// Получаем длину текущего path
			let len = Math.round(path.getTotalLength());

			// Устанавливаем атрибуты stroke-dasharray и stroke-dashoffset
			path.setAttribute('stroke-dasharray', len);
			path.setAttribute('stroke-dashoffset', len); // Установим по умолчанию, если необходимо

			// Добавляем длину в массив
			lengths.push(len);
			console.log('Length of path:', len);
			console.log('Lengths array:', lengths);
	});

	// Настройка события mouseenter для каждой кнопки
	const btns = document.querySelectorAll('.btn-svg');

	btns.forEach(btn => {
			btn.addEventListener('mouseenter', function () {
					// Изменение пути для выбора элемента path
					const path = this.querySelector('svg > path');

					// Получаем длину текущего path, должно быть тут для анимации
					let len = Math.round(path.getTotalLength());

					// Создаём новый элемент animate
					const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
					animate.setAttribute("attributeName", "stroke-dashoffset");
					animate.setAttribute("values", `${len}; 0`);
					animate.setAttribute("dur", `${len / 100}`);
					animate.setAttribute("fill", "freeze");

					path.appendChild(animate);
					animate.beginElement();
			});

			// Автоматическое срабатывание события mouseenter
			btn.dispatchEvent(new Event('mouseenter'));
	});
}

// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', totalSvg);


