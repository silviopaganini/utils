import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.ts', // Updated to TypeScript input
    plugins: [
      resolve(),
      typescript({
        typescript: require('typescript'),
        tsconfig: "./tsconfig.json", // Explicitly specify the path to your tsconfig
        useTsconfigDeclarationDir: true
      }),
      babel({ presets: ['@babel/preset-env'], babelHelpers: 'bundled' }) // Using the more modern preset
    ],
    output: [
      {
        name: 'futils',
        file: pkg.browser,
        format: 'umd',
        sourcemap: true // Include if you want source maps
      }
    ]
  },
  {
    input: 'src/index.ts',
    plugins: [
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true
      })
    ],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true }, // Include if you want source maps
      { file: pkg.module, format: 'es', sourcemap: true } // Include if you want source maps
    ]
  }
];
