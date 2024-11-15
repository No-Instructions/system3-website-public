<script lang="ts">
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
</script>

<div class="container py-10">
	<div class="mx-auto max-w-[980px]">
		<div>
			<h1 class="text-3xl font-bold">Privacy Policy</h1>
			<p class="mt-2 text-sm text-muted-foreground">Updated July 17, 2024</p>
		</div>

		<div class="mt-8 space-y-8">
			<div>
				<p class="text-lg">
					System 3 (No Instructions, LLC) collects minimal data to provide Relay services:
				</p>
				<ul class="mt-4 list-disc space-y-2 pl-6">
					<li>Email address, name, and profile photo from Google account</li>
					<li>Authentication timestamps</li>
					<li>Relay names and user associations</li>
				</ul>
				<p class="mt-2">We use this data solely to provide and improve our services.</p>
			</div>

			<div>
				<h2 class="text-xl font-semibold">Plugin Data Collection</h2>
				<p class="mt-2">
					The Relay plugin periodically sends a ping to our servers to check internet
					connectivity. This ping includes the version number of the installed Relay
					plugin. We collect this data anonymously to understand which versions are in
					use, helping us improve the plugin and plan updates. This information is not
					linked to individual users or accounts.
				</p>
			</div>

			<div>
				<h2 class="text-xl font-semibold">Data Sharing</h2>
				<p class="mt-2">We do not share user data with third parties.</p>
			</div>

			<div>
				<h2 class="text-xl font-semibold">Account Deletion</h2>
				<p class="mt-2">Users can delete relays at any time.</p>
				<p>
					To delete your entire account, email
					<a href="mailto:contact@system3.md" class="text-primary hover:underline">
						contact@system3.md
					</a>.
				</p>
			</div>

			<div>
				<h2 class="text-xl font-semibold">Age Requirement</h2>
				<p class="mt-2">Users must be at least 13 years old to use our service.</p>
			</div>

			<div>
				<h2 class="text-xl font-semibold">Contact</h2>
				<p class="mt-2">
					For privacy concerns, contact
					<a href="mailto:contact@system3.md" class="text-primary hover:underline">
						contact@system3.md
					</a>.
				</p>
			</div>

			<div>
				<h2 class="text-xl font-semibold">Updates</h2>
				<p class="mt-2">
					We may update this policy without notification. Check regularly for changes.
				</p>
			</div>
		</div>

		<!-- Contact Button -->
		<div class="mt-12">
			<Button variant="outline" asChild>
				<a href="mailto:contact@system3.md">Contact Us About Privacy</a>
			</Button>
		</div>
	</div>
</div>
