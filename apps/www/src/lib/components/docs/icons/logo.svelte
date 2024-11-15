<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	type $$Props = HTMLAttributes<SVGElement>;
</script>

<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...$$restProps}>
	<rect width="256" height="256" fill="none" />
	<line
		x1="208"
		y1="128"
		x2="128"
		y2="208"
		fill="none"
		stroke="#EB4F27"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="32"
	/>
	<line
		x1="192"
		y1="40"
		x2="40"
		y2="192"
		fill="none"
		stroke="#EB4F27"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/>
</svg> -->

<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...$$restProps}>
<rect width="256" height="256" fill="none" />
<polygon points="128,48 48,208 208,208" fill="none" stroke="#34495e" stroke-width="16"/>
<circle cx="128" cy="48" r="50" fill="#e74c3c"/>
<circle cx="48" cy="208" r="50" fill="#3498db"/>
<circle cx="208" cy="208" r="50" fill="#2ecc71"/>
</svg> -->


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...$$restProps}>
<rect width="256" height="256" fill="none" />
<polygon points="128,58.72 48,197.28 208,197.28" fill="none" stroke="#808080" stroke-width="16"/>
<circle cx="128" cy="58.72" r="42" fill="#e74c3c"/>
<circle cx="48" cy="197.28" r="42" fill="#3498db"/>
<circle cx="208" cy="197.28" r="42" fill="#2ecc71"/>
</svg>