<script lang="ts">
	import { Check, Minus } from "lucide-svelte";

	const featureGroups = [
		{
			name: "Core Features",
			features: [
				{
					name: "Max users on the Relay",
					starter: "Up to 10",
					team: "Up to 20",
					professional: "Up to 250",
				},
				{
					name: "Background sync",
					starter: true,
					team: true,
					professional: true,
				},
				{
					name: "File sync",
					starter: false,
					team: true,
					professional: true,
				},
			],
		},
		{
			name: "Storage & History",
			features: [
				{
					name: "Storage limit",
					starter: "1 MB",
					team: "1 GB",
					professional: "1 TB",
				},
				{
					name: "Server replica retention",
					starter: "7 days",
					team: "30 days",
					professional: "Unlimited",
				},
				{
					name: "Version history",
					starter: "7 days",
					team: "30 days",
					professional: "Unlimited",
				},
			],
		},
		{
			name: "Security & Administration",
			features: [
				{
					name: "Granular Permissions & Admin Tools",
					starter: false,
					team: false,
					professional: true,
				},
				{
					name: "SOC II Compliance",
					starter: false,
					team: false,
					professional: true,
				},
				{
					name: "End-to-End Encryption",
					starter: false,
					team: false,
					professional: true,
				},
				{
					name: "Self-Hosting",
					starter: false,
					team: false,
					professional: true,
				},
			],
		},
		{
			name: "Support & Services",
			features: [
				{
					name: "Premium Support & Onboarding",
					starter: false,
					team: false,
					professional: true,
				},
				{
					name: "AI",
					starter: "Available as add-on",
					team: "Available as add-on",
					professional: "Available as add-on",
				},
			],
		},
	];
</script>

<div class="w-full overflow-x-auto">
	<table class="w-full">
		<thead>
			<tr class="border-b">
				<th class="px-6 py-4 text-left font-medium">Features</th>
				<th class="px-6 py-4 text-center font-medium">Starter</th>
				<th class="px-6 py-4 text-center font-medium">Team</th>
				<th class="px-6 py-4 text-center font-medium">Professional</th>
			</tr>
		</thead>
		<tbody>
			{#each featureGroups as group}
				<tr class="border-b bg-muted/50">
					<td colspan="4" class="px-6 py-4 font-semibold">{group.name}</td>
				</tr>
				{#each group.features as feature}
					<tr class="border-b">
						<td class="px-6 py-4">{feature.name}</td>
						<td class="px-6 py-4 text-center">
							{#if typeof feature.starter === "boolean"}
								{#if feature.starter}
									<Check class="mx-auto h-4 w-4 text-primary" />
								{:else}
									<Minus class="mx-auto h-4 w-4 text-muted-foreground" />
								{/if}
							{:else}
								<span class="text-sm">{feature.starter}</span>
							{/if}
						</td>
						<td class="px-6 py-4 text-center">
							{#if typeof feature.team === "boolean"}
								{#if feature.team}
									<Check class="mx-auto h-4 w-4 text-primary" />
								{:else}
									<Minus class="mx-auto h-4 w-4 text-muted-foreground" />
								{/if}
							{:else}
								<span class="text-sm">{feature.team}</span>
							{/if}
						</td>
						<td class="px-6 py-4 text-center">
							{#if typeof feature.professional === "boolean"}
								{#if feature.professional}
									<Check class="mx-auto h-4 w-4 text-primary" />
								{:else}
									<Minus class="mx-auto h-4 w-4 text-muted-foreground" />
								{/if}
							{:else}
								<span class="text-sm">{feature.professional}</span>
							{/if}
						</td>
					</tr>
				{/each}
			{/each}
		</tbody>
	</table>
</div>
