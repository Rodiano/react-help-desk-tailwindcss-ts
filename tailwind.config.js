/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
	content: [
		"./src/**.{js,ts,jsx,tsx}",
		"./src/components/**/**.{js,ts,jsx,tsx}",
		"./storybook/**.{js,ts,jsx,tsx}",
		"./node_modules/@material-tailwind/react/**/**.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {},
	},

	plugins: [],
});
