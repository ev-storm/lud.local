<?php
// Функции для вашей темы

// Подключаем стили и шрифты
function mytheme_enqueue_styles() {
    // Подключаем основной стиль
    wp_enqueue_style('style', get_stylesheet_uri());

    // Подключаем шрифты через inline style
     $custom_css = "
    @font-face {
        font-family: 'Tranforma';  
        src: url('" . get_template_directory_uri() . "/assets/font/TransformaSans_Trial-Regular.ttf') format('truetype');
        font-weight: 400;
    } 
    @font-face {
        font-family: 'Tranforma';
        src: url('" . get_template_directory_uri() . "/assets/font/TransformaSans-Medium.woff') format('woff');
        font-weight: 500;
    }";

    wp_add_inline_style('style', $custom_css);
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles');
?>