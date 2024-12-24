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



document.addEventListener("DOMContentLoaded", function() {
	const modalCon = document.querySelector('.modal-con');

	const companyCardInput = document.querySelector('.company-card');


	function addBackClassWithDelay() {
			setTimeout(function() {
					if (modalCon.classList.contains('active')) {
							modalCon.classList.add('back');
					}
			}, 100); 
	}


	document.addEventListener('click', function(event) {
			if (event.target.classList.contains('trigger')) {
					const dataValue = event.target.getAttribute('data');


					companyCardInput.value = dataValue;
			}
	});
});






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
document.addEventListener("DOMContentLoaded", function() {

	const modalCon = document.querySelector('.modal-con');
	const modalClose = document.querySelector('.modal-close');




	document.addEventListener('click', function(event) {
			if (event.target.classList.contains('trigger')) {
					modalCon.classList.remove('inactive');
					modalCon.classList.add('active');
			}
	});

	modalClose.addEventListener('click', function() {
			modalCon.classList.add('inactive');

	});


	modalCon.addEventListener('click', function(event) {
			if (event.target === modalCon) {
					modalCon.classList.add('inactive');
			}
	});
});


////////////////////////////////////////////////////////////



// inputmask
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

		xhr.open('POST', '../mail.php', true);
		xhr.send(formData);

		event.target.reset();
	});














// const checkbox = document.getElementById('modal__check');
// const button = document.querySelector('.btn-modal');

// checkbox.addEventListener('change', function() {
// 		if (this.checked) {
// 				button.disabled = false;
// 				button.classList.add('active');
// 		} else {
// 				button.disabled = true;
// 				button.classList.remove('active');
// 		}
// });





///////////////----PRELOADER-----/////////////////
function hidePreloader() {
	var preloader = document.getElementById('preloader');

	preloader.style.display = 'none';

	$('.menu').css({
		'opacity': 1,
		'transition': 'all 1s ease-out',
		'transform': 'translateY(0vw)',
	})
	
	setTimeout(function() {
		$('.title__text').css({
				'opacity': 1,
				'transition': 'all 1s ease-out',
				'transform': 'translateY(0vw)',
		});
	}, 1000);
}

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


	modalQrCon.addEventListener('click', function(event) {
				if (event.target === modalQrCon) {
								modalQrCon.classList.remove('active');
					modalQrCon.classList.add('inactive');
		
				}
		});
	});





document.querySelector('.qr-t').addEventListenerAll('click', function() {
	const qrContainer = document.querySelector('.modal_qr-con');

	const tgContent = `
			<div class="modal_qr">
					<div class="modal_qr-close-con">
							<img class="modal_qr-close" src="" alt="">
					</div>
					<div class="qr-img-con">
							<img class="qr-img" src="/assets/svg/qr-t.svg" alt="">
							<div>
									<img src="/assets/svg/tg.svg" alt="">
									<a href="https://t.me/Nadludi" target="_blank"><button class="btn">перейти</button></a>
							</div>
					</div>
			</div>`;

	qrContainer.innerHTML = tgContent;
});



document.querySelector('.qr-w').addEventListenerAll('click', function() {
	const qrContainer = document.querySelector('.modal_qr-con');

	const wContent = `
		<div class="modal_qr">
			<div class="modal_qr-close-con">
				<img class="modal_qr-close" src="" alt="">
			</div>
			<div class="qr-img-con">
				<img class="qr-img" src="/assets/svg/qr-w.svg" alt="">
				<div>
					<img src="/assets/svg/wapp.svg" alt="">
					<a href="https://api.whatsapp.com/send/?phone=79776640495&text&type=phone_number&app_absent=0" target="_blank"><button class="btn">перейти</button></a>
				</div>
			</div>
		</div>
	`;

	qrContainer.innerHTML = wContent;
});




