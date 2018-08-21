import pkg from './package.json'
import babel from 'rollup-plugin-babel'
// import minify from 'rollup-plugin-babel-minify'

export default [
  {
    input: 'src/index.js',
    plugins: [
      babel({ presets: ['es2015-rollup'], babelrc: false })
      // minify({
      //   comments: false
      // })
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
