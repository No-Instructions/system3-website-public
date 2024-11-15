import type { PageLoad } from "./$types.js";

export const load: PageLoad = async () => {
	// Load the introduction content
	// We can either load this from a markdown file or return static content
	return {
		metadata: {
			title: "Productivity",
			description:
				"Tools, practices, and patterns for the next generation of knowledge work.",
		},
	};
};
