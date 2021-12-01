import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import sass from 'node-sass';

const packageJson = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			postcss({
				extract: false,
				modules: true,
				use: ['sass'],
			}),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			// postcss({
			// 	plugins: [],
			// }),
			// postcss({
			// 	preprocessor: (content, id) =>
			// 		new Promise((resolve, reject) => {
			// 			const result = sass.renderSync({ file: id });
			// 			resolve({ code: result.css.toString() });
			// 		}),
			// 	plugins: [autoprefixer],
			// 	sourceMap: true,
			// 	extract: true,
			// 	extensions: ['.sass', '.css'],
			// }),
		],
	},
	{
		input: 'dist/esm/lib/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		external: [/\.scss$/], // ignore .scss file
		plugins: [dts()],
	},
];
