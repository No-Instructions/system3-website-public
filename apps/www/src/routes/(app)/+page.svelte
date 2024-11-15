<script lang="ts">
	import {
		Bot,
		Brain,
		Cpu,
		FolderTree,
		RefreshCw,
		Shield,
		Sparkle,
		Users,
		Zap,
	} from "lucide-svelte";
	import { buttonVariants } from "$lib/registry/new-york/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import * as PageHeader from "$lib/components/docs/page-header/index.js";
	import { Announcement } from "$lib/components/docs/index.js";
	import PricingTable from "$lib/components/docs/pricing-table/pricing-table.svelte";

	function handleRelayClick(e: MouseEvent) {
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

<div class="container py-12">
	<PageHeader.Root>
		<Announcement>
			🆕 Just Released: Relay 0.3.5 with Universal File Sync — Share any file type in your
			vault
		</Announcement>
		<PageHeader.Heading>Think together in Obsidian</PageHeader.Heading>
		<PageHeader.Description class="text-muted-foreground">
			🛰️ Relay brings Obsidian to life for your team.
			<p></p>
			Local-first. Private. Autonomy over your data.
		</PageHeader.Description>
		<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<a href="/relay" on:click={handleRelayClick} class={cn(buttonVariants())}>
				Install Relay in Obsidian
			</a>
			<a href="/relay" class={cn(buttonVariants({ variant: "secondary" }))}>Learn more</a>
		</div>
	</PageHeader.Root>
</div>

<section class="py-6">
	<div class="container">
		<div class="mx-auto max-w-[1200px]">
			<video autoplay loop muted playsinline class="w-full rounded-lg shadow-lg">
				<source src="/videos/think-together-demo-2024-06-28.webm" type="video/webm" />
				<source src="/videos/think-together-demo-2024-06-28.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
</section>

<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<div>
				<h2 class="text-3xl font-bold">True local-first collaboration</h2>
				<p class="mt-4 text-lg text-muted-foreground">
					Keep one vault to rule them all. Share exactly what you want, while maintaining
					complete control of your personal knowledge system.
				</p>

				<div class="mt-8 space-y-6">
					<div class="flex items-start gap-4">
						<div
							class="rounded-lg bg-primary/10 p-2 transition-all duration-200 hover:scale-110 hover:bg-primary/20"
						>
							<FolderTree class="h-6 w-6" />
						</div>
						<div>
							<h3 class="text-xl font-semibold">Share folders, not vaults</h3>
							<p class="mt-2 text-muted-foreground">
								Share specific folders while keeping your personal notes private.
								Keep your knowledge organized exactly how you want.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div
							class="rounded-lg bg-primary/10 p-2 transition-all duration-200 hover:scale-110 hover:bg-primary/20"
						>
							<Zap class="h-6 w-6" />
						</div>
						<div>
							<h3 class="text-xl font-semibold">Built for speed</h3>
							<p class="mt-2 text-muted-foreground">
								Real-time collaboration with live cursors. Snappy, responsive, and
								conflict-free even with multiple people working simultaneously.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div
							class="rounded-lg bg-primary/10 p-2 transition-all duration-200 hover:scale-110 hover:bg-primary/20"
						>
							<RefreshCw class="h-6 w-6" />
						</div>
						<div>
							<h3 class="text-xl font-semibold">Work online or off</h3>
							<p class="mt-2 text-muted-foreground">
								Edit offline, sync when you're back. CRDT technology ensures smooth
								merging without conflicts.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="space-y-8">
				<div class="aspect-video overflow-hidden rounded-lg bg-accent/30">
					<img
						src="https://camo.githubusercontent.com/7d2c121b0d7a1e478addb1ab47757578faae5186b3ba50e984c8ecdc83505a50/68747470733a2f2f662e73797374656d332e6d642f63646e2d6367692f696d6167652f666f726d61743d6175746f2f637265617465253230612532306e657725323072656c61792e676966"
						alt="Relay demo"
						class="h-full w-full object-cover"
					/>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div
						class="rounded-lg border bg-card p-6 transition-all duration-200 hover:scale-105 hover:bg-accent/10 hover:shadow-lg"
					>
						<p class="italic text-muted-foreground">
							"This is really amazing... things that made Relay better: fast sync,
							good cursor indicator, nice ui/ux."
						</p>
						<div class="mt-4 border-t pt-4">
							<p class="font-semibold">J.G.</p>
							<p class="text-sm text-muted-foreground">October 2024</p>
						</div>
					</div>

					<div
						class="rounded-lg border bg-card p-6 transition-all duration-200 hover:scale-105 hover:bg-accent/10 hover:shadow-lg"
					>
						<p class="italic text-muted-foreground">
							"That's so fast. That's actually crazy. Even though notion is a
							real-time platform... it's not nearly this fast."
						</p>
						<div class="mt-4 border-t pt-4">
							<p class="font-semibold">G.S.</p>
							<p class="text-sm text-muted-foreground">July 2024</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-24">
	<div class="container">
		<div class="mb-16 text-center">
			<h2 class="text-3xl font-bold">What guides us</h2>
			<p class="mt-4 text-lg text-muted-foreground">
				Three core beliefs about knowledge work that shape everything we build
			</p>
		</div>

		<div class="grid gap-16 lg:grid-cols-3">
			<div>
				<div
					class="overflow-hidden rounded-lg border transition-all duration-300 hover:scale-[1.03] hover:bg-primary/15 hover:shadow-xl"
				>
					<div class="bg-primary/10 p-6">
						<div class="mb-6 flex justify-center">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 p-3"
							>
								<Shield class="h-6 w-6" />
							</div>
						</div>
						<h3 class="mb-4 text-center text-xl font-semibold">
							Individual sovereignty
						</h3>
						<p class="text-muted-foreground">
							Your knowledge belongs to you. We build tools that respect this — local
							files, open formats, your control. No lock-in, no corporate capture.
						</p>
						<p class="text-muted-foreground">&nbsp;</p>
					</div>
					<div class="border-t bg-muted/50 p-4">
						<div class="text-sm text-muted-foreground">
							<span class="font-semibold">vs. Cloud Era:</span> Your data locked in corporate
							platforms
						</div>
					</div>
				</div>
			</div>

			<div>
				<div
					class="overflow-hidden rounded-lg border transition-all duration-300 hover:scale-[1.03] hover:bg-primary/15 hover:shadow-xl"
				>
					<div class="bg-primary/10 p-6">
						<div class="mb-6 flex justify-center">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 p-3"
							>
								<Sparkle class="h-6 w-6" />
							</div>
						</div>
						<h3 class="mb-4 text-center text-xl font-semibold">AI-native</h3>
						<p class="text-muted-foreground">
							AI is becoming like electricity — a basic utility for knowledge work. We
							build for a world where humans and machines think together naturally.
						</p>
					</div>
					<div class="border-t bg-muted/50 p-4">
						<div class="text-sm text-muted-foreground">
							<span class="font-semibold">vs. Current Tools:</span> AI features bolted
							onto old designs
						</div>
					</div>
				</div>
			</div>

			<div>
				<div
					class="overflow-hidden rounded-lg border transition-all duration-300 hover:scale-[1.03] hover:bg-primary/15 hover:shadow-xl"
				>
					<div class="bg-primary/10 p-6">
						<div class="mb-6 flex justify-center">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 p-3"
							>
								<Users class="h-6 w-6" />
							</div>
						</div>
						<h3 class="mb-4 text-center text-xl font-semibold">Multi-agent</h3>
						<p class="text-muted-foreground">
							Thinking happens at many levels — solo reflection, team discussion, AI
							input. We build for fluid interaction between all kinds of agents.
						</p>
					</div>
					<div class="border-t bg-muted/50 p-4">
						<div class="text-sm text-muted-foreground">
							<span class="font-semibold">vs. Traditional Tools:</span> Built only for
							human-to-human
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto mb-16 max-w-[800px] text-center">
			<h2 class="text-3xl font-bold">Pricing</h2>
			<p class="mt-4 text-lg text-muted-foreground">Start free, upgrade when ready.</p>
		</div>
		<PricingTable />
	</div>
</section>

<section class="border-y py-24 text-center">
	<div class="container">
		<h2 class="text-3xl font-bold">Try Relay with your team</h2>
		<p class="mt-4 text-lg text-muted-foreground">
			Get started for free, or schedule a demo to learn more
		</p>
		<div class="mt-8 flex justify-center gap-4">
			<a href="/relay" on:click={handleRelayClick} class={cn(buttonVariants())}>
				Install Relay in Obsidian
			</a>
			<a href="/consulting" class={cn(buttonVariants({ variant: "secondary" }))}>
				Schedule demo
			</a>
		</div>
	</div>
</section>
