<script lang="ts">
	import { ChevronDown } from "lucide-svelte";
	import { Icons } from "../icons/index.js";
	import { page } from "$app/stores";
	import { siteConfig } from "$lib/config/site.js";
	import { cn } from "$lib/utils.js";
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<Icons.logo class="h-6 w-6" />
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		{#each siteConfig.mainNav as item}
			{#if item.items}
				<div class="group relative">
					<a
						href={item.href}
						class={cn(
							"flex items-center gap-1 transition-colors hover:text-foreground",
							$page.url.pathname.startsWith(item.href)
								? "text-foreground"
								: "text-foreground/80"
						)}
					>
						{item.title}
						<ChevronDown class="h-4 w-4" />
					</a>

					<div class="absolute -ml-3 hidden pt-2 group-hover:block">
						<div class="min-w-[12rem] rounded-md border bg-background p-1">
							<nav class="flex flex-col gap-1">
								{#each item.items as subItem}
									<a href={subItem.href} class="rounded px-2 py-1 hover:bg-muted">
										{subItem.title}
									</a>
								{/each}
							</nav>
						</div>
					</div>
				</div>
			{:else}
				<a
					href={item.href}
					class={cn(
						"transition-colors hover:text-foreground",
						$page.url.pathname.startsWith(item.href)
							? "text-foreground"
							: "text-foreground/80"
					)}
				>
					{item.title}
				</a>
			{/if}
		{/each}
	</nav>
</div>
