import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { autoNewTabExternalLinks } from "./src/autoNewTabExternalLinks";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	site: "https://thesingletread.substack.com",
	integrations: [mdx(), sitemap(), tailwind(), partytown()],
	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: "localhost:4321",
				},
			],
		],
	},
});
