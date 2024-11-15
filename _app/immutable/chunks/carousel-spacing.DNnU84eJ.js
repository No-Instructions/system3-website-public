const t=`<script lang="ts">
	import * as Card from "$lib/registry/new-york/ui/card/index.js";
	import * as Carousel from "$lib/registry/new-york/ui/carousel/index.js";
<\/script>

<Carousel.Root class="w-full max-w-sm">
	<Carousel.Content class="-ml-1">
		{#each Array(5) as _, i (i)}
			<Carousel.Item class="pl-1 md:basis-1/2 lg:basis-1/3">
				<div class="p-1">
					<Card.Root>
						<Card.Content class="flex aspect-square items-center justify-center p-6">
							<span class="text-2xl font-semibold">{i + 1}</span>
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
`;export{t as default};
