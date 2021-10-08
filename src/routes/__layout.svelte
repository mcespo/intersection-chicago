<svelte:head>
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
    :global(h2) {
        @apply text-3xl text-gray-800 mt-3 mb-5 font-extrabold uppercase;
    }
    :global(h3) {
        @apply text-2xl text-gray-800 mt-2 mb-4 font-extrabold;
    }
    :global(p) {
        @apply text-xl leading-relaxed mb-6 max-w-prose;
    }
</style>
