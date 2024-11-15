<script lang="ts">
	import PieChart from "lucide-svelte/icons/pie-chart";
	import { Icons } from "./icons/index.js";
	import { Separator } from "$lib/registry/new-york/ui/separator/index.js";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<a
	href="/relay/releases"
	class={cn(
		"inline-flex items-center text-sm text-muted-foreground hover:text-foreground",
		className
	)}
	{...$$restProps}
>
	<PieChart class="size-4" />
	<Separator class="mx-2 h-4" orientation="vertical" />
	<span>New in Relay 0.3.6: UI/UX improvements</span>
	<Icons.arrowRight class="ml-1 size-4" />
</a>
