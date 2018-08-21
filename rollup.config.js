import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
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
