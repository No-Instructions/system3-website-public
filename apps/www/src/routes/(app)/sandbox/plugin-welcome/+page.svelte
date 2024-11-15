<script lang="ts">
	import { Shield, Lock, Users } from "lucide-svelte";
	let brandVariation = 1;
	let ctaVariation = 1;
	let showInfo = false;

	function toggleInfo() {
		showInfo = !showInfo;
	}
</script>

<div class="test-controls">
	<div class="toggle-section">
		<label>Brand Treatment:</label>
		<div class="toggle-buttons">
			<button class:active={brandVariation === 1} on:click={() => (brandVariation = 1)}>
				Small S3 Prefix
			</button>
			<button class:active={brandVariation === 2} on:click={() => (brandVariation = 2)}>
				Medium S3 Prefix
			</button>
			<button class:active={brandVariation === 3} on:click={() => (brandVariation = 3)}>
				Large S3 Prefix
			</button>
			<button class:active={brandVariation === 4} on:click={() => (brandVariation = 4)}>
				S3 Footer Inline
			</button>
			<button class:active={brandVariation === 5} on:click={() => (brandVariation = 5)}>
				S3 Footer Box
			</button>
			<button class:active={brandVariation === 6} on:click={() => (brandVariation = 6)}>
				Relay by System 3
			</button>
			<button class:active={brandVariation === 7} on:click={() => (brandVariation = 7)}>
				Relay by System 3 (Text Only)
			</button>
			<button class:active={brandVariation === 8} on:click={() => (brandVariation = 8)}>
				Relay by System 3 (Stacked)
			</button>
			<button class:active={brandVariation === 9} on:click={() => (brandVariation = 9)}>
				S3 Footer Split
			</button>
		</div>
	</div>

	<div class="toggle-section">
		<label>Call to Action:</label>
		<div class="toggle-buttons">
			<button class:active={ctaVariation === 1} on:click={() => (ctaVariation = 1)}>
				Full Width Hero
			</button>
			<button class:active={ctaVariation === 2} on:click={() => (ctaVariation = 2)}>
				Action Card
			</button>
			<button class:active={ctaVariation === 3} on:click={() => (ctaVariation = 3)}>
				Clean & Centered
			</button>
			<button class:active={ctaVariation === 4} on:click={() => (ctaVariation = 4)}>
				Modern Minimal
			</button>
			<button class:active={ctaVariation === 5} on:click={() => (ctaVariation = 5)}>
				Confident & Contained
			</button>
		</div>
	</div>
</div>

