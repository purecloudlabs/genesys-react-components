import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json'; //required for react-syntax-highlighter package in CodeFence.tsx

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
	plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ useTsconfigDeclarationDir: true }), json(), postcss()],
};
