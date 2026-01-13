import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

const pkg = require('./package.json')

const bannerContent = `
/**
 * Gibki
 *
 * @author ${pkg.author}
 * @version ${pkg.version}
 * @url ${pkg.homepage}
 *
 * ${pkg.license} license
 */`

// Custom plugin to add banner to CSS files
const cssBanner = () => ({
  name: 'css-banner',
  generateBundle(options, bundle) {
    for (const fileName in bundle) {
      const file = bundle[fileName]
      if (file.type === 'asset' && fileName.endsWith('.css')) {
        const banner = `${bannerContent.substring(1)}\n`
        file.source = banner + file.source
      }
    }
  }
})

let rollupBuilds

/**
 * Build CSS
 *
 */
if (process.env.BUILD) {
  rollupBuilds = [{
    input: './scss/gibki.scss',
    output: [
      {
        file: './css/gibki.css'
      }
    ],
    plugins: [
      resolve({
        browser: true
      }),
      commonjs(),
      postcss({
        extract: true
      }),
      cssBanner()
    ],
    watch: {
      clearScreen: false
    }
  },
  {
    input: './scss/gibki.scss',
    output: [
      {
        file: './css/gibki.min.css'
      }
    ],
    plugins: [
      resolve({
        browser: true
      }),
      commonjs(),
      postcss({
        extract: true,
        minimize: true
      }),
      cssBanner()
    ],
    watch: {
      clearScreen: false
    }
  }]
}

export default rollupBuilds
