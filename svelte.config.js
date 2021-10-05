/** @type {import('@sveltejs/kit').Config} */
import image from "svelte-image";
import adapter from '@sveltejs/adapter-netlify';

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        adapter: adapter(),
        target: '#svelte',
    },
    preprocess: {
        ...image(),
    }

};

export default config;
