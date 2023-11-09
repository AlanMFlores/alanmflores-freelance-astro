/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainColor: '#4FBDBA',
				mainColorDark: '#429C9A',
				darkestColor: '#171717',
				darkColor: '#1E1E1E',
				lightColor: '#D9D9D9',
			  }
		},
	},
	plugins: [],
}