<div class="obsidian-frame">
	<div class="sidebar" />
	<div class="main-content">
		<div class="welcome-container">
			<!-- Brand Header Variations -->
			<div class="header">
				{#if brandVariation === 6 || brandVariation === 7}
					<div class="brand-lockup endorsement">
						<img src="/images/relay-logo-black.svg" alt="Relay" class="relay-logo" />
						<span class="by-line">
							by
							{#if brandVariation === 6}
								<span class="system3-lockup">
									<svg
										class="system3-icon"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 256 256"
									>
										<rect width="256" height="256" fill="none" />
										<polygon
											points="128,58.72 48,197.28 208,197.28"
											fill="none"
											stroke="currentColor"
											stroke-width="16"
										/>
										<circle cx="128" cy="58.72" r="40" fill="currentColor" />
										<circle cx="48" cy="197.28" r="40" fill="currentColor" />
										<circle cx="208" cy="197.28" r="40" fill="currentColor" />
									</svg>
									System 3
								</span>
							{:else}
								<span class="system3-text">System 3</span>
							{/if}
						</span>
					</div>
				{:else if brandVariation === 8}
					<div class="brand-lockup endorsement stacked">
						<img src="/images/relay-logo-black.svg" alt="Relay" class="relay-logo" />
						<span class="by-line">by System 3</span>
					</div>
				{:else}
					<div class="brand-lockup">
						{#if brandVariation <= 3}
							<svg
								class="system3-icon"
								class:small={brandVariation === 1}
								class:medium={brandVariation === 2}
								class:large={brandVariation === 3}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<rect width="256" height="256" fill="none" />
								<polygon
									points="128,58.72 48,197.28 208,197.28"
									fill="none"
									stroke="currentColor"
									stroke-width="16"
								/>
								<circle cx="128" cy="58.72" r="40" fill="currentColor" />
								<circle cx="48" cy="197.28" r="40" fill="currentColor" />
								<circle cx="208" cy="197.28" r="40" fill="currentColor" />
							</svg>
						{/if}
						<img src="/images/relay-logo-black.svg" alt="Relay" class="relay-logo" />
					</div>
				{/if}
			</div>

			<div class="value-prop">
				<h4>Real-time collaboration in Obsidian</h4>
				<p>
					Share folders with your team, edit together in real time, and keep your
					knowledge library exactly how you want it.
				</p>
			</div>

			<!-- CTA Variations -->
			<div class="login-section" class:card={ctaVariation === 2}>
				{#if ctaVariation === 2}
					<p class="cta-heading">Ready to collaborate?</p>
				{:else if ctaVariation === 5}
					<p class="cta-heading">Get started</p>
				{/if}

				<button
					class="google-button"
					class:full-width={ctaVariation === 1}
					class:clean={ctaVariation === 3}
					class:minimal={ctaVariation === 4}
					class:confident={ctaVariation === 5}
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
						alt=""
						class="google-icon"
					/>
					{ctaVariation === 5 ? "Continue with Google" : "Sign in with Google"}
					{#if ctaVariation === 2}
						<span class="arrow">→</span>
					{/if}
				</button>

				<button class="why-signin-button" on:click={toggleInfo}>
					Why sign in with Google?
				</button>

				{#if showInfo}
					<div class="info-section">
						<div class="info-cards">
							<div class="info-card">
								<Shield class="icon" />
								<div>
									<h4>Why do I need an account?</h4>
									<p>
										Your account securely connects your vault to our relay
										server, enabling real-time collaboration while maintaining
										your data sovereignty.
									</p>
								</div>
							</div>

							<div class="info-card">
								<Lock class="icon" />
								<div>
									<h4>Why Google sign-in?</h4>
									<p>
										We use Google for secure authentication and to prevent spam.
										More sign-in options coming soon – let us know your
										preferences in our Discord.
									</p>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>

			{#if !brandVariation === 9}
				<div class="community">
					<a href="https://discord.system3.md" class="footer-link">
						<img
							src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
							alt=""
							class="discord-icon"
						/>
						Join the project
					</a>
				</div>
			{/if}

			<!-- Footer Brand Variations -->
			{#if brandVariation === 4}
				<div class="system3-footer-inline">
					<div class="system3-inline-lockup">
						<svg
							class="system3-icon-footer"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
						>
							<rect width="256" height="256" fill="none" />
							<polygon
								points="128,58.72 48,197.28 208,197.28"
								fill="none"
								stroke="currentColor"
								stroke-width="16"
							/>
							<circle cx="128" cy="58.72" r="40" fill="#e74c3c" />
							<circle cx="48" cy="197.28" r="40" fill="#3498db" />
							<circle cx="208" cy="197.28" r="40" fill="#2ecc71" />
						</svg>
						<strong>System 3:</strong>
						<span class="system3-tagline">
							Local-first collaboration tools for knowledge workers and teams
						</span>
					</div>
				</div>
			{:else if brandVariation === 5}
				<div class="system3-footer-box">
					<div class="system3-box-lockup">
						<div class="system3-brand">
							<svg
								class="system3-icon-footer"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
							>
								<rect width="256" height="256" fill="none" />
								<polygon
									points="128,58.72 48,197.28 208,197.28"
									fill="none"
									stroke="currentColor"
									stroke-width="16"
								/>
								<circle cx="128" cy="58.72" r="40" fill="#e74c3c" />
								<circle cx="48" cy="197.28" r="40" fill="#3498db" />
								<circle cx="208" cy="197.28" r="40" fill="#2ecc71" />
							</svg>
							<strong>System 3</strong>
						</div>
						<p class="system3-tagline">
							Local-first collaboration tools for knowledge workers and teams
						</p>
					</div>
				</div>
			{:else if brandVariation === 9}
				<div class="system3-footer-split">
					<div class="footer-content">
						<div class="left-side">
							<img
								src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
								alt=""
								class="discord-icon"
							/>
							Join the project
						</div>
						<div class="separator">|</div>
						<div class="right-side">
							<div class="system3-brand-split">
								<svg
									class="system3-icon-footer"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 256"
								>
									<rect width="256" height="256" fill="none" />
									<polygon
										points="128,58.72 48,197.28 208,197.28"
										fill="none"
										stroke="currentColor"
										stroke-width="16"
									/>
									<circle cx="128" cy="58.72" r="40" fill="currentColor" />
									<circle cx="48" cy="197.28" r="40" fill="currentColor" />
									<circle cx="208" cy="197.28" r="40" fill="currentColor" />
								</svg>
								System 3
								<div class="tagline">
									Local-first collaboration tools for knowledge workers and teams
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.test-controls {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 24px;
	}

	.toggle-section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.toggle-section label {
		font-weight: 500;
		font-size: 14px;
		color: #666;
	}

	.toggle-buttons {
		display: flex;
		gap: 8px;
	}

	.toggle-buttons button {
		padding: 8px 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		background: white;
		cursor: pointer;
	}

	.toggle-buttons button.active {
		background: #eee;
		border-color: #999;
	}

	.obsidian-frame {
		width: 900px;
		height: 600px;
		margin: 2rem auto;
		border: 1px solid #ccc;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		display: flex;
		background: white;
		overflow: hidden;
	}

	.sidebar {
		width: 240px;
		background: #f5f6f8;
		border-right: 1px solid #ddd;
	}

	.main-content {
		flex: 1;
		padding: 24px;
		overflow-y: auto;
		display: flex;
		justify-content: center;
	}

	.welcome-container {
		max-width: 500px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		margin-bottom: 24px;
	}

	.brand-lockup {
		display: flex;
		align-items: center;
		gap: 12px;
		justify-content: center;
	}

	.brand-lockup.endorsement .by-line {
		color: var(--text-muted);
		opacity: 0.4;
		font-size: 12px;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.brand-lockup.endorsement.stacked {
		flex-direction: column;
		gap: 4px;
	}

	.brand-lockup.endorsement.stacked .by-line {
		color: var(--text-muted);
		opacity: 0.4;
		font-size: 12px;
	}

	.relay-logo {
		height: 32px;
		width: auto;
	}

	.system3-icon {
		color: var(--text-muted);
	}

	.system3-lockup .system3-icon {
		width: 14px;
		height: 14px;
	}

	.system3-icon.small {
		width: 16px;
		height: 16px;
		opacity: 0.4;
	}

	.system3-icon.medium {
		width: 24px;
		height: 24px;
	}

	.system3-icon.large {
		width: 32px;
		height: 32px;
		opacity: 1;
	}

	.value-prop {
		margin-bottom: 24px;
	}

	.value-prop h4 {
		margin: 0 0 8px 0;
		font-size: 14px;
		font-weight: 600;
	}

	.value-prop p {
		color: var(--text-muted);
		margin: 0;
		font-size: 13px;
		line-height: 1.5;
	}

	.login-section {
		margin-bottom: 0px;
	}

	.login-section.card {
		background: #f8f9fa;
		padding: 24px;
		border-radius: 8px;
		text-align: center;
	}

	.cta-heading {
		font-size: 16px;
		font-weight: 600;
		margin: 0 0 16px 0;
	}

	.google-button {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		background: white;
		color: #757575;
		border-radius: 4px;
		border: 1px solid #dadce0;
		cursor: pointer;
		transition: all 0.2s;
		font-size: 14px;
		font-family: "Roboto", sans-serif;
		margin: 0 auto;
	}

	.google-button:hover {
		background: #f8f9fa;
		border-color: #dadce0;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.google-button.full-width {
		width: 100%;
		padding: 12px;
		justify-content: center;
		background: var(--text-accent);
		color: white;
		font-weight: 500;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.google-button.full-width:hover {
		background: var(--text-accent-hover);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transform: translateY(-1px);
	}

	.google-button.clean {
		padding: 16px 32px;
		font-size: 16px;
		font-weight: 500;
	}

	.google-button.minimal {
		background: black;
		color: white;
		border: none;
		padding: 16px 32px;
		border-radius: 8px;
	}

	.google-button.minimal:hover {
		background: #222;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.google-button.confident {
		background: var(--text-accent);
		color: white;
		border: none;
		font-weight: 500;
	}

	.arrow {
		margin-left: 4px;
	}

	.google-icon {
		width: 18px;
		height: 18px;
	}

	.why-signin-button {
		margin-top: 8px;
		background: none;
		border: none;
		color: var(--text-accent);
		font-size: 13px;
		cursor: pointer;
		text-decoration: underline;
		padding: 0;
		display: block;
		margin: 8px auto 0;
	}

	.why-signin-button:hover {
		color: var(--text-accent-hover);
	}

	/* Footer variations */
	.system3-footer-inline {
		margin-top: 2px;
		padding-top: 16px;
		border-top: 1px solid var(--background-modifier-border);
	}

	.system3-inline-lockup {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		color: var(--text-muted);
		justify-content: center;
	}

	.system3-footer-box {
		margin-top: 2px;
		padding-top: 16px;
		border-top: 1px solid var(--background-modifier-border);
	}

	.system3-box-lockup {
		padding: 12px;
		border: 1px solid var(--background-modifier-border);
		border-radius: 6px;
		background: var(--background-secondary);
		text-align: center;
	}

	.system3-brand {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 4px;
		justify-content: center;
	}

	.system3-footer-split {
		margin-top: 22px;
		padding-top: 16px;
		border-top: 1px solid var(--text-muted);
		width: 100%;
	}

	.system3-footer-split .footer-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		color: var(--text-muted);
		font-size: 13px;
	}

	.system3-footer-split .left-side {
		display: flex;
		align-items: center;
		gap: 6px;
		cursor: pointer;
	}

	.system3-footer-split .separator {
		color: var(--text-muted);
		opacity: 0.5;
	}

	.system3-footer-split .right-side {
		display: flex;
		align-items: center;
	}

	.system3-brand-split {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.system3-brand-split .tagline {
		margin-left: 6px;
		font-size: 12px;
	}

	.system3-icon-footer {
		width: 14px;
		height: 14px;
	}

	.system3-tagline {
		color: var(--text-muted);
		font-size: 12px;
		margin: 0;
		line-height: 1.4;
	}

	.community {
		margin-top: 22px;
		padding-top: 16px;
		border-top: 1px solid var(--background-modifier-border);
		display: flex;
		justify-content: center;
	}

	.footer-link {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--text-muted);
		font-size: 13px;
		text-decoration: none;
	}

	.footer-link:hover {
		color: var(--text-normal);
	}

	.discord-icon {
		width: 16px;
		height: 16px;
	}

	.info-section {
		margin-top: 16px;
	}

	.info-cards {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.info-card {
		display: flex;
		gap: 12px;
		padding: 12px;
		background: var(--background-secondary-alt);
		border-radius: 6px;
		text-align: left;
	}

	.info-card h4 {
		margin: 0 0 4px 0;
		font-size: 13px;
		font-weight: 600;
	}

	.info-card p {
		margin: 0;
		color: var(--text-muted);
		font-size: 12px;
	}

	.icon {
		flex-shrink: 0;
		width: 16px;
		height: 16px;
		color: var(--text-muted);
	}
</style>
