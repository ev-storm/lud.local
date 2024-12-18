// // const apiKey = 'dfc4a4de-31d2-40a7-9cbd-93f2d0ed7cb3';
// // const searchQuery = 'Надежные люди Продажа готового бизнеса и франшиз';
// // const longitude = 37.620393;
// // const latitude = 55.75396;
// // const url = `https://search-maps.yandex.ru/v1/?text=${encodeURIComponent(searchQuery)}&ll=${longitude},${latitude}&spn=0.552069,0.400552&lang=ru_RU&apikey=${apiKey}`;

// // fetch(url)
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log('Организации:', data.features);
// //   })
// //   .catch(error => {
// //     console.error('Ошибка:', error);
// //   });

// Асинхронная функция для загрузки данных из файла JSON
async function loadJSON(filePath) {
	try {
			const response = await fetch(filePath);
			if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return await response.json();
	} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
			return null; // Возвращаем null в случае ошибки
	}
}

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
function initializeSwiper(selector, options) {
	return new Swiper(selector, options);
}


// Функция для определения количества слайдов в зависимости от ширины окна
function getSlidesPerView() {
	if (window.innerWidth < 600) {
			return 1; // Если ширина меньше 600px, то отображаем 1 слайд
	} else if (window.innerWidth < 1400) {
			return 3; // Если ширина меньше 1400px, то отображаем 3 слайда
	}
	return 4; // В противном случае, отображаем 4 слайда
}

// Опции для Swiper
const commentSwiperOptions = {
	loop: true,
	slidesPerView: getSlidesPerView(), // Используем функцию для инициализации slidesPerView
	spaceBetween: 30,
	pagination: {
			el: '.swiper-pagination',
			clickable: true,
	},
	scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
	},
};

// Инициируем Swiper
const swiper = new Swiper('.swiper.comment-swiper', commentSwiperOptions);

// Обновляем Swiper при изменении размера окна
window.addEventListener('resize', () => {
	const newSlidesPerView = getSlidesPerView();
	if (swiper.params.slidesPerView !== newSlidesPerView) {
			swiper.params.slidesPerView = newSlidesPerView;
			swiper.update(); // Обновляем Swiper с новыми настройками
	}
});










// Опции Swiper для карточек
const cardSwiperOptions = {
	pagination: {
			el: ".swiper-pagination",
			type: "fraction",
	},
	navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
	},
};

// Функция для установки класса active на кнопки
function setActiveButton(activeButton) {
	const allButtons = document.querySelectorAll('.c-btn');
	allButtons.forEach(button => button.classList.remove('active'));
	activeButton.classList.add('active');
}

// Функция для обновления информации о компании
// function updateCardInfo(company) {
// 	const card = document.querySelector('.card');
// 	card.innerHTML = `
// 			<h1>${company.name}</h1>
// 			<h2>${company.location}</h2>
// 			<h2>Выручка:<br>
// 					<span>${company.proceeds_1}</span><br>
// 					<span>${company.proceeds_2}</span><br>
// 					<span>${company.proceeds_3}</span>
// 			</h2>
// 			<h2>УСН: <span>${company.usn}</span></h2>
// 			<h2>Р/сч: <span>${company.Rsc}</span></h2>
// 			<h2>ОКВЭДы: <span>${company.OKVD}</span></h2>
// 			<button data="${company.name}" class="btn trigger card-btn">заказать</button>
// 	`;
// }

// Функция для обновления информации о компании
function updateCardInfo(company) {
	const card = document.querySelector('.card');
	card.innerHTML = `
			<h1>${company.name}</h1>
			<h2>${company.location}</h2>
			<h2>Выручка:<br>
							<span>${company.proceeds_1}</span><br>
							<span>${company.proceeds_2}</span><br>
							<span>${company.proceeds_3}</span>
			</h2>
			<h2>УСН: <span>${company.usn}</span></h2>
			<h2>Р/сч: <span>${company.Rsc}</span></h2>
			<h2>ОКВЭДы: <span>${company.OKVD}</span></h2>
			<button data="${company.name}" class="btn trigger card-btn">заказать</button>
	`;
}

// Основная функция для andнициализации приложения
async function init() {
	// Загружаем данные от отзывов и компаний одновременно
	const commentData = await loadJSON('/js/comments.json');
	const companyData = await loadJSON('/js/card.json');

	if (commentData) {
			createCommentCards(commentData);
	}
	
	const swiperComm = initializeSwiper('.comment-swiper', commentSwiperOptions);
	const swiperCard = initializeSwiper('.card-swiper', cardSwiperOptions);

	// Назначаем события для управления слайдами
	const nextButton = document.querySelector('.btn-next');
	const prevButton = document.querySelector('.btn-prev');
	nextButton.addEventListener('click', () => swiperComm.slideNext());
	prevButton.addEventListener('click', () => swiperComm.slidePrev());

	const cardNextButton = document.querySelector('.card-btn-next');
	const cardPrevButton = document.querySelector('.card-btn-prev');

	cardNextButton.addEventListener('click', () => swiperCard.slideNext());
	cardPrevButton.addEventListener('click', () => swiperCard.slidePrev());

	// Обновление номера слайдов для карточек
	swiperCard.on('slideChange', () => {
			const currentIndex = swiperCard.activeIndex + 1; // 1-индексированное
			const totalSlides = swiperCard.slides.length;
			document.getElementById("pagination-number").innerText = `${currentIndex}/${totalSlides}`;
	});

	// Генерация слайдов карточек компаний
	createCompanySlides(companyData);
}

// Функция для создания слайдов карточек
function createCompanySlides(companyData) {
	const buttonsContainer = document.querySelector('.card-wrapper');
	let currentSlide = createNewSlide(buttonsContainer);

	// Проверка ширины окна для выбора условия
	const slideCondition = window.innerWidth > 1800 ? 9 : 6;

	companyData.forEach((company, index) => {
		if (index % slideCondition === 0 && index !== 0) {
			currentSlide = createNewSlide(buttonsContainer);
		}

		const button = createCompanyButton(company);
		button.addEventListener('click', () => {
			setActiveButton(button);
			updateCardInfo(company);
		});

		currentSlide.appendChild(button);
	});
}


// Функция для создания нового слайда
function createNewSlide(container) {
	const newSlide = document.createElement('div');
	newSlide.className = 'swiper-slide card-slide';
	container.appendChild(newSlide);
	return newSlide;
}

// Функция для создания кнопки компании
function createCompanyButton(company) {
	const button = document.createElement('div');
	button.className = 'c-btn';
	button.innerHTML = `
			<img src="/assets/svg/logo-mini.svg" alt="">
			<div class="c-title">
					<h1 class="card-name">${company.name}</h1>
					<h2 class="card-location">${company.location}</h2>
			</div>
	`;
	return button;
}



// Запускаем приложение
document.addEventListener('DOMContentLoaded', init);


