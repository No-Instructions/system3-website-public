<script lang="ts">
	import { Heart, MessageCircleHeart } from "lucide-svelte";

	interface GratitudeEntry {
		name: string;
		link?: string;
	}

	interface TestimonialEntry {
		quote: string;
		initials: string;
		theme: "speed" | "education" | "teams" | "general";
		date: string;
	}

	const entries: GratitudeEntry[] = [
		{ name: "Salvador Verduzco" },
		{ name: "Angelo Garetto", link: "https://www.spacebot.ai/" },
		{ name: "Catherine Olsson", link: "https://x.com/catherineols?lang=en" },
		{ name: "Nathaniel Mills" },
		{ name: "Jim Bonfitto", link: "https://beachsidepm.com/" },
		{ name: "Dragon" },
		{ name: "Gabriel Scolari" },
		{ name: "Vaniver", link: "https://x.com/vaniver?lang=en" },
		{ name: "Vienna" },
		{ name: "Nedros Sorden" },
		{ name: "Veronica Tamsitt", link: "https://www.veronicatamsitt.com/" },
		{ name: "Brayden McLean", link: "https://x.com/brayden_mclean?lang=en" },
		{ name: "Joanna Bregan", link: "https://joannabregan.medium.com/" },
		{ name: "Tyler Kemp", link: "https://www.leadrev.ai/team" },
		{ name: "Daniël Barenholz", link: "https://dbarenholz.com/" },
		{ name: "Imed" },
		{ name: "Mike Schmitz", link: "https://practicalpkm.com/" },
		{ name: "Astroflash", link: "https://www.youtube.com/watch?v=Nyj43JZAubc&t=13s" },
		{ name: "R.Thompson" },
		{ name: "Rox" },
		{ name: "Daryl Echeazu" },
		{ name: "Cayden" },
		{ name: "Djyp Forest Fortin", link: "https://djyp.tbnk.ca/" },
		{ name: "Josef Hanifl" },
		{ name: "RyzenFromFire", link: "https://github.com/RyzenFromFire" },
		{ name: "Kaden Wince", link: "https://github.com/K-Wince" },
		{ name: "Yonatan Kremer", link: "https://github.com/yonatankremer" },
		{ name: "Adam Harvey", link: "https://discordapp.com/users/733574078417600513" },
		{ name: "Joscha Gutjahr", link: "https://linklink.ink/" },
		{ name: "Trevor Nichols", link: "https://github.com/tnichols217" },
	];

	const testimonials: TestimonialEntry[] = [
		{
			quote: "That's so fast. That's actually crazy. Even though notion is a real-time platform... it's not nearly this fast.",
			initials: "G.S.",
			theme: "speed",
			date: "2024-07",
		},
		{
			quote: "I've been teaching web development for 7 years and this kind of editor would have been a great tool by then!",
			initials: "D.F.",
			theme: "education",
			date: "2024-08",
		},
		{
			quote: "Your plugin is why I have continued to use Obsidian instead of other apps such as Notion.",
			initials: "A.H.",
			theme: "general",
			date: "2024-09",
		},
		{
			quote: "I'm quite pleased with the low latency of Relay, and the merge resolver is such a great feature to have as a fallback!",
			initials: "G.P.",
			theme: "speed",
			date: "2024-11",
		},
		{
			quote: "It's something that solves a lot of issues for us... It works really well... It does exactly what we needed to do.",
			initials: "K.T.",
			theme: "teams",
			date: "2024-09",
		},
		{
			quote: "I was considering syncthing for this but your plugin is way easier to set up and works out of the box so the choice was quick.",
			initials: "I.G.",
			theme: "general",
			date: "2024-08",
		},
		{
			quote: "Previous options lacked in quality. This is really amazing. The things that made relay better: fast sync, good cursor indicator, nice ui/ux.",
			initials: "J.G.",
			theme: "general",
			date: "2024-10",
		},
		{
			quote: "For Obsidian to appeal to teams, that's such a crucial feature... there's so many people that love obsidian and to give them the ability to collaborate is totally worth money.",
			initials: "J.H.",
			theme: "teams",
			date: "2024-08",
		},
		{
			quote: "I use Relay to teach and establish small team wikis with my colleagues.",
			initials: "O.H.",
			theme: "education",
			date: "2024-10",
		},
		{
			quote: "I have wanted multiplayer Obsidian almost as long as I've had it. Trying to edit OneNote files with friends real-time was just terrible, but this is amazing!",
			initials: "R.T.",
			theme: "teams",
			date: "2024-08",
		},
		{
			quote: "First of all, I want to express my gratitude for this wonderful plugin, which makes it much easier for my friends and me to take notes at the university.",
			initials: "V.M.",
			theme: "education",
			date: "2024-10",
		},
		{
			quote: "Me and my friends use it to keep track of notes and other things relevant to our project... we just want a centralized place to keep all of our ideas.",
			initials: "T.N.",
			theme: "teams",
			date: "2024-11",
		},
		{
			quote: "I'm using Relay and I must say it's the best thing I have ever used. The sync is fast, and I can share my ideas with my friends in an instant.",
			initials: "C.C.",
			theme: "speed",
			date: "2024-11",
		},
	];
</script>

<div class="container py-10">
	<div class="mx-auto max-w-[980px]">
		<div class="text-center">
			<div class="flex justify-center">
				<Heart class="h-12 w-12 text-primary" />
			</div>
			<h1 class="mt-4 text-3xl font-bold">Wall of Gratitude</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				We want to express our gratitude to the people who have generously shared
				<br /> their time and insight to help us do meaningful work.
			</p>
			<p class="mt-2 text-sm text-muted-foreground">Updated November 12, 2024</p>
		</div>

		<div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each entries as entry}
				<div
					class="block rounded-lg border p-4 transition-colors hover:bg-muted/50"
					class:hover:border-primary={entry.link}
					class:cursor-pointer={entry.link}
				>
					{#if entry.link}
						<a
							href={entry.link}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center text-foreground"
						>
							{entry.name}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="ml-1 h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
								/>
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
						</a>
					{:else}
						<span class="flex items-center text-foreground">
							{entry.name}
						</span>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center text-sm text-muted-foreground">
			<p>
				List is not exhaustive, of course. If we forgot you, please let us know at
				<a href="mailto:contact@system3.md" class="text-primary hover:underline">
					contact@system3.md
				</a>
			</p>
		</div>

		<div class="mt-24 text-center">
			<div class="flex justify-center">
				<MessageCircleHeart class="h-12 w-12 text-primary" />
			</div>
			<h2 class="mt-4 text-2xl font-bold">Show us the love</h2>
			<p class="mt-4 text-lg text-muted-foreground">We really appreciate it. ❤️🙏</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			{#each testimonials as testimonial}
				<div class="rounded-lg border p-6 transition-colors hover:bg-muted/50">
					<p class="italic text-muted-foreground">"{testimonial.quote}"</p>
					<div class="mt-4 flex justify-between text-sm">
						<span class="font-medium">{testimonial.initials}</span>
						<span class="text-muted-foreground">{testimonial.date}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
