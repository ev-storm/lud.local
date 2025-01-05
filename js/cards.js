

// if (window.location.href.includes("/pages/buy.php")) {








async function loadJSON(filePath) {
	try {
			const response = await fetch(filePath);
			if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return await response.json();
	} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
			return null; 
	}
}


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
									<img src="/wp-content/themes/nadezhnye-lyudi/assets/svg/full-star.svg" alt="Star Rating">
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


function initializeSwiper(selector, options) {
	return new Swiper(selector, options);
}



function getSlidesPerView() {
	if (window.innerWidth < 600) {
			return 1; 
	} else if (window.innerWidth < 1400) {
			return 3;
	}
	return 4;
}


const commentSwiperOptions = {
	loop: true,
	slidesPerView: getSlidesPerView(), 
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


const swiper = new Swiper('.swiper.comment-swiper', commentSwiperOptions);


window.addEventListener('resize', () => {
	const newSlidesPerView = getSlidesPerView();
	if (swiper.params.slidesPerView !== newSlidesPerView) {
			swiper.params.slidesPerView = newSlidesPerView;
			swiper.update();
	}
});





//////////////////////////////////////////////////



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


function setActiveButton(activeButton) {
	const allButtons = document.querySelectorAll('.c-btn');
	allButtons.forEach(button => button.classList.remove('active'));
	activeButton.classList.add('active');
}



function updateCardInfo(company) {
	const card = document.querySelector('.card');
	card.innerHTML = `
			<h1 class="title-card">${company.name}</h1>
			<h2>${company.location}</h2>
			<h2>Выручка:<br>
							<span>${company.proceeds_1}</span><br>
							<span>${company.proceeds_2}</span><br>
							<span>${company.proceeds_3}</span>
			</h2>
			<h2>Налог: <span>${company.nalog}</span></h2>
			<h2>Р/сч: <span>${company.Rsc}</span></h2>
			<h2>ОКВЭДы: <span>${company.OKVD}</span></h2>
			<button data="${company.name}" class="btn trigger card-btn">заказать</button>
	`;
}


async function init() {

    const commentData = await loadJSON('/wp-content/themes/nadezhnye-lyudi/js/comments.json');
    const companyData = await loadJSON('/wp-content/themes/nadezhnye-lyudi/js/card.json');


	if (commentData) {
			createCommentCards(commentData);
	}
	
	const swiperComm = initializeSwiper('.comment-swiper', commentSwiperOptions);
	const swiperCard = initializeSwiper('.card-swiper', cardSwiperOptions);


	const nextButton = document.querySelector('.btn-next');
	const prevButton = document.querySelector('.btn-prev');
	nextButton.addEventListener('click', () => swiperComm.slideNext());
	prevButton.addEventListener('click', () => swiperComm.slidePrev());

	const cardNextButton = document.querySelector('.card-btn-next');
	const cardPrevButton = document.querySelector('.card-btn-prev');

	cardNextButton.addEventListener('click', () => swiperCard.slideNext());
	cardPrevButton.addEventListener('click', () => swiperCard.slidePrev());


	swiperCard.on('slideChange', () => {
			const currentIndex = swiperCard.activeIndex + 1; 
			const totalSlides = swiperCard.slides.length;
			document.getElementById("pagination-number").innerText = `${currentIndex}/${totalSlides}`;
	});


	createCompanySlides(companyData);
}


function createCompanySlides(companyData) {
	const buttonsContainer = document.querySelector('.card-wrapper');
	let currentSlide = createNewSlide(buttonsContainer);


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



function createNewSlide(container) {
	const newSlide = document.createElement('div');
	newSlide.className = 'swiper-slide card-slide';
	container.appendChild(newSlide);
	return newSlide;
}


function createCompanyButton(company) {
	const button = document.createElement('div');
	button.className = 'c-btn';
	button.innerHTML = `
			<img src="/wp-content/themes/nadezhnye-lyudi/assets/svg/logo-mini.svg" alt="">
			<div class="c-title">
					<h1 class="card-name">${company.name}</h1>
					<h2 class="card-location">${company.location}</h2>
			</div>
	`;
	return button;
}

 document.addEventListener('DOMContentLoaded', init);


// }
