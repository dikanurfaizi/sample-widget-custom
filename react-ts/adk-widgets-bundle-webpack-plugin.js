
const path = require('path')
const fs = require('fs-extra')
const validateOptions = require('schema-utils')

const bundlePath = path.resolve('./dist/features-bundle.json')

const schema = {
  type: 'object',
  properties: {
    featureEntries: {
      type: 'object',
      items: {
        type: 'string'
      }
    },
    defaultEntryJson: {
      type: 'array',
      items: {
        type: 'object',
      },
      properties: {
        type: {
          type: 'string'
        },
        directory: {
          type: 'string'
        },
        version: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        className: {
          type: 'string'
        },
        displayName: {
          type: 'string'
        },
        key: {
          type: 'string'
        }
      }
    }
  },
  additionalProperties: false
}

class AdkWidgetsBundleWebpackPlugin {

  constructor(options = {}) {
    let _options = options.featureBundle ? options.featureBundle : options
    validateOptions(schema, _options,  'AdkWidgetsBundleWebpackPlugin');
    this.options = _options
  }

  apply(compiler) {
    const _this = this
    compiler.hooks.done.tap('AdkWidgetsBundleWebpackPlugin', (stats) => {
      if (!stats.hasErrors()) {
        const __stats = stats.toJson()
        const entrypoints = Object.keys(__stats.entrypoints).reduce((__, key) => {
          const { assets } = __stats.entrypoints[key]
          const lib = assets.pop()
          __[key] = { lib, libName: key, assets }
          return __
        }, {})
        const { featureEntries, defaultEntryJson } = _this.options
        const defaultJson = defaultEntryJson.reduce((_, entry) => {
          const { key,
            version,
            name,
            type,
            className,
            displayName
          } = entry
          _[key] = {
            version,
            name,
            type,
            className,
            displayName
          }
          return _
        }, {})
        const features = Object.keys(featureEntries).map(key => {

          var directory = path.dirname(featureEntries[key])
          const jsonpath = path.resolve(directory, 'feature.json')
          const feature = fs.existsSync(jsonpath) ? fs.readJSONSync(jsonpath) : defaultJson[key]
          if (entrypoints[key]) {
            feature.moduleAssets = entrypoints[key].assets
            feature.modulePath = entrypoints[key].lib
            feature.moduleName = entrypoints[key].libName
          }
          if (entrypoints[key + '-panel']) {
            feature.panelPath = entrypoints[key + '-panel'].lib
            feature.panelAssets = entrypoints[key + '-panel'].assets
          }
          return feature
        })
        fs.writeFile(
          bundlePath,
          JSON.stringify(features),
          (err) => { return })
      }
    });
  };
}

module.exports = AdkWidgetsBundleWebpackPlugin