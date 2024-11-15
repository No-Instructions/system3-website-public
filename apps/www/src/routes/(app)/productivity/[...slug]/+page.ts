import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types.js";
import { productivityConfig } from "$lib/config/productivity.js";
import { getDoc } from "$lib/utils.js";

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const { component, metadata } = await getDoc(slug);

		// Get metadata from our config
		const section = findSectionBySlug(slug);

		return {
			metadata: {
				title: section?.title || metadata?.title,
				description: metadata?.description,
			},
			component,
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Could not find ${slug}`);
	}
};

// Helper function to find section metadata from our config
function findSectionBySlug(slug: string) {
	for (const section of productivityConfig.sidebarNav) {
		for (const item of section.items) {
			if (item.href === `/productivity/${slug}`) {
				return item;
			}
			// Check nested items if they exist
			if (item.items) {
				for (const subItem of item.items) {
					if (subItem.href === `/productivity/${slug}`) {
						return subItem;
					}
				}
			}
		}
	}
	return null;
}
