import pkg from './package.json'
import minify from 'rollup-plugin-babel-minify'

export default [
  {
    input: 'src/index.js',
    plugins: [
      minify()
    ],
    output: [
      {
        name: 'futils',
        file: pkg.browser,
        format: 'umd'
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
