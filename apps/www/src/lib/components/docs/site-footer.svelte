<script lang="ts">
	import { siteConfig } from "$lib/config/site.js";
	import { Icons } from "$lib/components/docs/icons/index.js";

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t py-8 md:px-8">
	<div class="container">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
			<!-- Company Description -->
			<div>
				<div class="mb-4 flex items-center gap-2">
					<Icons.logo class="h-8 w-8" />
					<h3 class="text-lg font-semibold">System 3</h3>
				</div>
				<p class="text-sm text-muted-foreground">
					Local-first collaboration tools for knowledge workers and teams.
				</p>
			</div>

			<!-- Product -->
			<div>
				<h3 class="mb-3 text-sm font-semibold">Product</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="/relay" class="text-muted-foreground hover:text-foreground"
							>Relay Overview</a
						>
					</li>
					<li>
						<a href="/relay/roadmap" class="text-muted-foreground hover:text-foreground"
							>Roadmap</a
						>
					</li>
					<li>
						<a href="/pricing" class="text-muted-foreground hover:text-foreground"
							>Pricing</a
						>
					</li>
					<li>
						<a
							href="/relay/releases"
							class="text-muted-foreground hover:text-foreground">Release Notes</a
						>
					</li>
				</ul>
			</div>

			<!-- Community -->
			<div>
				<h3 class="mb-3 text-sm font-semibold">Community</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							href={siteConfig.links.system3Discord}
							class="text-muted-foreground hover:text-foreground"
						>
							Discord
						</a>
					</li>
					<li>
						<a
							href="mailto:contact@system3.md"
							class="text-muted-foreground hover:text-foreground"
						>
							Contact Us
						</a>
					</li>
					<li>
						<a href="/gratitude" class="text-muted-foreground hover:text-foreground">
							Wall of Gratitude
						</a>
					</li>
				</ul>
			</div>

			<!-- Company -->
			<div>
				<h3 class="mb-3 text-sm font-semibold">Company</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="/company" class="text-muted-foreground hover:text-foreground"
							>About Us</a
						>
					</li>
					<li>
						<a
							href="/company/ideals"
							class="text-muted-foreground hover:text-foreground">Our Ideals</a
						>
					</li>
				</ul>
			</div>

			<!-- Legal -->
			<div>
				<h3 class="mb-3 text-sm font-semibold">Legal</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="/privacy" class="text-muted-foreground hover:text-foreground"
							>Privacy Policy</a
						>
					</li>
					<li>
						<a href="/terms" class="text-muted-foreground hover:text-foreground"
							>Terms of Service</a
						>
					</li>
					<li>
						<a href="/security" class="text-muted-foreground hover:text-foreground"
							>Security</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t pt-8">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="text-sm text-muted-foreground">
					© {currentYear} System 3 by
					<a
						href="https://noinstructions.ai"
						target="_blank"
						rel="noreferrer"
						class="hover:text-foreground">No Instructions LLC</a
					>
				</p>
				<div class="flex items-center space-x-4">
					<a
						href={siteConfig.links.system3Discord}
						target="_blank"
						rel="noreferrer"
						class="text-sm text-muted-foreground hover:text-foreground"
					>
						Join the project on Discord
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
