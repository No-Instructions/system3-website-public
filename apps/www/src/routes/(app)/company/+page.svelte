<script lang="ts">
	import { slide } from "svelte/transition";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
	import { cn } from "$lib/utils.js";
</script>

<!-- Hero -->
<div class="relative">
	<div class="absolute inset-0 z-0">
		<img
			src="/images/danmatt/dan-matt-ferry.webp"
			alt="Dan and Matt on ferry"
			class="h-full w-full object-cover brightness-[0.7]"
		/>
	</div>
	<div class="container relative z-10 py-32">
		<div class="max-w-2xl text-white">
			<h1 class="text-5xl font-bold tracking-tight">Company</h1>
			<p class="mt-6 text-xl text-white/80">
				System 3 is building next-generation productivity tools<br />
				that are good for the soul.
			</p>
			<div class="mt-8">
				<Button href="/relay" variant="secondary">Learn about Relay</Button>
			</div>
		</div>
	</div>
</div>

<!-- Vision -->
<section class="py-24">
	<div class="container">
		<div class="mx-auto max-w-[780px]">
			<h2 class="text-center text-3xl font-bold tracking-tight">Our vision</h2>
			<p class="mt-6 text-center text-xl text-muted-foreground">
				System 3: A third cognitive system that extends human capabilities through the
				integration of personal computing and AI.
			</p>

			<Tabs.Root value="system-3" class="mt-12">
				<div class="rounded-xl bg-secondary/25 p-8">
					<Tabs.List
						class={cn(
							"grid gap-6",
							"grid-cols-1 md:grid-cols-3",
							"!inline-flex !h-auto !bg-transparent !p-0"
						)}
					>
						<Tabs.Trigger
							value="system-1"
							class={cn(
								"rounded-lg border p-6 text-left transition-all",
								"!inline-flex !items-start !justify-start !whitespace-normal !rounded-lg !px-6 !py-6",
								"hover:bg-secondary/30",
								"data-[state=active]:bg-secondary/50 data-[state=active]:shadow-none"
							)}
						>
							<div>
								<h3 class="font-semibold">System 1</h3>
								<p class="mt-2 text-sm text-muted-foreground">
									Fast, intuitive thinking
								</p>
							</div>
						</Tabs.Trigger>

						<Tabs.Trigger
							value="system-2"
							class={cn(
								"rounded-lg border p-6 text-left transition-all",
								"!inline-flex !items-start !justify-start !whitespace-normal !rounded-lg !px-6 !py-6",
								"hover:bg-secondary/30",
								"data-[state=active]:bg-secondary/50 data-[state=active]:shadow-none"
							)}
						>
							<div>
								<h3 class="font-semibold">System 2</h3>
								<p class="mt-2 text-sm text-muted-foreground">
									Slow, methodical thinking
								</p>
							</div>
						</Tabs.Trigger>

						<Tabs.Trigger
							value="system-3"
							class={cn(
								"rounded-lg border-2 border-primary bg-secondary/20 p-6 text-left transition-all",
								"!inline-flex !items-start !justify-start !whitespace-normal !rounded-lg !px-6 !py-6",
								"hover:bg-secondary/30",
								"data-[state=active]:bg-secondary/50 data-[state=active]:shadow-none"
							)}
						>
							<div>
								<h3 class="font-semibold text-primary">System 3</h3>
								<p class="mt-2 text-sm text-muted-foreground">
									Your personal digital extension
								</p>
							</div>
						</Tabs.Trigger>
					</Tabs.List>

					<div class="h-[90px]">
						<Tabs.Content value="system-1" class="mt-8">
							<p class="text-lg text-muted-foreground" transition:slide|local>
								Nobel laureate Daniel Kahneman described System 1: the automatic,
								instinctive system that handles quick reactions and gut feelings.
								It's fast but prone to biases.
							</p>
						</Tabs.Content>

						<Tabs.Content value="system-2" class="mt-8">
							<p class="text-lg text-muted-foreground" transition:slide|local>
								System 2 extends human capabilities beyond other animals: it's the
								deliberate, analytical system that handles complex calculations and
								logical reasoning. It's accurate but demands effort.
							</p>
						</Tabs.Content>

						<Tabs.Content value="system-3" class="mt-8">
							<p class="text-lg text-muted-foreground" transition:slide|local>
								Just as System 2 extends System 1's capabilities, System 3 extends
								both: it combines your personal knowledge library with AI that acts
								as your private research team, ready to extend, connect, and apply
								your thinking.
							</p>
						</Tabs.Content>
					</div>
				</div>
			</Tabs.Root>
		</div>
	</div>
</section>

