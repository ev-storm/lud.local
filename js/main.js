


    // Функция для обработки появления элементов
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Добавление класса .show
                observer.unobserve(entry.target); // Удалить наблюдение
            }
        });
    };

    // Создание экземпляра IntersectionObserver
    const observer = new IntersectionObserver(observerCallback);

    // Получение всех элементов .block-img и начало наблюдения
    const targets = document.querySelectorAll('.block-img');
    
    targets.forEach(target => {
        observer.observe(target); // Начать наблюдение для каждого элемента
    });




	// 	function updateLink() {
	// 		const link = document.querySelector('.way-mob');
	// 		if (window.innerWidth < 600) {
	// 				link.removeAttribute('href');
	// 		} else {
	// 				link.setAttribute('href', '/pages/cell.php');
	// 		}
	// }

	// // Проверяем при загрузке страницы
	// window.addEventListener('load', updateLink);
	// // Проверяем при изменении размера окна
	// window.addEventListener('resize', updateLink);


	
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
