    <?php
    /*
    Template Name: каталог-фирм
    */
    ?>


<!DOCTYPE html>
<html lang="ru">
    <?php get_template_part('components/head'); ?>
<title>НЛ | Каталог фирм</title>

<body>
    <?php get_template_part('components/header'); ?>
    <?php get_template_part('components/modal'); ?>
	<div class="container">
		<div class="catalog-title">
			<div class="catalog-title_l1">
				<h1>Каталог фирм</h1>
				
			</div>
			<div class="catalog-title_l2">
				<div class="icons-cat">
					<button class="img-before new">Новые</button>
					<button class="img-before old">Старые</button>
					<button class="img-before max-money">C наибольшей выручкой</button>
					<button class="img-before min-money">C наименьшей выручкой</button>
					<input type="text" class=" search" placeholder=" поиск по названию">
				</div>
				<div class="icons-cat-mob">
					<div>
						<img class="m-icon-cat new" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/cal.svg" alt="">
						<img class="m-icon-cat old" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/old.svg" alt="">
						<img class="m-icon-cat max-money" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/up.svg" alt="">
						<img class="m-icon-cat min-money" src="/wp-content/themes/nadezhnye-lyudi/assets/svg/down.svg" alt="">
					</div>
					
					<input type="text" class="search-mob search" placeholder=" поиск фирм по названию">
				</div>
				
				<!-- <button>Фильтр</button> -->
			</div>
			<h1 class="text-cat-mob">Каталог фирм</h1>
		</div>
	

		<div class="catalog">


		
			<!-- <div class="card-cat">
				<div class="card-cat-title">
					<img src="/assets/svg/logo-mini.svg" alt="">
					<div>
						<h1>ООО Авангард</h1>
						<h2>Московская область | 2017</h2>
					</div>
				</div>
				<div class="card-cat-content">
					<div>
						<h2>Выручка:<br>
							<span>2024 - 0 млн. ₽</span><br>
							<span>2023 – 1.7 млн. ₽</span><br>
							<span>2022 – 5.7 млн. ₽</span>
						</h2>
					</div>
					<div>
						<h2>УСН: <span>6%</span></h2>
						<h2>Р/сч: <span>Альфа</span></h2>
						<h2>ОКВЭДы: <br>
							<span>Строительство Строительство Строительство</span></h2>
					</div>
				</div>
				<div class="card-cat-btn">
					<h2 class=" trigger btn-form">заявка на консультацию</h2>
					<button  class="btn trigger">заказать</button>
				</div>
			</div> -->











		</div>

		<!-- <h1 class="non-text">Ничего не найдено</h1> -->





    <?php get_template_part('components/footer'); ?>
		

	</div>
</body>
</html>