<!-- Team -->
<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto max-w-[780px]">
			<h2 class="text-center text-3xl font-bold tracking-tight">Who we are</h2>
			<div class="mt-16 grid gap-12 md:grid-cols-2">
				<div class="text-center">
					<img
						src="/images/danmatt/dan-portrait.webp"
						alt="Dan Grossmann-Kavanagh"
						class="mx-auto aspect-square w-64 rounded-full object-cover"
					/>
					<h3 class="mt-6 text-xl font-semibold">Daniel Grossmann-Kavanagh</h3>
					<p class="mt-2 text-muted-foreground">Co-founder, engineering</p>
					<p class="mt-2 text-muted-foreground">Distributed systems and data platforms</p>
					<p class="mt-4 text-sm text-muted-foreground">
						Past: <a href="https://www.planet.com/" class="hover:text-primary"
							>Planet Labs</a
						>,
						<a href="https://www.benchling.com/" class="hover:text-primary">Benchling</a
						>
					</p>
				</div>

				<div class="text-center">
					<img
						src="/images/danmatt/matt-cupcake.webp"
						alt="Matt O'Brien"
						class="mx-auto aspect-square w-64 rounded-full object-cover"
					/>
					<h3 class="mt-6 text-xl font-semibold">Matt O'Brien</h3>
					<p class="mt-2 text-muted-foreground">Co-founder, product</p>
					<p class="mt-2 text-muted-foreground">Product and psychotherapy</p>
					<p class="mt-4 text-sm text-muted-foreground">
						Past: <a href="https://ai.meta.com/" class="hover:text-primary">Meta AI</a>,
						<a href="https://www.lumosity.com/" class="hover:text-primary">Lumosity</a>,
						<a href="https://www.bighealth.com/" class="hover:text-primary"
							>Big Health</a
						>
					</p>
				</div>
			</div>
			<div class="mt-16 text-center">
				<a href="/company/ideals" class="text-primary hover:underline">
					Read about the ideals that shape our work →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Product Theses -->
<section class="py-24" id="product-theses">
	<div class="container">
		<div class="mx-auto max-w-[780px]">
			<h2 class="text-center text-3xl font-bold tracking-tight">Product theses</h2>
			<p class="mb-16 mt-6 text-center text-lg text-muted-foreground">
				We believe next-generation productivity tools<br />
				must embody these three qualities.
			</p>
			<div class="grid gap-8 md:grid-cols-3">
				<div class="rounded-lg p-6 transition-all duration-200 hover:bg-secondary/60">
					<h3 class="text-xl font-semibold">Egocentric</h3>
					<p class="mt-4 text-muted-foreground">
						The cloud era moved your digital life into corporate walled gardens. We're
						moving it back: your digital world should be organized around you. Your data
						in your control, in human- and AI-readable formats, stored where you choose.
					</p>
				</div>

				<div class="rounded-lg p-6 transition-all duration-200 hover:bg-secondary/60">
					<h3 class="text-xl font-semibold">AI-native</h3>
					<p class="mt-4 text-muted-foreground">
						Just as farmers became tractor operators, knowledge workers are becoming AI
						operators. Everyone will be a toolmaker, not just programmers. Products must
						embrace this transformation or become irrelevant.
					</p>
				</div>

				<div class="rounded-lg p-6 transition-all duration-200 hover:bg-secondary/60">
					<h3 class="text-xl font-semibold">Multiplayer</h3>
					<p class="mt-4 text-muted-foreground">
						Thinking is a team sport. From neurons to networks, knowledge work emerges
						from the interaction of agents. AI brings powerful new players to the field.
						Tools must reflect the inherently multiplayer nature of thinking.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Work -->
<section class="border-y bg-secondary/50 py-24">
	<div class="container">
		<div class="mx-auto max-w-[780px]">
			<h2 class="text-center text-3xl font-bold tracking-tight">Our work</h2>
			<div class="mt-16 grid gap-12 md:grid-cols-2">
				<div>
					<h3 class="text-xl font-semibold">Products</h3>
					<p class="mt-4 text-muted-foreground">
						We're building Relay, our first product, to make Obsidian multiplayer while
						respecting personal sovereignty. It's the beginning of our vision for System
						3 — tools that amplify human capability through deep integration of personal
						computing and AI.
					</p>
					<div class="mt-4">
						<Button href="/relay" variant="secondary" class="text-sm">
							Learn about Relay →
						</Button>
					</div>
				</div>
				<div>
					<h3 class="text-xl font-semibold">Consulting</h3>
					<p class="mt-4 text-muted-foreground">
						As we develop new patterns for knowledge work in the AI era, we're opening
						select consulting engagements. We help individuals and teams unlock
						step-change productivity improvements through adoption of next-gen tools and
						practices.
					</p>
					<div class="mt-4">
						<Button href="/consulting" variant="secondary" class="text-sm">
							Learn about consulting →
						</Button>
					</div>
				</div>
			</div>
			<div class="mt-12">
				<img
					src="/images/danmatt/dan-matt-computers-couch.webp"
					alt="Dan and Matt doing some work"
					class="w-full rounded-lg object-cover"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Add connect with us section? -->
