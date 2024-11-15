<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import ChevronRight from "lucide-svelte/icons/chevron-right";
	import { cn } from "$lib/utils.js";

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	let className: $$Props["class"] = undefined;
	export let level: AccordionPrimitive.HeaderProps["level"] = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			"flex w-full flex-1 items-center gap-3 py-4 text-left font-medium transition-all [&[data-state=open]>svg]:rotate-90",
			className
		)}
		{...$$restProps}
		on:click
	>
		<ChevronRight class="h-4 w-4 transition-transform duration-200" />
		<span class="block text-left">
			<slot />
		</span>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
