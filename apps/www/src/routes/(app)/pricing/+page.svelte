<script lang="ts">
	import PricingTable from "$lib/components/docs/pricing-table/pricing-table.svelte";
	import DetailedComparison from "$lib/components/docs/pricing-table/detailed-comparison.svelte";
</script>

<div class="container py-10">
	<div class="mx-auto max-w-[980px] text-center">
		<h1
			class="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]"
		>
			Team collaboration in the <p>world's best writing app</p>
		</h1>
		<p class="mt-4 text-lg text-muted-foreground">
			Choose the plan that's right for your team.
		</p>
	</div>

	<div class="mt-16">
		<PricingTable summary={true} />
	</div>

	<div class="mt-32">
		<h2 class="text-center text-3xl font-bold">Compare all features</h2>
		<div class="mt-16">
			<DetailedComparison />
		</div>
	</div>
</div>
