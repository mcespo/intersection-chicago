/** @type {import('@sveltejs/kit').Config} */
import image from "svelte-image";

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte'
    },
    preprocess: {
        ...image(),
    }

};

export default config;
