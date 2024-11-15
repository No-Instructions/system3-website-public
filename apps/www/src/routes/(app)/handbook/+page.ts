import type { PageLoad } from "./$types.js";

export const load: PageLoad = async ({ url }) => {
	const modules = import.meta.glob("/src/content/handbook/*.md");
	const pagePath = `/src/content/handbook/index.md`;
	const content = (await modules[pagePath]()) as any;

	return {
		content: content.default,
		metadata: content.metadata,
		url: url.pathname,
	};
};
