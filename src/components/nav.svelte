<script>
    import { page } from '$app/stores';
    const routes = [
        { href: '/', name: 'Home' },
        { href: '/about', name: 'About' }
    ];
</script>

<nav class="sticky top-0 py-1 z-10 bg-gray-200 shadow-md">
    <div class="flex container justify-between items-center">
        <a href="/"
            ><svg class="w-52" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 914 191">
                <title>Intersection</title>
                <desc>Intersection Color logo</desc>
                <path
                    d="M165 130V60h26v70zM268 60v70h-32l-15-44 1 14 1 30h-24V60h32l16 46-2-15V60zM338 79h-20v51h-26V79h-20V60h66zM364 79v8h32v17h-32v8h32v18h-55V60h55v19zM432 110h-6v20h-24V60h33c23 0 31 8 31 25 0 9-3 17-11 21l12 24h-25zm2-30h-8v13h8c7 0 8-4 8-7s-1-6-8-6zM500 132c-26 0-33-7-33-25h25c0 6 1 7 9 7 6 0 8-1 8-5 0-10-41 3-41-28 0-14 8-22 32-22 26 0 32 7 32 25h-24c0-6-1-8-8-8s-8 2-8 5c0 11 41-2 41 28 0 16-8 23-33 23zM561 79v8h32v17h-32v8h32v18h-55V60h55v19zM633 79c-7 0-10 5-10 16 0 13 3 17 10 17s9-3 10-12h25c-1 22-10 32-36 32s-34-16-34-37c0-20 9-36 34-36 27 0 35 8 36 30h-25c-1-8-3-10-10-10zM735 79h-20v51h-26V79h-20V60h66zM739 130V60h26v70zM769 95c0-20 9-36 36-36s36 16 36 36c0 21-9 37-36 37s-36-16-36-37zm48 0c0-11-4-16-12-16s-11 5-11 16c0 12 3 16 11 16s12-4 12-16zM914 60v70h-32l-15-44 1 14 1 30h-23V60h31l16 46-1-15-1-31z"
                />
                <path
                    fill="#911a1d"
                    d="m75 10 15 63 60-17-45 45 45 45-60-18-15 63-15-63-60 18 45-45L0 56l53 15 4-2 5-3z"
                />
                <path
                    fill="#14b5d9"
                    d="M157 45 97 63 82 0 66 63 7 45l33 34 44-25 3 5-43 24 7 7 34-19 2 4-48 28-25 25 72-41 2 4-72 41 42-12 28-16 3 4-22 13 2 9 18-10 3 4-19 11 11 45 15-62 60 17-45-45z"
                />
            </svg></a
        >
        <ul class="flex gap-2">
            {#each routes as route}
                <li>
                    <a
                        href={route.href}
                        class="uppercase text-base font-sans"
                        class:text-blue-300={route.href !== $page.path}
                        class:text-gray-400={route.href === $page.path}>{route.name}</a
                    >
                </li>
            {/each}
        </ul>
    </div>
</nav>
