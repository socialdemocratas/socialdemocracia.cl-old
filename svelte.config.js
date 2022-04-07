//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { windi } from "svelte-windicss-preprocess";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		windi({})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
