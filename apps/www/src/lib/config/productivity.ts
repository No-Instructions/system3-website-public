import type { NavItem, SidebarNavItem } from "$lib/types/nav.js";

type ProductivityConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

type Example = {
	name: string;
	href: string;
	code: string;
	label?: string;
};

export const examples: Example[] = [
	{
		name: "Mail",
		href: "/examples/mail",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/mail",
	},
];

export const productivityConfig: ProductivityConfig = {
	mainNav: [
		{
			title: "Overview",
			href: "/productivity",
		},
	],
	sidebarNav: [
		{
			title: "Getting started",
			items: [
				{
					title: "Overview",
					href: "/productivity",
					items: [],
				},
				{
					title: "Getting started with soft tech",
					href: "/productivity/getting-started",
					items: [],
				},
			],
		},
		{
			title: "Soft tech",
			items: [
				{
					title: "What is soft tech",
					href: "/productivity/soft-tech/what-is-soft-tech",
					items: [],
				},
				{
					title: "Patterns and practices",
					href: "/productivity/soft-tech/patterns-and-practices",
					items: [],
				},
				{
					title: "Case studies",
					href: "/productivity/soft-tech/case-studies",
					items: [],
				},
			],
		},
		{
			title: "Guides",
			items: [
				{
					title: "Relay basics",
					href: "/productivity/guides/relay-basics",
					items: [],
				},
				{
					title: "Collaboration patterns",
					href: "/productivity/guides/collaboration-patterns",
					items: [],
				},
				{
					title: "Knowledge management",
					href: "/productivity/guides/knowledge-management",
					items: [],
				},
			],
		},
	],
};
