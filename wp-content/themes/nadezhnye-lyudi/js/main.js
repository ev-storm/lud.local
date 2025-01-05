


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














document.addEventListener('DOMContentLoaded', function() {
	const ways = document.querySelectorAll('.way');
	const activeClass = 'active';
	const redirects = [
			'/wp-content/themes/nadezhnye-lyudi/продать-фирму',
			'/wp-content/themes/nadezhnye-lyudi/купить-фирму',
			'/wp-content/themes/nadezhnye-lyudi/ликвидировать-фирму'
	];

	if (window.innerWidth < 600) {
			ways.forEach((way, index) => {

					way.addEventListener('click', function() {
							if (this.classList.contains(activeClass)) {
									window.location.href = redirects[index];
							} else {
									ways.forEach(function(otherWay) {
											otherWay.classList.remove(activeClass);
									});
									this.classList.add(activeClass);
							}
					});
			});
	} else {
			ways.forEach((way, index) => {
					way.addEventListener('mouseenter', function() {
							ways.forEach(function(otherWay) {
									otherWay.classList.remove(activeClass);
							});
							this.classList.add(activeClass);
					});

					way.addEventListener('click', function() {
							window.location.href = redirects[index];
					});
			});
	}
});



document.addEventListener('DOMContentLoaded', function() {
	const listItems = document.querySelectorAll('.list-item');
	const activeClass = 'active';

	listItems.forEach(function(listItem) {
		listItem.addEventListener('click', function() {
			// Remove active class from all list items
			listItems.forEach(function(item) {
				item.classList.remove(activeClass);
			});

			// Add active class to the clicked item
			this.classList.add(activeClass);
		});
	});
});







