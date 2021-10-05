<svelte:head>
<link rel="icon" href="/favicon.ico" type="image/png" />
<meta name="keywords" content="Intersection Chicago, Human Library Chicago" />
<meta name="twitter:site" content="Intersection Chicago" />
<meta name="og:type" content="website" />
<meta name="og:site_name" content="Intersection Chicago" />
<meta name="description" content="Intersection Chicago’s purpose is to engage and educate communities through social contact and raise awareness of social issues." />
<meta name="image" content="/intersection-hero-image.jpg" />
<meta name="robots" content="index" />
<meta property="og:url" content="https://intersecionchicago.org/" />
<meta property="og:title" content="Intersection Chicago" name="title" />
<meta property="og:description" content="Intersection Chicago’s purpose is to engage and educate communities through social contact and raise awareness of social issues." name="description" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="Intersection Chicago" />
<meta name="twitter:title" content="Intersection Chicago" />
<meta name="twitter:description" content="Intersection Chicago’s purpose is to engage and educate communities through social contact and raise awareness of social issues." />
<meta name="theme-color" content="#663399" />
<link rel="apple-touch-icon" sizes="196x196" href="/favicon.png" />
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,800;1,400&display=swap"
    rel="stylesheet"
/>
</svelte:head>

<script>
    import Nav from '../components/nav.svelte';
    import Hero from '../components/hero.svelte';
    import Donate from '../components/donate.svelte';
    import Footer from '../components/footer.svelte';
</script>

<Nav />
<Hero />
<main class="container">
    <slot />
    <Donate />
</main>
<Footer />

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    :global(body) {
        font-family: 'Playfair Display', serif;
        @apply font-normal text-gray-700 bg-gray-100;
    }
    :global(h1) {
        @apply text-4xl text-gray-800 mt-4 mb-6 font-extrabold uppercase;
    }
    :global(p) {
        @apply text-xl leading-relaxed mb-6 max-w-prose;
    }
</style>
