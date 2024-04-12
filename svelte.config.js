// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss:{
			prependData:`@import './src/lib/style/_variables.scss';`,
		}
	}),
	kit: {
		adapter: adapter(),
	}
};

export default config;
