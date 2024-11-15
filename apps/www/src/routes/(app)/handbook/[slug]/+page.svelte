<script lang="ts">
    export let data;
</script>

<article class="prose dark:prose-invert max-w-none">
    <svelte:component this={data.content} />
</article>
