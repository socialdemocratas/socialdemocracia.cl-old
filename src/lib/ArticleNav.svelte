<script>

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

function onClickSave() {
    dispatch('save');
}

function onClickComments() {
    dispatch('comments');
}

function onClickShare() {
    dispatch('share');
}

</script>
<nav class="sticky bottom-1 m-auto mt-14">
    <div class="flex flex-row justify-center">
        <button class="btn-action rounded-tl-1 rounded-bl-1" on:click={onClickSave}>
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
            <small>3</small>
        </button>
        <button class="btn-action" on:click={onClickComments}>
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
            <small>12</small>
        </button>
        <button class="btn-action rounded-tr-1 rounded-br-1" on:click={onClickShare}>
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
            <small>-</small>
        </button>
    </div>
</nav>

<style>
.btn-action {
    background-color: white;
    @apply pl-3 pr-3 pt-1 pb-1 flex flex-col items-center shadow;
}
.btn-action small {
    line-height: 1;
}
</style>