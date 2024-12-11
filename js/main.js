const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');
const mobMenu = document.querySelector('.mob_menu');



function activateClasses() {
	mobMenu.classList.add('active');
	burger.style.display = 'none'; 
	burgerClose.style.display = 'block'; 
}

function deactivateClasses() {
	mobMenu.classList.remove('active');
	burger.style.display = 'block'; 
	burgerClose.style.display = 'none'; 
}


burger.addEventListener('click', function(event) {

	activateClasses();

	event.stopPropagation();
});

burgerClose.addEventListener('click', function(event) {

	deactivateClasses();

	event.stopPropagation();
});




	
	// // Обработчик для кликов на документ
	// document.addEventListener('click', function(event) {
	// 		// Проверяем, был ли клик вне зоны callBar (если так, убираем классы)
	// 		if (!callBar.contains(event.target) && event.target !== burger) {
	// 				deactivateClasses();
	// 		}
	// });




	var hammertime = new Hammer(document.body, {
    enable: true,
    recognizers: [[Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]]
		});

		hammertime.on('swiperight', function(ev) {

	

				activateClasses()

		});

		hammertime.on('swipeleft', function(ev) {

	

			deactivateClasses()

		});




