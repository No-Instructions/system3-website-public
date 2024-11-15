const t=`<script lang="ts">
	import FontBold from "svelte-radix/FontBold.svelte";
	import FontItalic from "svelte-radix/FontItalic.svelte";
	import Underline from "svelte-radix/Underline.svelte";
	import * as ToggleGroup from "$lib/registry/new-york/ui/toggle-group/index.js";
<\/script>

<ToggleGroup.Root disabled type="single">
	<ToggleGroup.Item value="bold" aria-label="Toggle bold">
		<FontBold class="h-4 w-4" />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="italic" aria-label="Toggle italic">
		<FontItalic class="h-4 w-4" />
	</ToggleGroup.Item>
	<ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
		<Underline class="h-4 w-4" />
	</ToggleGroup.Item>
</ToggleGroup.Root>
`;export{t as default};
