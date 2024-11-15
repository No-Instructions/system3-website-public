export const siteConfig = {
	name: "System 3",
	url: "https://system3.md",
	ogImage: "https://system3.md/images/og-image.png",
	description: "Tools for thought that are good for the soul.",
	mainNav: [
		{
			title: "Relay",
			href: "/relay",
			items: [
				{
					title: "Relay overview",
					href: "/relay",
				},
				{
					title: "Roadmap",
					href: "/relay/roadmap",
				},
				{
					title: "Releases",
					href: "/relay/releases",
				},
			],
		},
		{
			title: "Company",
			href: "/company",
			items: [
				{
					title: "About us",
					href: "/company",
				},
				{
					title: "Our ideals",
					href: "/company/ideals",
				},
			],
		},
		{
			title: "Pricing",
			href: "/pricing",
		},
	],
	links: {
		noInstructionsWeb: "https://noinstructions.ai",
		noInstructionsTwitter: "https://x.com/noinstruct",
		relayGithub: "https://github.com/No-Instructions/Relay",
		system3Discord: "https://discord.system3.md",
	},
	keywords: `System 3, Relay, No Instructions, Obsidian, Plugins, Multiplayer, Collaboration`,
};

export type SiteConfig = typeof siteConfig;
