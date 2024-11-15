const e=`<script lang="ts">
	import { Checkbox } from "$lib/registry/new-york/ui/checkbox/index.js";
	import Label from "$lib/registry/new-york/ui/label/label.svelte";
	let checked = false;
<\/script>

<div class="flex items-center space-x-2">
	<Checkbox id="terms" bind:checked />
	<Label
		for="terms"
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Accept terms and conditions
	</Label>
</div>
`;export{e as default};
