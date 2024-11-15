<script lang="ts">
	import { Accordion } from "bits-ui";
	import Content from "$lib/components/ui/accordion/accordion-content.svelte";
	import Item from "$lib/components/ui/accordion/accordion-item.svelte";
	import Trigger from "$lib/components/ui/accordion/accordion-trigger.svelte";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import { Card } from "$lib/registry/new-york/ui/card/index.js";
	import { cn } from "$lib/utils.js";
	import { ArrowLeft } from "lucide-svelte";

	let openFeatures: string[] = [];

	const plans = [
		{
			name: "Starter",
			price: {
				amount: "0",
				unit: "free forever",
			},
			description: "The basics for team collaboration and individual use",
			keyFeatures: [
				{
					title: "Up to 10 users",
					description: "Perfect for small teams and early-stage projects",
				},
				{
					title: "Background sync",
					description: "Keep your team's work synchronized automatically",
				},
				{
					title: "Full relay access",
					description:
						"All team members have read and write access to all folders in the relay",
				},
				{
					title: "7-day version history",
					description: "Restore previous versions up to a week back",
				},
			],
		},
		{
			name: "Team",
			price: {
				amount: "3",
				unit: "per user/month",
			},
			description: "Advanced collaboration for individuals and organizations",
			keyFeatures: [
				{
					isUpgrade: true,
					title: "Everything in Starter, plus:",
					description: "",
				},
				{
					title: "Up to 20 users",
					description: "More capacity for your growing team",
				},
				{
					title: "File sync",
					description: "Keep all your files in sync across devices",
				},
				{
					title: "30-day version history",
					description: "Extended version history for better tracking",
				},
			],
		},
		{
			name: "Business",
			price: {
				amount: "20",
				unit: "per user/month",
			},
			description: "Security, control, and flexible deployment",
			keyFeatures: [
				{
					isUpgrade: true,
					title: "Everything in Team, plus:",
					description: "",
				},
				{
					title: "Up to 250 users",
					description: "Enterprise-scale collaboration",
				},
				{
					title: "Folder-level access controls",
					description:
						"Relay admins can set per-user read/write permissions for each folder in the relay",
				},
				{
					title: "SOC II Compliance",
					description: "Enterprise-grade security compliance",
				},
				{
					title: "End-to-End Encryption",
					description: "Maximum data security and privacy",
				},
				{
					title: "Self-Hosting option",
					description: "Deploy on your own infrastructure",
				},
			],
		},
	];
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
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="grid gap-8 md:grid-cols-3">
				{#each plans as plan}
					<Card
						class={cn(
							"relative rounded-xl border p-6",
							plan.name === "Team" && "border-primary bg-primary/5 shadow-lg"
						)}
					>
						{#if plan.name === "Team"}
							<div
								class="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-sm text-primary-foreground"
							>
								Popular
							</div>
						{/if}

						<div class="flex flex-col">
							<!-- Plan name -->
							<h3 class="text-xl font-bold text-foreground">{plan.name}</h3>

							<!-- Description in fixed height container -->
							<div class="h-[48px]">
								<p class="mt-1 text-sm text-muted-foreground">{plan.description}</p>
							</div>

							<!-- Pricing -->
							<div class="flex items-baseline">
								<span class="text-muted-foreground">$</span>
								<span class="text-4xl font-bold tracking-tight text-foreground"
									>{plan.price.amount}</span
								>
								<span class="ml-1 text-sm text-muted-foreground"
									>{plan.price.unit}</span
								>
							</div>

							<!-- CTA -->
							<div class="mb-6 mt-6">
								<Button
									variant={plan.name === "Team" ? "default" : "outline"}
									class="w-full"
								>
									{#if plan.name === "Starter"}
										Join for free
									{:else if plan.name === "Team"}
										Get started
									{:else}
										Contact sales
									{/if}
								</Button>
							</div>

							<!-- Features -->
							<Accordion.Root
								type="multiple"
								value={openFeatures}
								onValueChange={(value) => (openFeatures = value)}
								class="flex flex-col gap-3"
							>
								{#each plan.keyFeatures as feature}
									{#if feature.isUpgrade}
										<div class="flex items-center gap-3">
											<ArrowLeft class="h-4 w-4 stroke-[3] text-primary" />
											<span class="text-sm">{feature.title}</span>
										</div>
									{:else}
										<Item value={feature.title} class="border-none">
											<Trigger class="p-0 hover:no-underline">
												<span class="text-sm font-semibold"
													>{feature.title}</span
												>
											</Trigger>
											<Content class="text-sm text-muted-foreground">
												{feature.description}
											</Content>
										</Item>
									{/if}
								{/each}
							</Accordion.Root>
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-32">
		<h2 class="text-center text-3xl font-bold">Compare all features</h2>
		<div class="mt-16">
			<!-- Detailed comparison table will go here -->
		</div>
	</div>
</div>
