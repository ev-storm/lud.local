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



// document.addEventListener("DOMContentLoaded", function() {
// 	const modalCon = document.querySelector('.modal-con');

// 	const companyCardInput = document.querySelector('.company-card');


// 	function addBackClassWithDelay() {
// 			setTimeout(function() {
// 					if (modalCon.classList.contains('active')) {
// 							modalCon.classList.add('back');
// 					}
// 			}, 100); 
// 	}


// 	document.addEventListener('click', function(event) {
// 			if (event.target.classList.contains('btn-form')) {
// 					const dataValue = event.target.getAttribute('data');


// 					companyCardInput.value = dataValue;
// 			}
// 	});
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


///////////////////////////////////////////////////////////////////////////////////////////

function closeBtn(){
	const modalClose = document.querySelector('.modal-close-con');
	const modalCon = document.querySelector('.modal-con');
	modalClose.addEventListener('click', function() {
			modalCon.classList.add('inactive');
	});
}



document.addEventListener("DOMContentLoaded", function() {

	const modalCon = document.querySelector('.modal-con');

	document.addEventListener('click', function(event) {
			if (event.target.classList.contains('trigger')) {
					modalCon.classList.remove('inactive');
					modalCon.classList.add('active');
			}
	});

	modalCon.addEventListener('click', function(event) {
			if (event.target === modalCon) {
					modalCon.classList.add('inactive');
			}
	});

	closeBtn()

});




////////////////////////////////////////////////////////////










///////////////----PRELOADER-----/////////////////

function hidePreloader() {
	let preloader = document.getElementById('preloader');

	preloader.style.display = 'none';

	// var menu = document.querySelector('.menu');
	// menu.style.opacity = 1;
	// menu.style.transition = 'all 1s ease-out';
	// menu.style.transform = 'translateY(0vw)';

	// setTimeout(function() {
	// 		var titleText = document.querySelector('.title__text');
	// 		titleText.style.opacity = 1;
	// 		titleText.style.transition = 'all 1s ease-out';
	// 		titleText.style.transform = 'translateY(0vw)';
	// }, 1000);
}

// Устанавливаем таймер на 3000 миллисекунд
let timeoutId = setTimeout(hidePreloader, 3000);

window.addEventListener('load', function() {
	clearTimeout(timeoutId);
	hidePreloader();
});






document.addEventListener("DOMContentLoaded", function() {
	const modalQrCon = document.querySelector('.modal_qr-con');




	document.addEventListener('click', function(event) {
		if (event.target.classList.contains('trigger-qr')) {
			modalQrCon.classList.remove('inactive');
			modalQrCon.classList.add('active');
			}
	});



});




document.querySelectorAll('.qr-w').forEach(element => {
	element.addEventListener('click', function() {
		
			const Container = document.querySelector('.modal-con');

			const Content = `
					<div class="modal_qr">
							<div class="modal-close-con">
								<img class="modal-close" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/close_burger.svg" alt="">
							</div>
							<div class="qr-img-con">
									<img class="qr-img" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/qr-w.svg" alt="">
									<div>
											<img src="/wp-content/themes/nadezhnye-lyudi/assets/svg/wapp.svg" alt="">
											<a href="https://api.whatsapp.com/send/?phone=79776640495&text&type=phone_number&app_absent=0" target="_blank">
													<button class="btn">перейти</button>
											</a>
									</div>
							</div>
					</div>
			`;

			Container.innerHTML = Content;
			closeBtn()

	});
});



document.querySelectorAll('.qr-t').forEach(element => {
	element.addEventListener('click', function() {
			const Container = document.querySelector('.modal-con');

			const Content = `
					<div class="modal_qr">
							<div class="modal-close-con">
								<img class="modal-close" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/close_burger.svg" alt="">
							</div>
							<div class="qr-img-con">
									<img class="qr-img" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/qr-t.svg" alt="">
									<div>
											<img src="/wp-content/themes/nadezhnye-lyudi/assets/svg/tg.svg" alt="">
											<a href="https://t.me/Nadludi" target="_blank">
													<button class="btn">перейти</button>
											</a>
									</div>
							</div>
					</div>
			`;

			Container.innerHTML = Content;
			closeBtn()
	});
});



document.querySelectorAll('.qr-tel').forEach(element => {
	element.addEventListener('click', function() {
			const Container = document.querySelector('.modal-con');

			const Content = `
					<div class="modal_qr">
							<div class="modal-close-con">
								<img class="modal-close" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/close_burger.svg" alt="">
							</div>

							<div class="modal-title-tel">
								<img class="modal-logo" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/logo-mini.svg" alt="">
								<h1>+7 495 972-36-26</h1>
							</div>
							
							

					</div>
			`;

			Container.innerHTML = Content;
			closeBtn()
	});
});


document.querySelectorAll('.qr-mail').forEach(element => {
	element.addEventListener('click', function() {
			const Container = document.querySelector('.modal-con');

			const Content = `
					<div class="modal_qr">
							<div class="modal-close-con">
								<img class="modal-close" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/close_burger.svg" alt="">
							</div>
							<div class="qr-mail-con">
							    <div>
    							    <img class="copy-mail" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/copy-btn.svg" alt="mail">
    								<h1 id="email-text">info@nadezhnye-lyudi.ru</h1>
								</div>
								<div>
									
									<a class="btn-mail_con" href="mailto:info@nadezhnye-lyudi.ru" target="_blank">
											<button class="btn btn-mail">написать</button>
									</a>
								</div>
							</div>
					</div>
			`;

			Container.innerHTML = Content;
			closeBtn()
			
			
        document.querySelector('.copy-mail').addEventListener('click', function() {
                // Находим текст для копирования
                const emailText = document.getElementById('email-text').innerText;
        
                // Создаем временный элемент для копирования текста
                const tempInput = document.createElement('input');
                tempInput.value = emailText;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
        
                // Сообщение об успешном копировании (опционально)
                	const modalCon = document.querySelector('.modal-con');
					const sendСheck = document.querySelector('.send-check');
					document.querySelector('.send-check h1').innerHTML = 'Адрес почты скопирован';
					document.querySelector('.send-check h2').style.display = 'none';

					modalCon.classList.add('inactive');
					sendСheck.classList.add('active');

					setTimeout(() => {
						sendСheck.classList.remove('active');
					}, 4000);
            });
    
	});
});





