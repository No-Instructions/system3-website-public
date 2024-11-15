<script lang="ts">
	import { fade } from "svelte/transition";
	import type { Feature } from "$lib/types/ui.js";

	export let features: Feature[];
	let activeTab = 0;
</script>

<div class="relative">
	<div class="container">
		<div class="grid grid-cols-12">
			<div class="col-span-5 flex flex-col space-y-1 self-center">
				{#each features as feature, i}
					<button
						class="group relative w-full rounded-l-lg p-6 text-left transition-all
																					duration-200
																					{activeTab === i ? 'bg-primary/25 shadow-sm ring-1 ring-primary' : 'hover:bg-primary/10'}"
						on:click={() => (activeTab = i)}
					>
						<div class="relative z-10">
							<h3 class="font-semibold">
								{feature.name}
							</h3>
							<p class="mt-2 text-muted-foreground">{feature.description}</p>
						</div>
					</button>
				{/each}
			</div>

			<div class="relative col-span-7">
				<div
					class="absolute left-0 -my-[60px]"
					style="height: 640px; width: calc(100% + (100vw - var(--container-width)) / 2);"
				>
					{#each features as feature, i}
						{#if activeTab === i}
							<div class="absolute inset-0" transition:fade={{ duration: 300 }}>
								<img
									src={feature.image}
									alt={feature.name}
									class="h-full w-full rounded-l-lg object-cover shadow-lg"
								/>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.relative {
		transform: translateZ(0);
	}
	:global(:root) {
		--container-width: 1280px;
	}
</style>
