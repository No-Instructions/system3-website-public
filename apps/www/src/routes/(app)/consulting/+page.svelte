<script lang="ts">
	import FeatureTabs from "$lib/components/ui/feature-tabs.svelte";
	import * as PageHeader from "$lib/components/docs/page-header/index.js";
	import { buttonVariants } from "$lib/registry/new-york/ui/button/index.js";
	import { cn } from "$lib/utils.js";

	const consultingFeatures = [
		{
			name: "Workshop Design",
			description:
				"Custom training programs tailored to your team's specific needs and workflows.",
			image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
		},
		{
			name: "Implementation Planning",
			description:
				"Strategic roadmap for rolling out knowledge management practices across your organization.",
			image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=800&fit=crop",
		},
		{
			name: "Team Training",
			description:
				"Hands-on sessions to get your team up to speed with effective collaboration patterns.",
			image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&h=800&fit=crop",
		},
		{
			name: "Workflow Integration",
			description: "Connect Relay and Obsidian with your existing tools and processes.",
			image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&h=800&fit=crop",
		},
	];
</script>

<div class="container relative">
	<PageHeader.Root>
		<PageHeader.Heading>Team implementation services</PageHeader.Heading>
		<PageHeader.Description>
			We help teams develop effective knowledge work practices that scale.
		</PageHeader.Description>
		<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<a
				href="https://cal.com/team/system3/demo"
				target="_blank"
				class={cn(buttonVariants())}
			>
				Schedule a consultation
			</a>
		</div>
	</PageHeader.Root>

	<section class="py-12">
		<div class="mx-auto max-w-[800px] text-center">
			<h2 class="text-3xl font-bold">Beyond tool implementation</h2>
			<p class="mt-4 text-lg text-muted-foreground">
				Successful knowledge management requires more than just software. We help teams
				develop the practices and patterns that make tools valuable.
			</p>
		</div>
	</section>
</div>

<section class="w-full border-y bg-secondary/50 py-32 pb-40">
	<div class="container">
		<FeatureTabs features={consultingFeatures} />
	</div>
</section>

<div class="container relative">
	<!-- Add more sections here -->
</div>
