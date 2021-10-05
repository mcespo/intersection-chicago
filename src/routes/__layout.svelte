<svelte:head>
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
</script>

<Nav />
<Hero />
<main class="container">
    <slot />
</main>

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
        @apply text-xl leading-relaxed mb-6;
    }
</style>
