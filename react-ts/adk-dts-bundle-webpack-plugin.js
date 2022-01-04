const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs-extra')
const validateOptions = require('schema-utils')

const configPath = path.resolve('./dist/dts-bundle-config.json')

const schema = {
  type: 'object',
  properties: {
    preferredConfigPath: {
      type: 'string'
    },
    inlinedLibraries: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    allowedTypesLibraries: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    importedLibraries: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    inlineDeclareGlobals: {
      type: 'boolean'
    },
  },
  additionalProperties: false
}

class AdkDtsBundleWebpackPlugin {

  constructor(options = {}) {
    validateOptions(schema, options, 'AdkDtsBundleWebpackPlugin');
    this.options = options
  }

  generateDtdBundleConfig(entries) {
    const {
      preferredConfigPath,
      inlinedLibraries,
      allowedTypesLibraries,
      importedLibraries,
      inlineDeclareGlobals
    } = this.options
    var config = {
      compilationOptions: {
        preferredConfigPath
      },

      entries: Object.keys(entries).map(key => {
        const entry = entries[key]
        return {
          filePath: entry.replace(/\.[\\/]src([\\/].*)(\.tsx?)$/, '.$1.d.ts'),
          outFile: `../build/${key}.d.ts`,
          libraries: {
            inlinedLibraries,
            allowedTypesLibraries,
            importedLibraries
          },
          output: {
            inlineDeclareGlobals
          }
        }
      })
    }
    fs.writeFileSync(configPath, JSON.stringify(config))
    return configPath
  }

  bundleDTS(configPath) {
    const bundler = path.resolve('./node_modules/.bin/dts-bundle-generator' + (process.platform === 'win32' ? '.cmd' : ''))
    const child = spawn(
      bundler,
      [
        '--config',
        configPath,
        '--silent'
      ]
    )

    child.stdout.on('data', (data) => {
      console.log(`child stdout:\n${data}`);
    });

    child.on('error', (err) => {
      console.log('process err', err)
    })

    child.stderr.on('data', (data) => {
      console.error(`child stderr:\n${data}`);
    });
  }

  apply(compiler) {
    const _this = this
    compiler.hooks.done.tap('AdkDtsBundleWebpackPlugin', (stats) => {
      if (!stats.hasErrors()) {
        const configPath = _this.generateDtdBundleConfig(compiler.options.entry)
        _this.bundleDTS(configPath)
      }
    });
  };
}

module.exports = AdkDtsBundleWebpackPlugin

/**
 * Alternate method to use 'dts-bundle-generator'
 */
/*
function bundleDTS(entries, compilationOptions) {
  const dtsBundleGenerator = require('dts-bundle-generator')
  const generatedDts = dtsBundleGenerator.generateDtsBundle(entries, compilationOptions)

  generatedDts.forEach((content, i) => {
    tsc.sys.writeFile(config.entries[i].outFile, content);
  })
}
*/