// document.querySelectorAll('.btn-form').forEach(button => {
//     button.addEventListener('click', function() {
//         const buttons = document.querySelectorAll('.c-btn');
//         let cardName = ''; // Переменная для хранения имени карты

//         buttons.forEach(btn => {
//             if (btn.classList.contains('active')) {
//                 const cardNameElement = btn.querySelector('.card-name');
                
//                 if (cardNameElement) {
//                     cardName = cardNameElement.textContent; 
//                 }
//             }
//         });

//         if (!cardName) {
//             console.log('Активная карта не найдена');
//             return;
//         }

//         const container = document.querySelector('.modal-con');
        
//         const content = `
//             <div class="modal">
//                 <div class="modal-close-con">
//                     <img class="modal-close" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/close_burger.svg" alt="">
//                 </div>
//                 <div class="modal-title">
//                     <img class="modal-logo" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/logo-mini.svg" alt="">
//                     <div class="modal-text">
//                         <h1>Оставьте заявку</h1>
//                         <h2>и мы свяжемся с вами</h2>
//                     </div>
//                 </div>
//                 <form class="form" action="">
//                     <input class="company-card" value="${cardName}" type="text" name="Заявка на фирму" readonly>
//                     <input class="input-tel" type="tel" name="Телефон" placeholder="Введите номер телефона">
//                     <button type="submit" class="btn btn-modal">Отправить</button>
//                     <div class="assent-span">
//                         <a href="/политика-конфиденциальности/">
//                             <span>Правила обработки данных</span>
//                             <img class="modal__check-que" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/que.svg" alt="">
//                         </a>
//                     </div>
//                 </form>
//             </div>
//         `;

//         container.innerHTML = content;

//         const closeButton = container.querySelector('.modal-close');
//         closeButton.addEventListener('click', function() {
//             container.innerHTML = '';
//         });
//     });
// });








document.querySelectorAll('.btn-form').forEach(button => {
	button.addEventListener('click', function() {



			const Container = document.querySelector('.modal-con');
			const title = document.title;

			const Content = `
					<div class="modal">
							<div class="modal-close-con">
									<img class="modal-close" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/close_burger.svg" alt="">
							</div>
							<div class="modal-title">
									<img class="modal-logo" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/logo-mini.svg" alt="">
									<div class="modal-text">
											<h1>Оставьте заявку</h1>
											<h2>и мы свяжемся с вами</h2>
									</div>
							</div>
							<form class="form" action="">
									<input class="company-card" value="${title}" type="text" name="Заявка&nbspсо&nbspстраницы" disabled readonly>
									<input class="input-tel" type="tel" name="Телефон" placeholder="Введите номер телефона">
									<button type="submit" class="btn btn-modal">Отправить</button>
									<div class="assent-span">
											<a href="/политика-конфиденциальности/">
													<span>Правила обработки данных</span>
													<img class="modal__check-que" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/que.svg" alt="">
											</a>
									</div>
							</form>
					</div>
			`;

			Container.innerHTML = Content;

			const closeButton = Container.querySelector('.modal-close');
			closeButton.addEventListener('click', function() {
					Container.innerHTML = '';
			});
	});

});

function validation(){
	const form = document.querySelector('.form');
	const telSelector = form.querySelector('.input-tel');
	const inputmask = new Inputmask('+7 (999) 999-99-99');
	inputmask.mask(telSelector);
	const validation = new JustValidate('.form');


	validation
		.addField('.input-tel', [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Телефон обязателен',
			},
			{
				rule: 'function',
				validator: function () {
					const phone = telSelector.inputmask.unmaskedvalue();
					return phone.length === 10;
				},
				errorMessage: 'Введите корректный телефон',
			},
		])
		.onSuccess((event) => {
			console.log('Validation passes and form submitted', event);

			let formData = new FormData(event.target);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');

						const modalCon = document.querySelector('.modal-con');
						const sendСheck = document.querySelector('.send-check');

						modalCon.classList.add('inactive');
						sendСheck.classList.add('active');

						setTimeout(() => {
							sendСheck.classList.remove('active');
						}, 4000);
						

					
					}
				}
			}

			xhr.open('POST', '/wp-content/themes/nadezhnye-lyudi/mail.php', true);
			xhr.send(formData);

			event.target.reset();
		});

		closeBtn()
}

document.querySelectorAll('.btn-form').forEach(element => {
	

	element.addEventListener('click', function() {



		validation()

	});
});



document.addEventListener("DOMContentLoaded", function() {
	const titleImg = document.querySelector('.title-img');
	const title = document.querySelector('.title');
	if (titleImg) {
			// Добавляем класс .show, если элемент существует
			titleImg.classList.add('show');
	}
	if (title) {
		// Добавляем класс .show, если элемент существует
		title.classList.add('show');
}
});












// заявка 
// 








