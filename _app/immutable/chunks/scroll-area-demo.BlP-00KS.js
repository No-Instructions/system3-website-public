const t=`<script lang="ts">
	import { ScrollArea } from "$lib/registry/new-york/ui/scroll-area/index.js";
	import { Separator } from "$lib/registry/new-york/ui/separator/index.js";

	const tags = Array.from({ length: 50 }).map((_, i, a) => \`v1.2.0-beta.\${a.length - i}\`);
<\/script>

<ScrollArea class="h-72 w-48 rounded-md border">
	<div class="p-4">
		<h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
		{#each tags as tag}
			<div class="text-sm">
				{tag}
			</div>
			<Separator class="my-2" />
		{/each}
	</div>
</ScrollArea>
`;export{t as default};
