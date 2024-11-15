<script lang="ts">
	import { Lock, Users } from "lucide-svelte";
	import { Button } from "$lib/registry/new-york/ui/button/index.js";
	import { Card } from "$lib/registry/new-york/ui/card/index.js";
</script>

<div class="container py-10">
	<div class="mx-auto max-w-[980px]">
		<!-- Draft Notice -->
		<div class="mb-8 rounded-lg border-2 border-yellow-500/20 bg-yellow-500/10 p-4">
			<h2 class="text-lg font-semibold text-yellow-500">⚠️ Draft / Aspirational Document</h2>
			<p class="mt-2 text-sm text-muted-foreground">
				This is an aspirational security document that outlines future security goals and
				practices. This is not our current security policy. For our current security
				practices, please see our
				<a href="/security" class="text-primary hover:underline">security page</a>.
			</p>
		</div>

		<!-- Simple, Trust-Building Header -->
		<div>
			<h1 class="text-3xl font-bold">Security at System 3 (Draft)</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				We take the security and privacy of your data seriously. Your notes and files stay
				under your control, and we follow industry best practices to keep your shared
				content secure.
			</p>
		</div>

		<!-- Core Security Principles - For individuals -->
		<div class="mt-12 grid gap-6 md:grid-cols-2">
			<Card class="p-6">
				<Lock class="h-12 w-12 text-primary" />
				<h3 class="mt-4 text-xl font-semibold">Your Data, Your Control</h3>
				<p class="mt-2 text-muted-foreground">
					We only store the data you explicitly choose to share. Your private notes stay
					private, and shared content is encrypted in transit and at rest.
				</p>
			</Card>
			<Card class="p-6">
				<Users class="h-12 w-12 text-primary" />
				<h3 class="mt-4 text-xl font-semibold">Team Access Control</h3>
				<p class="mt-2 text-muted-foreground">
					You control who has access to your shared content. Easily manage team
					permissions and revoke access when needed.
				</p>
			</Card>
		</div>

		<!-- Draft Notice Mid-Page -->
		<div class="my-16 rounded-lg border-2 border-yellow-500/20 bg-yellow-500/10 p-4">
			<h2 class="text-lg font-semibold text-yellow-500">⚠️ Draft / Aspirational Document</h2>
			<p class="mt-2 text-sm text-muted-foreground">
				This is an aspirational security document that outlines future security goals and
				practices. This is not our current security policy. For our current security
				practices, please see our
				<a href="/security" class="text-primary hover:underline">security page</a>.
			</p>
		</div>

		<!-- Business Security Practices -->
		<div class="mt-16">
			<h2 class="text-2xl font-bold">Our Security Practices</h2>
			<div class="mt-8 space-y-8">
				<div>
					<h3 class="text-xl font-semibold">Infrastructure Security</h3>
					<p class="mt-2 text-muted-foreground">
						Our service runs on Google Cloud Platform, benefiting from their
						enterprise-grade security infrastructure. All data is encrypted both in
						transit and at rest using industry-standard protocols.
					</p>
				</div>

				<div>
					<h3 class="text-xl font-semibold">Data Protection</h3>
					<p class="mt-2 text-muted-foreground">
						We implement multiple layers of data protection:
					</p>
					<ul class="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
						<li>Encryption of all data in transit using TLS 1.3</li>
						<li>Regular security updates and patches</li>
						<li>Automated backup procedures with encryption</li>
						<li>Strict access controls and authentication requirements</li>
					</ul>
				</div>

				<div>
					<h3 class="text-xl font-semibold">Access Controls</h3>
					<p class="mt-2 text-muted-foreground">
						We maintain strict access controls including:
					</p>
					<ul class="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
						<li>Multi-factor authentication for system access</li>
						<li>Regular access review and logging</li>
						<li>Role-based access control (RBAC)</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Technical Details for IT Admins -->
		<div class="mt-16">
			<h2 class="text-2xl font-bold">Technical Details</h2>
			<div class="mt-8 space-y-6">
				<div class="rounded-lg bg-muted p-6">
					<h3 class="text-xl font-semibold">Data Storage and Processing</h3>
					<ul class="mt-4 space-y-2 text-muted-foreground">
						<li>• Data hosted on Google Cloud Platform in US regions</li>
						<li>• AES-256 encryption for data at rest</li>
						<li>• TLS 1.3 for all data in transit</li>
						<li>• Regular security audits and penetration testing</li>
					</ul>
				</div>

				<div class="rounded-lg bg-muted p-6">
					<h3 class="text-xl font-semibold">Compliance & Monitoring</h3>
					<ul class="mt-4 space-y-2 text-muted-foreground">
						<li>• Continuous security monitoring and logging</li>
						<li>• Regular backup procedures with encryption</li>
						<li>• Incident response procedures in place</li>
						<li>• Working toward SOC 2 compliance</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Draft Notice Bottom -->
		<div class="my-16 rounded-lg border-2 border-yellow-500/20 bg-yellow-500/10 p-4">
			<h2 class="text-lg font-semibold text-yellow-500">⚠️ Draft / Aspirational Document</h2>
			<p class="mt-2 text-sm text-muted-foreground">
				This is an aspirational security document that outlines future security goals and
				practices. This is not our current security policy. For our current security
				practices, please see our
				<a href="/security" class="text-primary hover:underline">security page</a>.
			</p>
		</div>

		<!-- Contact Section -->
		<div class="mt-16">
			<Card class="p-8">
				<h2 class="text-xl font-semibold">Have Security Questions?</h2>
				<p class="mt-2 text-muted-foreground">
					Our team is happy to provide additional details about our security practices or
					discuss your specific security requirements.
				</p>
				<div class="mt-6">
					<Button variant="outline">
						<a href="mailto:contact@system3.md">Contact Security Team</a>
					</Button>
				</div>
			</Card>
		</div>
	</div>
</div>
