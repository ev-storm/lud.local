<?php
    /*
    Template Name: купить-фирму
    */
    ?>

<!DOCTYPE html>
<html lang="ru">
    <?php get_template_part('components/head'); ?>
<title>НЛ | Купить фирму</title>


<style>
	.nav a:nth-child(3){
	color: #ffffff;
	transition: var(--tran_03);
	}
</style>

<body>
    <?php get_template_part('components/header'); ?>
    <?php get_template_part('components/modal'); ?>
	<div class="container">

		<div class="title-con">
			
			<div class="title-buy title">
				<h1>
					Продаём готовые фирмы
					по самым выгодным <br> ценам!
				</h1>

				<h2>
					- Все фирмы проходят тщательную проверку<br><br>
					- В наличии более 1000 фирм
				</h2>
				<button class="btn trigger btn-form mob-btn">консультация</button>
				<button class="btn trigger btn-form desc-btn">бесплатная консультация</button>
			</div>

			<div class="title-img title-img-non">
				<img class="buy-t-img" src="/wp-content/themes/nadezhnye-lyudi/assets/img/david-main.webp" alt="">
				<img class="buy-back back" src="/wp-content/themes/nadezhnye-lyudi/assets/img/david-main.webp" alt="">
			</div>

		</div>
		<div class="line"></div>

		

	
</body>
</html>