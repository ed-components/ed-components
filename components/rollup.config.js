import { plugins } from './rollup-config/plugins.js';
import { getModules } from './rollup-config/getModules.js';

let dev = process.env.NODE_ENV === 'local';
// const dev = 'local'
const modules = !dev ? getModules() : [];
export default [
	{
		input: './index.ts',
		output: [
			{
				sourcemap: true,
				format: 'iife',
				dir: 'dist',
				name: 'ed-components'
			},
			{
				sourcemap: true,
				format: 'esm',
				dir: 'dist/esm',
				preserveModules: true
			}
		],
		plugins
	},
	...modules
];