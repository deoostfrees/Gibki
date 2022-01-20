import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import license from 'rollup-plugin-license'

const pkg = require('./package.json')

const bannerContent = `
  Gibki

  @author ${pkg.author}
  @version ${pkg.version}
  @url ${pkg.homepage}

  ${pkg.license} license`

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
      license({
        banner: {
          content: bannerContent
        }
      })
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
      license({
        banner: {
          content: bannerContent
        }
      })
    ],
    watch: {
      clearScreen: false
    }
  }]
}

export default rollupBuilds
