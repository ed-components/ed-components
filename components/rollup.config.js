import { plugins } from './rollup-config/plugins.js';
import { getModules } from './rollup-config/getModules.js';

let dev = process.env.NODE_ENV === 'local';
// const dev = 'local'
// const modules = !dev ? getModules() : [];
export default [
	{
		input: './dist/index.rollup.js',
		// external: ['micromark', 'micromark-extension-gfm', 'micromark-extension-math', 'micromark-extension-directive'],
		output: [
			{
				sourcemap: true,
				format: 'esm',
				dir: '../_site/js',
				preserveModules: true
			}
		],
		plugins
	},
	// ...modules
];