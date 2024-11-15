<script lang="ts">
	import { ArrowLeft } from "lucide-svelte";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import { Card } from "$lib/registry/new-york/ui/card/index.js";
	import { cn } from "$lib/utils.js";
	import * as Accordion from "$lib/components/ui/accordion/index.js";

	let openFeatures: string[] = [];

	const plans = [
		{
			name: "Starter",
			price: {
				amount: "0",
				unit: "free",
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
			features: [
				{ name: "Max users on the Relay", value: "Up to 10" },
				{ name: "Background sync", value: true },
				{ name: "File sync", value: false },
				{ name: "Storage limit", value: "1 MB" },
				{ name: "Server replica retention", value: "7 days" },
				{ name: "Version history", value: "7 days" },
				{ name: "Granular Permissions & Admin Tools", value: false },
				{ name: "SOC II Compliance", value: false },
				{ name: "End-to-End Encryption", value: false },
				{ name: "Self-Hosting", value: false },
				{ name: "Premium Support & Onboarding", value: false },
				{ name: "AI", value: "Available as add-on" },
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
			features: [
				{ name: "Max users on the Relay", value: "Up to 20" },
				{ name: "Background sync", value: true },
				{ name: "File sync", value: true },
				{ name: "Storage limit", value: "1 GB" },
				{ name: "Server replica retention", value: "30 days" },
				{ name: "Version history", value: "30 days" },
				{ name: "Granular Permissions & Admin Tools", value: false },
				{ name: "SOC II Compliance", value: false },
				{ name: "End-to-End Encryption", value: false },
				{ name: "Self-Hosting", value: false },
				{ name: "Premium Support & Onboarding", value: false },
				{ name: "AI", value: "Available as add-on" },
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
			features: [
				{ name: "Max users on the Relay", value: "Up to 250" },
				{ name: "Background sync", value: true },
				{ name: "File sync", value: true },
				{ name: "Storage limit", value: "1 TB" },
				{ name: "Server replica retention", value: "Unlimited" },
				{ name: "Version history", value: "Unlimited" },
				{ name: "Granular Permissions & Admin Tools", value: true },
				{ name: "SOC II Compliance", value: true },
				{ name: "End-to-End Encryption", value: true },
				{ name: "Self-Hosting", value: true },
				{ name: "Premium Support & Onboarding", value: true },
				{ name: "AI", value: "Available as add-on" },
			],
		},
	];
</script>

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
						<a href="/catalyst" class="hover:underline">Catalyst</a>
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
						<span class="ml-1 text-sm text-muted-foreground">
							{#if plan.name === "Starter"}
								<a href="/catalyst" class="hover:underline">free</a>
							{:else}
								{plan.price.unit}
							{/if}
						</span>
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
								<Accordion.Item value={feature.title} class="border-none">
									<Accordion.Trigger class="p-0 hover:no-underline">
										<span class="text-sm font-semibold">{feature.title}</span>
									</Accordion.Trigger>
									<Accordion.Content class="text-sm text-muted-foreground">
										{feature.description}
									</Accordion.Content>
								</Accordion.Item>
							{/if}
						{/each}
					</Accordion.Root>
				</div>
			</Card>
		{/each}
	</div>
</div>
