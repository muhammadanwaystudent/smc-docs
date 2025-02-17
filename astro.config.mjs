// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://smcd.cc',
	prefetch: { prefetchAll: true, defaultStrategy: 'load' },
	experimental: { clientPrerender: true },
	integrations: [
		starlight({
			title: 'SMC Dawah',
			social: {
				discord: 'https://discord.com/invite/cjxQfvmBkD',
				github: 'https://github.com/muhammadanwaystudent/smc-docs',
			},
			sidebar: [
				{
					label: 'Sharing Content',
					autogenerate: { directory: 'sharing' },
				},
				{
					label: 'Creating Content',
					autogenerate: { directory: 'creating' },
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
				{
					label: 'Tips',
					autogenerate: { directory: 'tips' },
				},
			],
			customCss: ['./src/styles/global.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: 'noindex, nofollow',
					},
				},
			],
		}),
	],
});
