<script lang="ts">
	import { fade } from "svelte/transition";

	type Ideal = {
		title: string;
		description: string;
		secondary: string;
		background: string;
	};

	const ideals = [
		{
			title: "Your interest in beauty is not trivial",
			description:
				"Beauty isn't decoration — your feeling of it is the feeling of your soul. We founded this company with the premise that we want to live according to beauty's wishes and demands.",
			secondary: "Honoring our taste and letting it guide our choices.",
			background:
				"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2400&h=1600&fit=crop",
		},
		{
			title: "Care for the soul",
			description:
				"We want to live in a way that nourishes rather than drains the spirit. We build structures to support life, understanding that our role is to serve rather than control.",
			secondary:
				"This means listening deeply, moving at the right pace, and ensuring our work energizes rather than depletes.",
			background:
				"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=2400&h=1600&fit=crop",
		},
		{
			title: "Freedom from capture",
			description:
				"We founded System 3 to create technology that frees rather than traps. Too many of us have experienced the soul-crushing weight of golden handcuffs — in jobs, in tools, in platforms.",
			secondary:
				"This means avoiding venture funding that would force us to exploit users, avoiding product decisions that create lock-in, and maintaining our own freedom to build what's right.",
			background:
				"https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=2400&h=1600&fit=crop",
		},
		{
			title: "Doesn't extrapolate to dystopia",
			description:
				"We choose paths that lead toward life and freedom. When extended to their logical conclusions, our choices should enhance rather than diminish human flourishing.",
			secondary:
				"This guides our decisions about funding, features, and growth — we won't take steps that could evolve into harm.",
			background:
				"https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=2400&h=1600&fit=crop",
		},
		{
			title: "Philosophy in the etymological sense",
			description:
				"We are lovers of wisdom, building from first principles rather than convention. Curiosity to understand the universe is both useful, and it's essential to our nature.",
			secondary:
				"This means diving deep into fundamentals, questioning assumptions, and building tools that enhance genuine understanding.",
			background:
				"https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=2400&h=1600&fit=crop",
		},
	];

	let activeTab = 0;
</script>

<div class="relative">
	<div class="container">
		<div class="grid grid-cols-12">
			<div class="col-span-6 flex flex-col space-y-1">
				{#each ideals as ideal, i}
					<button
						class="group relative w-full rounded-l-lg p-6 text-left transition-all
																															duration-200
																															{activeTab === i ? 'bg-primary/25 shadow-sm ring-1 ring-primary' : 'hover:bg-primary/10'}"
						on:click={() => (activeTab = i)}
					>
						<div class="relative z-10">
							<h3 class="font-semibold">{ideal.title}</h3>
						</div>
					</button>
				{/each}
			</div>

			<div class="relative col-span-6 rounded-r-lg" style="height: 400px;">
				{#each ideals as ideal, i}
					{#if activeTab === i}
						<div class="absolute inset-0" transition:fade={{ duration: 300 }}>
							<div
								class="absolute inset-0"
								style="background-image: url('{ideal.background}'); background-size: cover;"
							/>
							<div class="relative z-10 h-full bg-black/50 p-8">
								<p class="text-lg text-white/90">{ideal.description}</p>
								<p class="mt-4 text-sm text-white/70">{ideal.secondary}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.relative {
		transform: translateZ(0);
	}
</style>
