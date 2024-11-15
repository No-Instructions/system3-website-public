<script lang="ts">
	import { SiteFooter, SiteHeader, TailwindIndicator } from "$lib/components/docs/index.js";
	import { dev } from "$app/environment";
</script>

<svelte:head>
	<style>
		:root {
			--vis-color0: var(--primary);
			--vis-color1: #ffffff;
			--vis-color2: #ffffff;
			--vis-color3: #ffffff;
			--vis-color4: #ffffff;
		}
	</style>
</svelte:head>

<SiteHeader />
<div class="flex-1">
	<slot />
</div>
<SiteFooter />
{#if dev}
	<TailwindIndicator />
{/if}
