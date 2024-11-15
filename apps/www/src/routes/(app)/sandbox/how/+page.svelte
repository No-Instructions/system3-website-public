<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	// Workflow stages
	const stages = [
		{
			title: "Pull changes",
			icon: "⬇️",
			steps: [
				"Check for updates",
				"Download changes from other clients",
				"Convert to local format",
			],
		},
		{
			title: "Track changes",
			icon: "📝",
			steps: [
				"Local edits converted to CRDT operations",
				"Each keystroke becomes an atomic update",
			],
		},
		{
			title: "Relay updates",
			icon: "🛰️",
			steps: ["Updates sent to relay server", "Server broadcasts to all connected clients"],
		},
		{
			title: "Process updates",
			icon: "✨",
			steps: [
				"Clients receive updates",
				"Changes integrated automatically",
				"Document state updated",
			],
		},
	];

	let currentStage = 0;
	let autoAdvance = true;

	onMount(() => {
		const advanceStage = () => {
			if (!autoAdvance) return;
			currentStage = (currentStage + 1) % stages.length;
			setTimeout(advanceStage, 3000);
		};
		setTimeout(advanceStage, 3000);
	});

	// Animation state for update flow
	let updatePoints: { x: number; y: number; active: boolean }[] = [];

	onMount(() => {
		const addPoint = () => {
			const point = {
				x: Math.random() * 100,
				y: Math.random() * 100,
				active: true,
			};
			updatePoints = [...updatePoints, point];
			setTimeout(() => {
				point.active = false;
				updatePoints = updatePoints;
			}, 1000);
			setTimeout(addPoint, Math.random() * 1000 + 500);
		};
		addPoint();
	});
</script>

<div class="container py-8">
	<div class="prose">
		<h1>How it works sandbox</h1>

		<p>This page experiments with ways to visualize Relay's technical workflow. Goals:</p>

		<ol>
			<li>Show the complete flow from local edit to synchronized state</li>
			<li>Build trust by explaining our technical approach</li>
			<li>Demonstrate why CRDTs matter for collaboration</li>
			<li>Keep it simple enough for non-technical users</li>
		</ol>

		<h3>Current visualization attempts:</h3>
		<ol>
			<li>
				<strong>Stage progression</strong> — Shows the four main stages with animated transitions
			</li>
			<li>
				<strong>Update flow</strong> — Visualizes how changes move through the system
			</li>
		</ol>

		<p>
			Challenge: Balance technical accuracy with accessibility. Should explain enough to build
			trust without overwhelming users with details.
		</p>
	</div>
</div>

<hr class="my-8 border-t" />

<!-- Sandbox Navigation -->
<div class="container py-4">
	<nav class="flex gap-4 text-sm text-muted-foreground">
		<a href="/sandbox/core">Core features</a>
		<a href="/sandbox/testimonials">Social proof</a>
		<a href="/sandbox/work">Work</a>
		<span class="font-semibold text-primary">How it works</span>
		<a href="/sandbox/use-cases">Use cases</a>
	</nav>
</div>

<!-- Controls -->
<div class="container py-4">
	<label class="flex items-center gap-2">
		<input type="checkbox" bind:checked={autoAdvance} />
		Auto-advance stages
	</label>
</div>

<!-- Stage Progression -->
<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto max-w-[780px]">
			<h2 class="mb-16 text-center text-3xl font-semibold">How it works</h2>

			<!-- Stage indicators -->
			<div class="mb-12 flex justify-between">
				{#each stages as stage, i}
					<div
						class="flex flex-col items-center gap-4 transition-all duration-300"
						class:opacity-50={i !== currentStage}
						class:scale-110={i === currentStage}
					>
						<div
							class={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-colors ${
								i === currentStage ? "border-primary bg-primary/10" : "border-muted"
							}`}
						>
							<span class="text-2xl">{stage.icon}</span>
						</div>
						<span class="text-sm font-medium">{stage.title}</span>

						{#if i < stages.length - 1}
							<div
								class="absolute left-[calc(100%+1rem)] top-8 h-0.5 w-8 bg-muted"
							></div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Current stage details -->
			<div class="rounded-lg border bg-background p-8">
				<h3 class="mb-4 text-xl font-semibold">{stages[currentStage].title}</h3>
				<div class="space-y-4">
					{#each stages[currentStage].steps as step}
						<div class="flex items-center gap-3">
							<span class="h-2 w-2 rounded-full bg-primary"></span>
							<span>{step}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Update Flow Visualization -->
<section class="py-24">
	<div class="container">
		<div class="mx-auto max-w-[780px]">
			<h2 class="mb-16 text-center text-3xl font-semibold">See updates flow</h2>

			<div class="relative h-[400px] rounded-lg border bg-background p-8">
				<!-- Satellite -->
				<div class="absolute left-1/2 top-1/4 -translate-x-1/2 transform">
					<div class="relative">
						<span class="text-4xl">🛰️</span>
						<div
							class="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border-4 border-primary/20"
						></div>
					</div>
				</div>

				<!-- Clients -->
				<div class="absolute bottom-0 flex w-full justify-between px-12">
					{#each Array(3) as _, i}
						<div class="relative">
							<span class="text-2xl">💻</span>
							<div
								class="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/10"
							></div>
						</div>
					{/each}
				</div>

				<!-- Update points -->
				{#each updatePoints as point}
					{#if point.active}
						<div
							class="absolute h-2 w-2 rounded-full bg-primary transition-all duration-1000"
							style="left: {point.x}%; top: {point.y}%;"
							in:fade
							out:fade
						></div>
					{/if}
				{/each}

				<!-- Connection lines -->
				<svg class="absolute inset-0 h-full w-full">
					<line
						x1="50%"
						y1="25%"
						x2="20%"
						y2="75%"
						class="stroke-primary/30"
						stroke-width="2"
					/>
					<line
						x1="50%"
						y1="25%"
						x2="50%"
						y2="75%"
						class="stroke-primary/30"
						stroke-width="2"
					/>
					<line
						x1="50%"
						y1="25%"
						x2="80%"
						y2="75%"
						class="stroke-primary/30"
						stroke-width="2"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.5;
		}
	}

	.animate-pulse {
		animation: pulse 2s infinite;
	}
</style>
