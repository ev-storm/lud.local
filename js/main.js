// const apiKey = 'dfc4a4de-31d2-40a7-9cbd-93f2d0ed7cb3';
// const searchQuery = 'Надежные люди Продажа готового бизнеса и франшиз';
// const longitude = 37.620393;
// const latitude = 55.75396;
// const url = `https://search-maps.yandex.ru/v1/?text=${encodeURIComponent(searchQuery)}&ll=${longitude},${latitude}&spn=0.552069,0.400552&lang=ru_RU&apikey=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log('Организации:', data.features);
//   })
//   .catch(error => {
//     console.error('Ошибка:', error);
//   });







// let person = {	
// 	name: 'Екатерина Конкина',
// 	date: '20 октября',
// 	content: 'Понравилось, что объясняют все на понятном языке, честно советуют в подборе подходящего варианта, не усложняя ситуацию. Особенно ценно это, когда ты новичок в этой сфере бизнеса. Обращалась в начале октября за подбором готовой организации из Московской области. Спасибо.'
// }
// Загрузка данных из файла JSON
fetch('/js/comments.json')
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json();
	})
	.then(data => {
		createCommentCards(data);
		initializeSwiper();
	})
	.catch(error => console.error('Ошибка при загрузке данных: ', error));

// Функция для создания карточек отзывов
function createCommentCards(commentData) {
	const commentWrapper = document.querySelector('.comment-wrapper');
	if (!commentWrapper) {
		console.error('Контейнер для отзывов не найден!');
		return;
	}

	commentData.forEach(person => {
		const swiperSlide = document.createElement('div');
		swiperSlide.classList.add('swiper-slide', 'comment-slide');

		swiperSlide.innerHTML = `
			<div class="com-title">
				<img class="com-img" src="${person.img}" alt="${person.name}">
				<div class="date-name">
					<h1>${person.name}</h1>
					<h2>${person.date}</h2>
					<img src="/assets/svg/full-star.svg" alt="Star Rating">
				</div>
			</div>
			<h2 class="com-content">${person.content}
			<a href="https://yandex.ru/maps/org/nadezhnyye_lyudi/27956121875/reviews/?ll=37.617700%2C55.755874&utm_content=add_review&utm_medium=reviews&utm_source=maps-reviews-widget&z=9" target="_blank"><br>
				<span>Подробнее</span>
			</a>
			</h2>`;

		commentWrapper.appendChild(swiperSlide);
	});
}

// Функция для инициализации Swiper
function initializeSwiper() {
	new Swiper('.comment-swiper', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},
	});
}