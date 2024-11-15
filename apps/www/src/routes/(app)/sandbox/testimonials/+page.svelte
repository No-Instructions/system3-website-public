<!-- shadcn-svelte-clone/apps/www/src/routes/(app)/sandbox/testimonials/+page.svelte -->
<script lang="ts">
	import { onMount } from "svelte";

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

	let currentView: "scroll" | "grid" | "themed" = "scroll";
	let isPaused = false;
	$: shuffledTestimonials = [...testimonials].sort(() => Math.random() - 0.5);
</script>

<div class="container py-8">
	<div class="prose">
		<h1>Testimonials sandbox</h1>

		<p>This page is for testing different ways to present user testimonials. Goals:</p>

		<ol>
			<li>Show social proof early in the page</li>
			<li>Highlight key themes: speed, ease of use, team collaboration</li>
			<li>Present testimonials in an engaging way</li>
			<li>Maintain authenticity - avoid marketing speak</li>
		</ol>

		<p>Current focus: testing different layouts and interaction patterns.</p>
	</div>
</div>

<hr class="my-8 border-t" />

<!-- Sandbox Navigation -->
<div class="container py-4">
	<nav class="flex gap-4 text-sm text-muted-foreground">
		<a href="/sandbox/core">Core features</a>
		<span class="font-semibold text-primary">Social proof</span>
		<a href="/sandbox/work">Work</a>
		<a href="/sandbox/how">How it works</a>
		<a href="/sandbox/use-cases">Use cases</a>
	</nav>
</div>

<!-- View Controls -->
<div class="container py-4">
	<div class="flex gap-4">
		<button
			class="rounded-lg border px-4 py-2 {currentView === 'scroll'
				? 'bg-primary text-white'
				: ''}"
			on:click={() => (currentView = "scroll")}
		>
			Scroll view
		</button>
		<button
			class="rounded-lg border px-4 py-2 {currentView === 'grid'
				? 'bg-primary text-white'
				: ''}"
			on:click={() => (currentView = "grid")}
		>
			Grid view
		</button>
		<button
			class="rounded-lg border px-4 py-2 {currentView === 'themed'
				? 'bg-primary text-white'
				: ''}"
			on:click={() => (currentView = "themed")}
		>
			Themed view
		</button>
	</div>
</div>

<!-- Scrolling View -->
{#if currentView === "scroll"}
	<section class="py-12">
		<div class="container relative">
			<div
				class="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background via-background to-transparent"
			/>
			<div
				class="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background via-background to-transparent"
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
							class="w-[400px] flex-shrink-0 rounded-lg border bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
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
	</section>
{/if}

<!-- Grid View -->
{#if currentView === "grid"}
	<section class="py-12">
		<div class="container">
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each testimonials as testimonial}
					<div class="rounded-lg border bg-card p-6 transition-all hover:scale-[1.02]">
						<p class="italic text-muted-foreground">"{testimonial.quote}"</p>
						<div class="mt-4 border-t pt-4">
							<p class="font-semibold">{testimonial.author}</p>
							<p class="text-sm text-muted-foreground">{testimonial.date}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Themed View -->
{#if currentView === "themed"}
	<section class="py-12">
		<div class="container">
			<div class="space-y-16">
				<!-- Speed -->
				<div>
					<h3 class="mb-6 text-xl font-semibold">Lightning fast</h3>
					<div class="grid gap-6 md:grid-cols-2">
						{#each testimonials.filter((t) => t.theme === "speed") as testimonial}
							<div class="rounded-lg border bg-card p-6">
								<p class="italic text-muted-foreground">"{testimonial.quote}"</p>
								<div class="mt-4 border-t pt-4">
									<p class="font-semibold">{testimonial.author}</p>
									<p class="text-sm text-muted-foreground">{testimonial.date}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Teams -->
				<div>
					<h3 class="mb-6 text-xl font-semibold">Perfect for teams</h3>
					<div class="grid gap-6 md:grid-cols-2">
						{#each testimonials.filter((t) => t.theme === "teams") as testimonial}
							<div class="rounded-lg border bg-card p-6">
								<p class="italic text-muted-foreground">"{testimonial.quote}"</p>
								<div class="mt-4 border-t pt-4">
									<p class="font-semibold">{testimonial.author}</p>
									<p class="text-sm text-muted-foreground">{testimonial.date}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	button {
		transition: all 0.2s;
	}

	button:hover {
		background-color: rgb(var(--primary) / 0.1);
	}

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
