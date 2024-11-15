<script lang="ts">
	import { Card } from "$lib/registry/new-york/ui/card/index.js";

	const releases = [
		{
			version: "0.3.4",
			date: "October 24, 2024",
			type: "Beta",
			features: [],
			breaking: false,
		},
		{
			version: "0.3.3",
			date: "October 1, 2024",
			type: "Production",
			features: [
				"A diff/merge interface for integrating changes made to the file on-disk",
				"A folder-wide connection toggle in the file-explorer right-click menu",
				"The Tracking Changes icon now lights up in your vault accent color when the CRDT-database and the file on-disk are in sync",
				"A Relay ribbon icon to take you right to the Relay setting page",
			],
			fixes: [
				"Fixed a race condition that could cause blank notes when a note was missing a CRDT",
				"Untitled relays now have the placeholder text '(Untitled Relay)'",
				"Active connections are now prioritized by which files were opened recently",
				"Various error handling and performance improvements",
			],
			comingUp: [
				"Uploading files in the background when you add a folder to a relay",
				"Downloading files in the background when you add a shared folder to your vault",
				"A new link formatting option that uses the shortest possible link name, or else uses relative paths within shared folders",
			],
			breaking: false,
		},
		{
			version: "0.3.0",
			date: "September 17, 2024",
			type: "Production",
			bugFixes: [
				"No longer crashes when using Make.md",
				"Fixed a login bug on certain catalyst versions of Relay using the Electron 30.x installer",
				"Properly unloads the plugin when you upgrade, which should make upgrades smoother in the future",
				"Avoids a race conditions that would sometimes cause users go get blank notes",
			],
			performance: [
				"Fixed some memory leaks to lower overall memory utilization",
				"Faster startup on production builds",
			],
			breaking: false,
		},
		{
			version: "0.2.16",
			date: "September 16, 2024",
			type: "Beta",
			bugFixes: [
				"Properly unloads the plugin when you upgrade, which should make upgrades smoother in the future",
				"Avoids a race conditions that would sometimes cause users go get blank notes",
			],
			performance: [
				"Fixed some memory leaks to lower overall memory utilization",
				"Faster startup on production builds",
			],
			newFeatures: [
				"Decorate links that point outside of a shared folder (behind feature flag)",
				"Manually resolve edits from disk with new differ tool (behind feature flag)",
				"Upload/Download the entire shared folder contents on first sync (behind feature flag)",
			],
			breaking: false,
		},
		{
			version: "0.2.15",
			date: "August 22, 2024",
			type: "Beta",
			features: [
				"No longer crashes when using Make.md",
				"Fixed a login bug on certain catalyst versions of Relay using the Electron 30.x installer",
			],
			breaking: false,
		},
	];
</script>

<div class="container py-10">
	<div class="mx-auto max-w-[980px]">
		<!-- Header -->
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tighter">Relay releases</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				Release notes and version history. For latest updates and discussions,
				<a href="https://discord.system3.md" class="text-primary hover:underline"
					>join our Discord</a
				>.
			</p>
		</div>

		<!-- Releases -->
		<div class="mt-16 space-y-8">
			{#each releases as release}
				<Card class="p-6">
					<div class="flex items-start justify-between">
						<div>
							<div class="flex items-center gap-3">
								<h2 class="text-2xl font-bold">{release.version}</h2>
								<span class="rounded-full bg-muted px-3 py-1 text-sm">
									{release.type}
								</span>
							</div>
							<p class="text-sm text-muted-foreground">{release.date}</p>
						</div>
						{#if release.breaking}
							<span
								class="rounded-full bg-destructive/10 px-3 py-1 text-sm text-destructive"
							>
								Breaking changes
							</span>
						{/if}
					</div>

					{#if release.type === "Beta"}
						<p class="mt-2 text-sm text-muted-foreground">
							To install this beta release, follow the instructions for BRAT
							installation in our
							<a
								href="https://github.com/No-Instructions/Relay/blob/main/README.md#installing-the-latest-beta-release"
								class="text-primary hover:underline"
							>
								README
							</a>.
						</p>
					{/if}

					<div class="mt-4">
						{#if release.features?.length > 0}
							<h3 class="text-sm font-semibold">Features</h3>
							<ul class="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
								{#each release.features as item}
									<li class="text-sm">{item}</li>
								{/each}
							</ul>
						{/if}

						{#if release.newFeatures?.length > 0}
							<h3 class="mt-4 text-sm font-semibold">New features</h3>
							<ul class="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
								{#each release.newFeatures as item}
									<li class="text-sm">{item}</li>
								{/each}
							</ul>
						{/if}

						{#if release.bugFixes?.length > 0}
							<h3 class="mt-4 text-sm font-semibold">Bug fixes</h3>
							<ul class="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
								{#each release.bugFixes as item}
									<li class="text-sm">{item}</li>
								{/each}
							</ul>
						{/if}

						{#if release.fixes?.length > 0}
							<h3 class="mt-4 text-sm font-semibold">Fixes</h3>
							<ul class="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
								{#each release.fixes as item}
									<li class="text-sm">{item}</li>
								{/each}
							</ul>
						{/if}

						{#if release.performance?.length > 0}
							<h3 class="mt-4 text-sm font-semibold">Performance</h3>
							<ul class="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
								{#each release.performance as item}
									<li class="text-sm">{item}</li>
								{/each}
							</ul>
						{/if}

						{#if release.comingUp?.length > 0}
							<h3 class="mt-4 text-sm font-semibold">Coming up</h3>
							<ul class="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
								{#each release.comingUp as item}
									<li class="text-sm">{item}</li>
								{/each}
							</ul>
						{/if}
					</div>
				</Card>
			{/each}
		</div>

		<!-- Footer -->
		<div class="mt-16 rounded-lg bg-muted p-4 text-center text-sm">
			<p>
				Visit our <a
					href="https://github.com/No-Instructions/relay"
					class="text-primary hover:underline"
				>
					GitHub repository
				</a> to view the client-side source code.
			</p>
		</div>
	</div>
</div>
