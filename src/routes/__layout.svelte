<script>
    import Nav from "../components/nav.svelte";
</script>
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,800;1,400&display=swap" rel="stylesheet">
</svelte:head>
<Nav />
<main class="container">
    <slot />
</main>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    :global(body) {
        font-family: 'Playfair Display', serif;
        @apply font-normal text-gray-900;
    }
</style>
