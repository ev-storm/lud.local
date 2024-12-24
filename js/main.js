


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
