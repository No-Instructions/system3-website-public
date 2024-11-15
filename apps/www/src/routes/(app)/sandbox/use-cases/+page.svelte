<script lang="ts">
	interface UseCase {
		title: string;
		description: string;
		icon: string; // SVG content
	}

	const useCases: UseCase[] = [
		{
			title: "Teams and startups",
			description: "Collaborate on docs, specs, and knowledge bases",
			icon: `<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Network of connected nodes -->
                    <circle cx="50" cy="20" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>
                    <circle cx="20" cy="60" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>
                    <circle cx="80" cy="60" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>
                    <circle cx="50" cy="80" r="8" class="fill-primary/20 stroke-primary" stroke-width="2"/>

                    <!-- Connecting lines with drawing animation -->
                    <line x1="50" y1="28" x2="20" y2="52" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="50" y1="28" x2="80" y2="52" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="20" y1="60" x2="50" y2="80" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="80" y1="60" x2="50" y2="80" class="stroke-primary animate-draw" stroke-width="2"/>
                </g>
            </svg>`,
		},
		{
			title: "Researchers and writers",
			description: "Share research notes and draft together",
			icon: `<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Stacked papers effect -->
                    <rect x="20" y="40" width="60" height="50" class="fill-primary/10 stroke-primary animate-slide-up" stroke-width="2"/>
                    <rect x="25" y="35" width="60" height="50" class="fill-primary/10 stroke-primary animate-slide-up" stroke-width="2"/>
                    <rect x="30" y="30" width="60" height="50" class="fill-primary/10 stroke-primary animate-slide-up" stroke-width="2"/>

                    <!-- Text lines -->
                    <line x1="40" y1="45" x2="80" y2="45" class="stroke-primary/60 animate-draw" stroke-width="2"/>
                    <line x1="40" y1="55" x2="70" y2="55" class="stroke-primary/60 animate-draw" stroke-width="2"/>
                    <line x1="40" y1="65" x2="75" y2="65" class="stroke-primary/60 animate-draw" stroke-width="2"/>
                </g>
            </svg>`,
		},
		{
			title: "Students",
			description: "Study together and share notes",
			icon: `<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Mind map elements -->
                    <circle cx="50" cy="40" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>
                    <circle cx="30" cy="60" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>
                    <circle cx="70" cy="60" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>
                    <circle cx="50" cy="80" r="5" class="fill-primary/20 stroke-primary animate-pulse" stroke-width="2"/>

                    <!-- Connecting lines -->
                    <line x1="50" y1="45" x2="30" y2="55" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="50" y1="45" x2="70" y2="55" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="30" y1="65" x2="50" y2="75" class="stroke-primary animate-draw" stroke-width="2"/>
                    <line x1="70" y1="65" x2="50" y2="75" class="stroke-primary animate-draw" stroke-width="2"/>
                </g>
            </svg>`,
		},
		{
			title: "TTRPG players",
			description: "Build worlds and play together",
			icon: `<svg width="100" height="100" viewBox="0 0 100 100" class="text-primary">
                <g class="animate-fade-in">
                    <!-- Hexagonal grid -->
                    <path d="M50 20 L70 30 L70 50 L50 60 L30 50 L30 30 Z"
                          class="fill-primary/10 stroke-primary animate-pulse" stroke-width="2"/>
                    <path d="M50 40 L70 50 L70 70 L50 80 L30 70 L30 50 Z"
                          class="fill-primary/10 stroke-primary animate-pulse" stroke-width="2"/>
                    <path d="M70 30 L90 40 L90 60 L70 70 L50 60 L50 40 Z"
                          class="fill-primary/10 stroke-primary animate-pulse" stroke-width="2"/>
                </g>
            </svg>`,
		},
	];
</script>

<div class="container py-8">
	<div class="prose">
		<h1>Use cases sandbox</h1>

		<p>This page experiments with ways to show different use cases for Relay. Goals:</p>

		<ol>
			<li>Help visitors identify their use case</li>
			<li>Show versatility without overwhelming</li>
			<li>Use illustrations that are both abstract and recognizable</li>
			<li>Maintain visual consistency across different cases</li>
		</ol>

		<p>Current approach:</p>
		<ul>
			<li>SVG illustrations with simple animations</li>
			<li>Consistent style using primary brand colors</li>
			<li>Abstract representations that suggest rather than depict</li>
			<li>Hover effects to encourage exploration</li>
		</ul>

		<p>
			Each illustration aims to capture the essence of the use case without being too literal.
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
		<a href="/sandbox/how">How it works</a>
		<span class="font-semibold text-primary">Use cases</span>
	</nav>
</div>

<!-- Use Cases Grid -->
<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto max-w-[780px]">
			<h2 class="mb-16 text-center text-3xl font-semibold">Perfect for</h2>

			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{#each useCases as useCase}
					<div
						class="group rounded-lg border bg-background p-6 transition-all duration-300 hover:bg-primary/5 hover:shadow-lg"
					>
						<!-- Icon with hover effect -->
						<div
							class="mb-4 flex h-24 items-center justify-center transition-transform group-hover:scale-110"
						>
							{@html useCase.icon}
						</div>

						<h3 class="text-lg font-semibold">{useCase.title}</h3>
						<p class="text-sm text-muted-foreground">{useCase.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	.animate-draw {
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
		animation: draw 1.5s ease-out forwards;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	.animate-fade-in {
		opacity: 0;
		animation: fadeIn 0.5s ease-out forwards;
	}

	@keyframes slideUp {
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.animate-slide-up {
		transform: translateY(10px);
		opacity: 0;
		animation: slideUp 0.5s ease-out forwards;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.8;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.6;
		}
	}

	.animate-pulse {
		animation: pulse 2s ease-in-out infinite;
	}
</style>
