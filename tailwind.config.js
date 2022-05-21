const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./resources/**/*.blade.php',
		"./resources/scripts/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
		  sans: ['plus_jakarta_sans', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
}
