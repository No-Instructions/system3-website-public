import type { NavItem, SidebarNavItem } from "$lib/types/nav.js";

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const examples = [
	{
		name: "Mail",
		href: "/examples/mail",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/mail",
	},
];

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "TEST LINK",
			href: "/test",
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs/introduction",
					items: [],
				},
				{
					title: "Getting Started with Soft Tech",
					href: "/docs/productivity/getting-started",
					items: [],
				},
			],
		},
		{
			title: "Soft Tech",
			items: [
				{
					title: "What is Soft Tech",
					href: "/docs/productivity/soft-tech/what-is-soft-tech",
					items: [],
				},
				{
					title: "Patterns and Practices",
					href: "/docs/productivity/soft-tech/patterns-and-practices",
					items: [],
				},
				{
					title: "Case Studies",
					href: "/docs/productivity/soft-tech/case-studies",
					items: [],
				},
			],
		},
		{
			title: "Guides",
			items: [
				{
					title: "Relay Basics",
					href: "/docs/productivity/guides/relay-basics",
					items: [],
				},
				{
					title: "Collaboration Patterns",
					href: "/docs/productivity/guides/collaboration-patterns",
					items: [],
				},
				{
					title: "Knowledge Management",
					href: "/docs/productivity/guides/knowledge-management",
					items: [],
				},
			],
		},
	],
};
