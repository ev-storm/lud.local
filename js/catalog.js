


async function loadCatalog() {
	try {

			const response = await fetch('/wp-content/themes/nadezhnye-lyudi/js/card.json');
			const companies = await response.json();
			const catalogDiv = document.querySelector('.catalog');
			const searchInput = document.querySelector('.search');
			const newButton = document.querySelector('.new'); 
			const oldButton = document.querySelector('.old'); 
			const maxMoneyButton = document.querySelector('.max-money');
			const minMoneyButton = document.querySelector('.min-money');

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
													<button data="${company.name}" class="btn trigger btn-form">заказать</button>
											</div>
									</div>
							`;
							catalogDiv.innerHTML += companyHTML;
					});
			}

			renderCompanies(companies); // Отображаем все компании при загрузке

			searchInput.addEventListener('input', function() {
					const query = this.value.toLowerCase();
					const filteredCompanies = companies.filter(company =>
							company.name.toLowerCase().includes(query)
					);
					renderCompanies(filteredCompanies);
			});

			newButton.addEventListener('click', function() {
					const sortedCompanies = [...companies].sort((a, b) => {
							const yearA = parseInt(a.location.match(/\d+/)[0]);
							const yearB = parseInt(b.location.match(/\d+/)[0]);
							return yearB - yearA; 
					});

					renderCompanies(sortedCompanies);
			});

			oldButton.addEventListener('click', function() {
					const sortedCompanies = [...companies].sort((a, b) => {
							const yearA = parseInt(a.location.match(/\d+/)[0]);
							const yearB = parseInt(b.location.match(/\d+/)[0]);
							return yearA - yearB;
					});

					renderCompanies(sortedCompanies);
			});





			maxMoneyButton.addEventListener('click', function() {
				const sortedCompanies = [...companies].sort((a, b) => {
						const proceedsA = calculateTotalProceeds(a);
						const proceedsB = calculateTotalProceeds(b);
						
						return proceedsB - proceedsA; // Sort in descending order
				});
		
				renderCompanies(sortedCompanies);
		});
		
		minMoneyButton.addEventListener('click', function() {
				const sortedCompanies = [...companies].sort((a, b) => {
						const proceedsA = calculateTotalProceeds(a);
						const proceedsB = calculateTotalProceeds(b);
						
						return proceedsA - proceedsB; // Sort in ascending order
				});
		
				renderCompanies(sortedCompanies);
		});
		
		// Helper function to calculate total proceeds
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



