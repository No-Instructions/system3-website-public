const t=`<script lang="ts">
	import { onMount } from "svelte";
	import { Progress } from "$lib/registry/default/ui/progress/index.js";

	let value = 13;
	onMount(() => {
		const timer = setTimeout(() => (value = 66), 500);
		return () => clearTimeout(timer);
	});
<\/script>

<Progress {value} max={100} class="w-[60%]" />
`;export{t as default};
