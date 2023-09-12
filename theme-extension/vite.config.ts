import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import shopify from 'vite-plugin-shopify';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		shopify({
			themeRoot: '../extensions/theme-extension',
			entrypointsDir: './src',
			sourceCodeDir: './src',
		}),
		svelte({
			include: ['./src/**/*.svelte'],
			compilerOptions: {
				customElement: true,
			},
		}),
	],
});
