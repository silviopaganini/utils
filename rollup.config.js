import pkg from './package.json'
import babel from 'rollup-plugin-babel'

export default [
  {
    input: 'src/index.js',
    plugins: [
      babel({ presets: ['es2015-rollup'], babelrc: false })
    ],
    output: [
      {
        name: 'futils',
        file: pkg.browser,
        format: 'umd'
      }
    ]
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
