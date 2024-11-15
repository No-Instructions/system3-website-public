<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";

	let className: string | undefined = undefined;
	export { className as class };

	export let value: string[] = [];
	export let onValueChange = (v: string[]) => (value = v);
</script>

<AccordionPrimitive.Root type="multiple" {value} {onValueChange} class={className} {...$$restProps}>
	<slot />
</AccordionPrimitive.Root>
