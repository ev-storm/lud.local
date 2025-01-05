<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u2953914_wp229' );

/** Database username */
define( 'DB_USER', 'u2953914_wp229' );

/** Database password */
define( 'DB_PASSWORD', 'p)2oS)59s5' );

/** Database hostname */
define( 'DB_HOST', 'in-site.pro' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'drrhcohqc3h9fayierhp3mcvdm8l4jjb7h0svtf2lvljwefwiqgyyhdde01ytgq7' );
define( 'SECURE_AUTH_KEY',  'rmlkzrcieohmoq81dstugfgkss5wptrndziv6waasb9i72i1bqmaa76i3thxh3nr' );
define( 'LOGGED_IN_KEY',    'ion5en4ksnhcgpjz2zdoxrexqarrzswitkqiztlocxwkdbvzzzf8vcyur5idxrg6' );
define( 'NONCE_KEY',        'p9zggqijmnvqlgr0tezuecozdgone7tqitb7qcmtvoamxldgzlpp1bdjsru1f6q3' );
define( 'AUTH_SALT',        'ho2bu4j18sihjgynyx0qqs35ltlsoemkhltihw2uqb8mg6wo0tpnrzai21u1ob4y' );
define( 'SECURE_AUTH_SALT', 'dlu7ljzm5pjd1108pshmyadlevkazcxzo8qeff7dbkic8dunhhda7khd6nzf9afb' );
define( 'LOGGED_IN_SALT',   'dx3xk04xd4giir93vgwvgvw0wmtrj9lpnwtt6qljxzlxlbbhvsn0dzljzpcvvgd5' );
define( 'NONCE_SALT',       'mbbjngpytcxxazf2sbiwcybdrrhxdv09udo7mwfm3loeom03zogfrjtn1h2jvor0' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wptw_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
