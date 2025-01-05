


async function loadCatalog() {
	try {

			const response = await fetch('/wp-content/themes/nadezhnye-lyudi/js/card.json');
			const companies = await response.json();
			const catalogDiv = document.querySelector('.catalog');
			const searchInput = document.querySelectorAll('.search');
			const newButton = document.querySelectorAll('.new'); 
			const oldButton = document.querySelectorAll('.old'); 
			const maxMoneyButton = document.querySelectorAll('.max-money');
			const minMoneyButton = document.querySelectorAll('.min-money');

			function renderCompanies(filteredCompanies) {
					catalogDiv.innerHTML = '';

					if (filteredCompanies.length === 0) {
							catalogDiv.innerHTML = '<h1 class="non-text">Фирмы по вашему запросу не найдены</h1>';
							return;
					}

					filteredCompanies.forEach(company => {


							const companyHTML = `
									<div class="card-cat">
											<div class="card-cat-title">
													<img src="/wp-content/themes/nadezhnye-lyudi/assets/svg/logo-mini.svg" alt="">
													<div>
															<h1>${company.name}</h1>
															<h2>${company.location}</h2>
													</div>
													
											</div>
											<button class="btn mob-h2-card">подробнее</button>
											
											<div class="card-cat-content">
													<div>
															<h2>Выручка:<br>
																	<span>${company.proceeds_1}</span><br>
																	<span>${company.proceeds_2}</span><br>
																	<span>${company.proceeds_3}</span>
															</h2>
													</div>
													<div>
															<h2>Налог: <span>${company.nalog}</span></h2>
															<h2>Р/сч: <span>${company.Rsc}</span></h2>
															<h2>ОКВЭДы:<br>
																	<span>${company.OKVD}</span>
															</h2>
													</div>
											</div>
											<div class="card-cat-btn">
													<h2 class="trigger">заявка на консультацию</h2>
													<button data-name="${company.name}" class="btn  trigger btn-form card-btn">заказать</button>
											</div>
									</h2>
							`;
						

							

							catalogDiv.innerHTML += companyHTML;

					});


				const buttons = catalogDiv.querySelectorAll('.card-btn');

				buttons.forEach(button => {
						button.addEventListener('click', function() {
								const companyName = this.getAttribute('data-name');
								const Container = document.querySelector('.modal-con');
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
														<input class="company-card" value="${companyName}" type="text" name="Заявка&nbspна&nbspфирму" disabled readonly>
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


								
								
							

								validation()


											});
									});
								}



			renderCompanies(companies); // Отображаем все компании при загрузке



			searchInput.forEach(searchInput => {
				searchInput.addEventListener('input', function() {
						const query = this.value.toLowerCase();
						const filteredCompanies = companies.filter(company =>
								company.name.toLowerCase().includes(query)
						);
						
						renderCompanies(filteredCompanies);
				});
			});


		
				newButton.forEach(newButton => {
					newButton.addEventListener('click', function() {
					const text = document.querySelector('.text-cat-mob');
					text.innerHTML = "Новые фирмы"
					const sortedCompanies = [...companies].sort((a, b) => {
							const yearA = parseInt(a.location.match(/\d+/)[0]);
							const yearB = parseInt(b.location.match(/\d+/)[0]);
							return yearB - yearA; 
					});
					

							renderCompanies(sortedCompanies);
					});
				});

		
				oldButton.forEach(oldButton=> {
					oldButton.addEventListener('click', function() {
						const text = document.querySelector('.text-cat-mob');
						text.innerHTML = "Старые фирмы"
						const sortedCompanies = [...companies].sort((a, b) => {
							const yearA = parseInt(a.location.match(/\d+/)[0]);
							const yearB = parseInt(b.location.match(/\d+/)[0]);
							return yearA - yearB;
						});
						renderCompanies(sortedCompanies);
					});
				});





	
				maxMoneyButton.forEach(maxMoneyButton=> {
					maxMoneyButton.addEventListener('click', function() {
						const text = document.querySelector('.text-cat-mob');
						text.innerHTML = "C наибольшей выручкой"
						const sortedCompanies = [...companies].sort((a, b) => {
							const proceedsA = calculateTotalProceeds(a);
							const proceedsB = calculateTotalProceeds(b);
							return proceedsB - proceedsA; 
						});
						renderCompanies(sortedCompanies);
					});
				});



			minMoneyButton.forEach(minMoneyButton=> {
				minMoneyButton.addEventListener('click', function() {
					const text = document.querySelector('.text-cat-mob');
					text.innerHTML = "C наименьшей выручкой"
				const sortedCompanies = [...companies].sort((a, b) => {
						const proceedsA = calculateTotalProceeds(a);
						const proceedsB = calculateTotalProceeds(b);
						return proceedsA - proceedsB; 
				});
				renderCompanies(sortedCompanies);
				});
			});
		

		function calculateTotalProceeds(company) {
				return [company.proceeds_1, company.proceeds_2].reduce((sum, proceeds) => {
						const match = proceeds.match(/- ([\d.]+) млн/);
						return sum + (match ? parseFloat(match[1]) : 0);
				}, 0);
		}



	} catch (error) {
			console.error('Ошибка при загрузке каталога:', error);
	}
}

loadCatalog();



// Получаем все элементы с классом card-cat
const iconCats = document.querySelectorAll('.m-icon-cat');


iconCats.forEach(icon => {
    icon.addEventListener('click', function() {

        iconCats.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
    });
});


const container = document.querySelector('.catalog');

container.addEventListener('click', function(event) {
	// Проверяем, нажали ли на элемент с классом card-cat
	if (event.target.closest('.card-cat')) {
			// Убираем класс 'active' у всех элементов .card-cat
			const cardCats = container.querySelectorAll('.card-cat');
			cardCats.forEach(item => {
					item.classList.remove('active');
			});

			// Добавляем класс 'active' к нажатому элементу .card-cat
			event.target.closest('.card-cat').classList.add('active');
	}
});