<!-- apps/www/src/lib/components/docs/productivity-nav.svelte -->
<script lang="ts">
	import { productivityConfig } from "$lib/config/productivity.js";
	import { page } from "$app/stores";
</script>

<div class="space-y-2">
	<p class="font-medium">Navigation</p>
	<nav class="space-y-1">
		{#each productivityConfig.sidebarNav as section}
			<div class="pt-2">
				<h4 class="mb-1 font-medium">{section.title}</h4>
				<ul class="space-y-1">
					{#each section.items as item}
						<li>
							<a
								href={item.href}
								class="block rounded-md px-3 py-2 text-sm hover:bg-muted"
								class:text-primary={$page.url.pathname === item.href}
							>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</nav>
</div>
