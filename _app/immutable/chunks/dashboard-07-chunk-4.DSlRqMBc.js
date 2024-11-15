const t=`<script lang="ts">
	import Upload from "lucide-svelte/icons/upload";
	import * as Card from "$lib/registry/new-york/ui/card/index.js";
<\/script>

<Card.Root
	class="overflow-hidden"
	data-x-chunk-name="dashboard-07-chunk-4"
	data-x-chunk-description="A card with a form to upload product images"
>
	<Card.Header>
		<Card.Title>Product Images</Card.Title>
		<Card.Description>
			Lipsum dolor sit amet, consectetur adipiscing elit
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-2">
			<img
				alt="Product"
				class="aspect-square w-full rounded-md object-cover"
				height="300"
				src="/images/placeholder.svg"
				width="300"
			/>
			<div class="grid grid-cols-3 gap-2">
				<button>
					<img
						alt="Product"
						class="aspect-square w-full rounded-md object-cover"
						height="84"
						src="/images/placeholder.svg"
						width="84"
					/>
				</button>
				<button>
					<img
						alt="Product"
						class="aspect-square w-full rounded-md object-cover"
						height="84"
						src="/images/placeholder.svg"
						width="84"
					/>
				</button>
				<button
					class="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
				>
					<Upload class="h-4 w-4 text-muted-foreground" />
					<span class="sr-only">Upload</span>
				</button>
			</div>
		</div>
	</Card.Content>
</Card.Root>
`;export{t as default};
