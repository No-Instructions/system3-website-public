<script lang="ts">
	import {
		// CommandMenu,
		Icons,
		MainNav,
		MobileNav,
		ModeToggle,
	} from "$lib/components/docs/index.js";
	import { buttonVariants } from "$lib/registry/new-york/ui/button/index.js";
	import { siteConfig } from "$lib/config/site.js";
	import { cn } from "$lib/utils.js";
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
			<!-- <div class="w-full flex-1 md:w-auto md:flex-none">
				<CommandMenu />
			</div> -->
			<nav class="flex items-center">
				<a href={siteConfig.links.system3Discord} target="_blank" rel="noopener noreferrer">
					<div
						class={cn(
							buttonVariants({
								size: "sm",
								variant: "ghost",
							}),
							"w-9 px-0"
						)}
					>
						<Icons.discord class="h-4 w-4" />
						<span class="sr-only">Discord</span>
					</div>
				</a>
				<ModeToggle />
			</nav>
		</div>
	</div>
</header>
