<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { FolderTree, Users, Building, Link } from "lucide-svelte";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import PricingTable from "$lib/components/docs/pricing-table/pricing-table.svelte";

	interface Testimonial {
		quote: string;
		author: string;
		date: string;
		theme: "speed" | "education" | "teams" | "ease" | "general";
		context?: string;
	}

	const testimonials: Testimonial[] = [
		{
			quote: "That's so fast. That's actually crazy. Even notion is a real-time platform... it's not nearly this fast.",
			author: "G.S.",
			date: "July 2024",
			theme: "speed",
			context: "First reaction during user testing",
		},
		{
			quote: "I'm quite pleased with the low latency of Relay, and the merge resolver is such a great feature to have as a fallback!",
			author: "G.P.",
			date: "November 2024",
			theme: "speed",
		},
		{
			quote: "It works really well... It does exactly what we needed to do. And it also allows us to work on the same documents, which is very, very beneficial especially when we do meetings.",
			author: "K.T.",
			date: "September 2024",
			theme: "teams",
		},
		{
			quote: "For Obsidian to appeal to teams, that's such a crucial feature... there's so many people that love obsidian and to give them the ability to collaborate is totally worth money.",
			author: "J.H.",
			date: "August 2024",
			theme: "teams",
		},
		{
			quote: "Me and my friends use it to keep track of notes and other things relevant to our project... we just want a centralized place to keep all of our ideas.",
			author: "T.N.",
			date: "November 2024",
			theme: "teams",
		},
		{
			quote: "I've been teaching web development for 7 years and this kind of editor would have been a great tool",
			author: "D.F.",
			date: "August 2024",
			theme: "education",
		},
		{
			quote: "I want to express my gratitude for this wonderful plugin, which makes it much easier for my friends and me to take notes at the university.",
			author: "V.M.",
			date: "October 2024",
			theme: "education",
		},
		{
			quote: "This is really amazing. The things that made relay better: fast sync, good cursor indicator, nice ui/ux.",
			author: "J.G.",
			date: "October 2024",
			theme: "ease",
		},
		{
			quote: "I was considering syncthing for this but your plugin is way easier to set up and works out of the box so the choice was quick.",
			author: "I.G.",
			date: "August 2024",
			theme: "ease",
		},
		{
			quote: "I have wanted multiplayer Obsidian almost as long as I've had it. Trying to edit OneNote files with friends real-time was just terrible, but this is amazing!",
			author: "R.T.",
			date: "August 2024",
			theme: "general",
		},
		{
			quote: "Your plugin is why I have continued to use Obsidian instead of other apps such as Notion.",
			author: "A.H.",
			date: "September 2024",
			theme: "general",
		},
	];

	let isPaused = false;
	$: shuffledTestimonials = [...testimonials].sort(() => Math.random() - 0.5);

	const activeTab = writable(0);
	const activeModelTab = writable(0);
	let tabRefs: HTMLDivElement[] = [];
	let modelTabRefs: HTMLDivElement[] = [];
	let highlightPos = { top: 0, height: 0 };
	let modelHighlightPos = { top: 0, height: 0 };

	function updateHighlight(index: number) {
		const tab = tabRefs[index];
		if (tab) {
			highlightPos = {
				top: tab.offsetTop,
				height: tab.offsetHeight,
			};
		}
	}

	function updateModelHighlight(index: number) {
		const tab = modelTabRefs[index];
		if (tab) {
			modelHighlightPos = {
				top: tab.offsetTop,
				height: tab.offsetHeight,
			};
		}
	}

	onMount(() => {
		setTimeout(() => {
			updateHighlight($activeTab);
			updateModelHighlight($activeModelTab);
		}, 0);
	});

	activeTab.subscribe((value) => {
		updateHighlight(value);
	});

	activeModelTab.subscribe((value) => {
		updateModelHighlight(value);
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
				webm: "/videos/work-together-in-real-time.webm",
				mp4: "/videos/work-together-in-real-time.mp4",
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

	const models = [
		{
			title: "Model 1: The Unified Vault",
			description:
				"Are you a mono-vault kind of person? We are. Now you can have a single vault with all your knowledge, and share exactly what you choose with your team.",
			images: {
				webp: "/images/unified-vault.webp",
				png: "/images/unified-vault.png",
			},
			caption: {
				text: "One vault with selective sharing enables both privacy and collaboration",
			},
		},
		{
			title: "Model 2: The Work Laptop",
			description:
				"Keep work and personal separate? Set up a bridge relay to make shared knowledge available on both machines while maintaining separation where you want it.",
			images: {
				webp: "/images/bridge-relay.webp",
				png: "/images/bridge-relay.png",
			},
			caption: {
				text: "Bridge specific folders between work and personal vaults",
			},
		},
		{
			title: "Model 3: The Power Team",
			description:
				"From temporary project bridges to multi-team knowledge networks, Relay's flexibility lets you build exactly the collaboration system you need.",
			images: {
				webp: "/images/power-team.webp",
				png: "/images/power-team.png",
			},
			caption: {
				text: "Create complex sharing patterns that match your team's needs",
			},
		},
	];

	// Handle Obsidian deep link
	function handleInstallClick(e: MouseEvent) {
		e.preventDefault();
		const obsidianUrl = "obsidian://show-plugin?id=system3-relay";
		window.location.href = obsidianUrl;
		const fallbackTimer = setTimeout(() => {
			if (document.hasFocus()) {
				window.location.href = "/relay";
			}
		}, 1000);
		window.onblur = () => {
			clearTimeout(fallbackTimer);
		};
	}
</script>

<!-- Hero -->
<section class="relative overflow-hidden">
	<div class="container py-24">
		<div class="mx-auto max-w-[780px] text-center">
			<!-- New logo section -->
			<div class="mb-8">
				<img
					src="/images/relay-logo-black.svg"
					alt="Relay"
					class="mx-auto h-16 dark:invert"
				/>
			</div>
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				True multiplayer for Obsidian
			</h1>
			<p class="mt-6 text-xl text-muted-foreground">
				Snappy real-time collab. Smooth async merging.<br />
				Share exactly what you want while maintaining complete control of your vault.
			</p>
			<div class="mt-8 flex justify-center gap-4">
				<Button href="/relay" on:click={handleInstallClick}>Install in Obsidian</Button>
				<Button href="/consulting" variant="secondary">Schedule demo</Button>
			</div>
		</div>
	</div>

	<!-- Product Tour Video -->
	<div class="container mb-24">
		<div class="mx-auto max-w-[1200px]">
			<div class="relative overflow-hidden rounded-lg shadow-lg">
				<iframe
					class="aspect-video w-full"
					src="https://www.youtube.com/embed/Ol6zDF5vrZo"
					title="Relay for Obsidian Product Tour"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto mb-16 max-w-[780px] text-center">
			<h2 class="text-3xl font-bold">What users are saying</h2>
			<p class="mt-4 text-lg text-muted-foreground">Real feedback from teams using Relay</p>
		</div>

		<div class="relative">
			<div
				class="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-secondary/50 via-secondary/50 to-transparent"
			/>
			<div
				class="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-secondary/50 via-secondary/50 to-transparent"
			/>

			<div class="relative overflow-hidden py-4">
				<div
					class="scroll-container flex gap-8"
					class:paused={isPaused}
					on:mouseenter={() => (isPaused = true)}
					on:mouseleave={() => (isPaused = false)}
					role="list"
					aria-label="Testimonials"
				>
					{#each [...shuffledTestimonials, ...shuffledTestimonials] as testimonial}
						<div
							class="w-[400px] flex-shrink-0 rounded-lg border bg-background p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
							role="listitem"
						>
							<p class="italic text-muted-foreground">"{testimonial.quote}"</p>
							<div class="mt-4 border-t pt-4">
								<p class="font-semibold">{testimonial.author}</p>
								<p class="text-sm text-muted-foreground">{testimonial.date}</p>
								{#if testimonial.context}
									<p class="mt-1 text-xs text-muted-foreground">
										{testimonial.context}
									</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Core Features -->
<section class="py-24">
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
					<div class="flex flex-col gap-2" role="tablist">
						{#each features as feature, i}
							<div
								bind:this={tabRefs[i]}
								class="relative w-full cursor-pointer rounded-lg p-6"
								on:mouseenter={() => activeTab.set(i)}
								role="tab"
								tabindex="0"
								aria-selected={$activeTab === i}
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
							role="tabpanel"
							aria-hidden={$activeTab !== i}
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

<!-- Work Models -->
<section class="py-24">
	<div class="container">
		<div class="mx-auto max-w-[1200px]">
			<div class="mb-12 text-center">
				<h2 class="text-3xl font-bold">Bring Obsidian to work</h2>
				<p class="mt-4 text-lg text-muted-foreground">
					The missing piece is here: true multiplayer for you in your various personas
				</p>
			</div>

			<div class="grid gap-12 lg:grid-cols-[400px_1fr]">
				<!-- Model tabs -->
				<div class="relative">
					<!-- Background highlight -->
					<div
						class="absolute left-0 right-0 rounded-lg bg-primary/10 ring-1 ring-primary/25 transition-all duration-200"
						style="top: {modelHighlightPos.top}px; height: {modelHighlightPos.height}px;"
					/>

					<!-- Tabs -->
					<div class="flex flex-col gap-2" role="tablist">
						{#each models as model, i}
							<div
								bind:this={modelTabRefs[i]}
								class="relative w-full cursor-pointer rounded-lg p-6"
								on:mouseenter={() => activeModelTab.set(i)}
								role="tab"
								tabindex="0"
								aria-selected={$activeModelTab === i}
							>
								<h3 class="text-xl font-semibold">{model.title}</h3>
								<p class="mt-2 text-muted-foreground">{model.description}</p>
							</div>
						{/each}
					</div>
				</div>

				<!-- Model visualization -->
				<div class="relative overflow-hidden rounded-lg border bg-background">
					{#each models as model, i}
						<div
							class="absolute inset-0 transition-opacity duration-300"
							style="opacity: {$activeModelTab === i ? '1' : '0'}"
							role="tabpanel"
							aria-hidden={$activeModelTab !== i}
						>
							<div class="p-8 pb-6">
								<picture>
									<source srcset={model.images.webp} type="image/webp" />
									<img
										src={model.images.png}
										alt={model.title}
										class="w-full rounded-lg shadow-lg"
									/>
								</picture>
							</div>
							<p class="px-8 pb-6 text-center text-sm text-muted-foreground">
								{model.caption.text}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Pricing -->
<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto mb-16 max-w-[800px] text-center">
			<h2 class="text-3xl font-semibold">Pricing</h2>
			<p class="mt-4 text-lg text-muted-foreground">Start free, upgrade when ready</p>
		</div>
		<PricingTable />
	</div>
</section>

<!-- Final CTA -->
<section class="py-24 text-center">
	<div class="container">
		<h2 class="text-3xl font-semibold">Try Relay with your team</h2>
		<p class="mt-4 text-lg text-muted-foreground">
			Get started for free, or schedule a demo to learn more
		</p>
		<div class="mt-8 flex justify-center gap-4">
			<Button href="/relay" on:click={handleInstallClick}>Install in Obsidian</Button>
			<Button href="/consulting" variant="secondary">Schedule demo</Button>
		</div>
	</div>
</section>

<style>
	.scroll-container {
		animation: scroll 20s linear infinite;
	}

	.scroll-container.paused {
		animation-play-state: paused;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
