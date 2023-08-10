import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      resolve(),
      typescript({
        typescript: require('typescript'),
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true
      }),
      babel({ presets: ['@babel/preset-env'], babelHelpers: 'bundled' })
    ],
    output: [
      {
        name: 'futils',
        file: pkg.browser,
        format: 'umd',
        sourcemap: true 
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
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
    ]
  }
];
