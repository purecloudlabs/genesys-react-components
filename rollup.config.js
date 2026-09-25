import { createRequire } from 'module';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

export default {
	input: packageJson.exports.require,
	output: [
		{
			file: packageJson.exports.default,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [peerDepsExternal(), typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs(), postcss()],
};
