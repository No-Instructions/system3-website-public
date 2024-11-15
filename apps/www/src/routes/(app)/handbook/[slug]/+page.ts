import { error } from "@sveltejs/kit";

export async function load({ params }: { params: { slug: string } }) {
	try {
		const content = await import(`../../../../content/handbook/${params.slug}.md`);
		return {
			content: content.default,
			metadata: content.metadata,
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
