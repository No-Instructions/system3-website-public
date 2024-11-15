<script lang="ts">
	import { BadgeCheck, Clock, Lightbulb } from "lucide-svelte";
	import { cn } from "$lib/utils";
	import { Card } from "$lib/registry/new-york/ui/card/index.js";

	const categories = [
		{
			title: "Active",
			description: "What we're working on now",
			icon: BadgeCheck,
			iconClass: "text-green-500",
			items: [
				{
					title: "Universal file sync",
					description: "Support for non-.md files (pdf, jpeg, etc.)",
				},
				{
					title: "Link decorations",
					description: "Visual indicators for links to notes outside shared folders",
				},
				{
					title: "Background sync",
					description: "Relay content updates even when notes aren't open",
				},
				{
					title: "Mobile support",
					description: "Full mobile compatibility",
				},
			],
		},
		{
			title: "Planned",
			description: "What we intend to do",
			icon: Clock,
			iconClass: "text-blue-500",
			items: [
				{
					title: "Edge case improvements",
					description: "Better handling of offline states and authentication",
				},
			],
		},
		{
			title: "Considering",
			description: "Haven't committed to it (yet)",
			icon: Lightbulb,
			iconClass: "text-yellow-500",
			items: [
				{
					title: "Recent activity",
					description: "Track recent changes in shared folders",
				},
				{
					title: "Advanced permissions",
					description: "Granular read/write controls at folder level",
				},
				{
					title: "Notifications",
					description: "Get notified of mentions and tracked note modifications",
				},
				{
					title: "User tagging",
					description: "Tag users to notify them of content",
				},
				{
					title: "Settings UI overhaul",
					description: "Improved settings interface",
				},
				{
					title: "Identity providers",
					description: "Support for multiple login services",
				},
				{
					title: "End-to-end encryption",
					description: "Enhanced security for shared content",
				},
				{
					title: "SOC 2 compliance",
					description: "Enterprise-grade security certification",
				},
				{
					title: "Web access",
					description: "Access shared content via web app with shareable links",
				},
			],
		},
	];
</script>

<div class="container py-10">
	<div class="mx-auto max-w-[980px]">
		<!-- Header -->
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tighter">Relay roadmap</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				Here's what we're planning. For feature requests or more information,
				<a href="https://discord.system3.md" class="text-primary hover:underline"
					>join our Discord</a
				>.
			</p>
		</div>

		<!-- Categories -->
		<div class="mt-16">
			{#each categories as category}
				<div class="mb-16">
					<div class="flex items-start gap-8">
						<!-- Category Header -->
						<div class="w-32 flex-shrink-0 pt-4">
							<div class="flex items-center gap-2">
								<svelte:component
									this={category.icon}
									class={cn("h-5 w-5", category.iconClass)}
								/>
								<h2 class="font-bold">{category.title}</h2>
							</div>
							<p class="mt-1 text-sm text-muted-foreground">{category.description}</p>
						</div>

						<!-- Items -->
						<div class="flex-1 space-y-4">
							{#each category.items as item}
								<Card class="p-4">
									<h3 class="font-semibold">{item.title}</h3>
									<p class="mt-1 text-sm text-muted-foreground">
										{item.description}
									</p>
								</Card>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Footer -->
		<div class="mt-16 text-center text-sm text-muted-foreground">
			<p>Last updated: November 10, 2024</p>
		</div>
	</div>
</div>
