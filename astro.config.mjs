// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SMC Docs',
			social: {
				discord: 'https://discord.com/invite/cjxQfvmBkD',
				github: 'https://github.com/muhammadanwaystudent/smc-docs',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
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
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
