<script lang="ts">
	import type { PageData } from "./$types.js";
	import { page } from "$app/stores";
	import { DocsPager, TableOfContents } from "$lib/components/docs/index.js";
	import { cn } from "$lib/utils.js";

	export let data: PageData;
	$: doc = data.metadata;
</script>

<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
	<div class="mx-auto w-full min-w-0">
		<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
			<div class="font-medium text-foreground">Productivity</div>
		</div>
		<div class="space-y-2">
			<h1 class={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
				{doc.title}
			</h1>
			{#if doc.description}
				<p class="text-balance text-lg text-muted-foreground">
					{doc.description}
				</p>
			{/if}
		</div>
		<div class="markdown pb-12 pt-8" id="markdown">
			<div class="mt-8 grid gap-4 md:grid-cols-2">
				<div class="rounded-lg border p-4">
					<h3 class="font-semibold">What is soft tech?</h3>
					<p class="mt-1 text-sm text-muted-foreground">
						Understanding the human practices and patterns that make tools valuable.
					</p>
				</div>
				<div class="rounded-lg border p-4">
					<h3 class="font-semibold">Consulting services</h3>
					<p class="mt-1 text-sm text-muted-foreground">
						Help your team develop effective practices for tools like Obsidian and AI.
					</p>
				</div>
			</div>

			<div class="mt-12">
				<h2
					class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
				>
					Why soft tech matters
				</h2>
				<p class="mt-6 leading-7">
					In the world of knowledge work, tools are only as good as how we use them. The
					most powerful software becomes worthless without effective practices, and simple
					tools become transformative when backed by strong patterns of use.
				</p>

				<h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
					Our approach
				</h2>
				<p class="mt-6 leading-7">
					We focus on the intersection of tools and practices, helping knowledge workers
					and teams develop effective ways of working that leverage the best of both human
					and machine capabilities.
				</p>
				<ul class="ml-6 mt-4 list-disc [&>li]:mt-2">
					<li>Build on existing tools and practices</li>
					<li>Focus on patterns that scale</li>
					<li>Maintain data sovereignty</li>
					<li>Enable both individual and team effectiveness</li>
				</ul>

				<h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
					Getting started
				</h2>
				<p class="mt-6 leading-7">
					Whether you're an individual knowledge worker or leading a team, we provide
					resources and guidance to help you develop effective practices:
				</p>
				<ul class="ml-6 mt-4 list-disc [&>li]:mt-2">
					<li>Learn about soft tech patterns and practices</li>
					<li>Explore our guides and case studies</li>
					<li>Try out Relay for collaborative knowledge work</li>
					<li>Get help implementing effective practices</li>
				</ul>
			</div>
		</div>
		<DocsPager />
	</div>
	<div class="hidden text-sm xl:block">
		<div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
			{#key $page.url.pathname}
				<TableOfContents />
			{/key}
		</div>
	</div>
</main>
