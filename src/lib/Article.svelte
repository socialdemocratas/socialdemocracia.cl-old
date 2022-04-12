<script>
    export let imgSrc;
    export let title;
    export let authors;
    export let publised_at;
</script>

<article>
    <header class="header-bg relative h-[50vh]" >
        <div class="sticky top-0 z-50 flex flex-row justify-between text-primary">
            <h1 class="text-3xl font-black">Socialdemocracia</h1>
            <p>Menú</p>
        </div> 
        <div class="img-container h-[50vh] w-full" style="background:rgba(255, 255, 255, 0.30)">
            <div class="relative w-full h-full">
                <div
                    class="relative w-full h-full bg-cover bg-center"
                    style="background-image: url({imgSrc});"
                >
                    <img
                        alt=""
                        src={imgSrc}
                        class="absolute w-full h-full hidden"
                    />
                </div>
            </div>
        </div>
        <div class="w-full h-5 border-b-primary border-b pt-16 pl-2 pr-2">   
        </div>
        <div
            class="flex flex-row font-medium justify-between text-primary"
        >
            <p>{authors.join(", ")}</p>
            <p>{publised_at}</p>
        </div>
    </header>
    <div class="container p-3 pr-12" style="font-family: Cabin, 'Source Serif Pro';">
        <h1 class="text-3xl" style="margin-top: -100px;font-weight: 700;font-family: 'Roboto Condensed';">{title}</h1>
        {#if $$slots.abstract}
        <div class="abstract"><slot name="abstract" /></div>
        {/if}
        <slot />
    </div>
    <nav class="sticky bottom-1 pt-32 overflow-hidden">
        <div class="float-right flex flex-col justify-around">
            <button class="btn-action">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                </svg>
            </button>
            <button class="btn-action">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                </svg>
            </button>
            <button class="btn-action">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                </svg>
            </button>
        </div>
    </nav>
</article>

<style>
    .header-bg {
        @apply container m-auto max-w-screen-md;
    }
    .img-container {
        z-index: -1;
        @apply absolute top-0;
    }
    .img-container::after {
        display: block;
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, #ffffff00, #ffffff);
    }
    .btn-action {
        @apply rounded-full w-12
    m-1 p-2;
    }
    .abstract {
        @apply
        m-5
    }
</style>
