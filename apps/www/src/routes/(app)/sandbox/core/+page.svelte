<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	const activeTab = writable(0);
	let tabRefs: HTMLDivElement[] = [];
	let highlightPos = { top: 0, height: 0 };

	function updateHighlight(index: number) {
		const tab = tabRefs[index];
		if (tab) {
			highlightPos = {
				top: tab.offsetTop,
				height: tab.offsetHeight,
			};
		}
	}

	onMount(() => {
		setTimeout(() => updateHighlight($activeTab), 0);
	});

	activeTab.subscribe((value) => {
		updateHighlight(value);
	});

	const features = [
		{
			title: "Share folders, keep your vault whole",
			description: "Share specific folders while keeping your knowledge library unified.",
			video: {
				webm: "/videos/selective-sharing-demo.webm",
				mp4: "/videos/selective-sharing-demo.mp4",
			},
			caption: {
				text: "Relay running in",
				linkText: "Obsidian",
				link: "https://obsidian.md",
				suffix: ", showing selective folder sharing.",
			},
		},
		{
			title: "Edit the same line at the same time",
			description:
				"Changes are tracked at the keystroke level, not the file level. See how fast updates flow between users — no waiting, no conflicts.",
			video: {
				webm: "/videos/edit-same-line-demo.webm",
				mp4: "/videos/edit-same-line-demo.mp4",
			},
			caption: {
				text: "Relay running in",
				linkText: "Obsidian",
				link: "https://obsidian.md",
				suffix: ", demonstrating real-time collaboration.",
			},
		},
		{
			title: "Work anywhere, smoothly",
			description:
				"Edit online or offline. Updates are processed as atomic operations that can't conflict — they just work.",
			video: {
				webm: "https://zed.dev/img/post/crdts/crdt-concurrent-insertion-part-3.webm",
			},
			caption: {
				text: "CRDT visualization from",
				link: "https://zed.dev/blog/crdts",
				linkText: "Zed",
				suffix: ", the excellent CRDT-based code editor we use to build Relay.",
			},
		},
	];
</script>

<div class="container py-8">
	<div class="prose">
		<h1>Core features sandbox</h1>

		<p>This page is for testing and refining the three core feature demonstrations:</p>

		<ol>
			<li>
				<strong>Same-line editing</strong> — Show real-time collaborative editing with cursor
				presence
			</li>
			<li>
				<strong>Folder sharing</strong> — Visualize how sharing specific folders maintains vault
				integrity
			</li>
			<li>
				<strong>Work anywhere</strong> — Demonstrate conflict-free sync with CRDT visualization
			</li>
		</ol>

		<p>
			Current focus is on making these demonstrations clear and compelling, not on code
			cleanliness.
		</p>
	</div>
</div>

<hr class="my-8 border-t" />

<!-- Sandbox Navigation -->
<div class="container py-4">
	<nav class="flex gap-4 text-sm text-muted-foreground">
		<span class="font-semibold text-primary">Core features</span>
		<a href="/sandbox/testimonials">Social proof</a>
		<a href="/sandbox/work">Work</a>
		<a href="/sandbox/how">How it works</a>
		<a href="/sandbox/use-cases">Use cases</a>
	</nav>
</div>

<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto max-w-[1200px]">
			<div class="mb-12 text-center">
				<h2 class="text-3xl font-bold">Core features</h2>
				<p class="mt-4 text-lg text-muted-foreground">
					Everything you need for seamless collaboration in Obsidian.
				</p>
			</div>

			<div class="grid gap-12 lg:grid-cols-[400px_1fr]">
				<!-- Feature tabs -->
				<div class="relative">
					<!-- Background highlight -->
					<div
						class="absolute left-0 right-0 rounded-lg bg-primary/10 ring-1 ring-primary/25 transition-all duration-200"
						style="top: {highlightPos.top}px; height: {highlightPos.height}px;"
					/>

					<!-- Tabs -->
					<div class="flex flex-col gap-2">
						{#each features as feature, i}
							<div
								bind:this={tabRefs[i]}
								class="relative w-full cursor-pointer rounded-lg p-6"
								on:mouseenter={() => activeTab.set(i)}
							>
								<h3 class="text-xl font-semibold">{feature.title}</h3>
								<p class="mt-2 text-muted-foreground">{feature.description}</p>
							</div>
						{/each}
					</div>
				</div>

				<!-- Feature demo -->
				<div class="relative overflow-hidden rounded-lg border bg-background">
					{#each features as feature, i}
						<div
							class="absolute inset-0 transition-opacity duration-300"
							style="opacity: {$activeTab === i ? '1' : '0'}"
						>
							<div class="p-8 pb-6">
								<video
									autoplay
									loop
									muted
									playsinline
									class="w-full rounded-lg shadow-lg"
								>
									<source src={feature.video.webm} type="video/webm" />
									{#if feature.video.mp4}
										<source src={feature.video.mp4} type="video/mp4" />
									{/if}
									Your browser does not support the video tag.
								</video>
							</div>
							<p class="px-8 pb-6 text-center text-sm text-muted-foreground">
								{feature.caption.text}
								<a
									href={feature.caption.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center underline hover:text-primary"
									aria-label="Zed's CRDT blog post (opens in new tab)"
								>
									{feature.caption.linkText}
									<span class="ml-1">↗</span>
								</a>
								{feature.caption.suffix}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	a:hover {
		color: rgb(var(--primary));
	}
</style>
