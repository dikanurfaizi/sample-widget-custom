
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');
const nameUtil = require('name-util');
const storeComponents = require('./adk-components');

function generateBuildEntries(classPrefix, namePrefix, version) {

  const storeLibraries = storeComponents.map(lib => ({
    version,
    name: classPrefix + '--' + lib.type,
    className: nameUtil.toClassName(classPrefix + '--' + lib.type),
    displayName: namePrefix + ' ' + lib.type,
    key: lib.type + '-' + lib.directory,
    ...lib
  }))
  const webpackEntries = {}
  const featureEntries = {}

  const files = glob.sync('./src/features/**/feature.json')

  files.forEach(file => {
    var directory = path.dirname(file)
    var basename = path.basename(directory)
    var type = fs.readJSONSync(file).type
    var wFiles = fs.readdirSync(directory)
    var widget = wFiles.find(f => f.replace(/(\.tsx?)$/, '') === basename)
    var panel = wFiles.find(f => f.replace(/(-panel\.tsx?)$/, '') === basename)
    var entryname = type + '-' + basename
    if (panel) webpackEntries[entryname + '-panel'] = './' + path.relative(process.cwd(), path.resolve(directory, panel))
    if (widget) webpackEntries[entryname] = './' + path.relative(process.cwd(), path.resolve(directory, widget))
    featureEntries[entryname] = './' + path.relative(process.cwd(), path.resolve(file))
  })
  const entryPaths = Object.keys(webpackEntries).map(key => webpackEntries[key])
  storeLibraries
    .filter((entry) => {
      const regex = new RegExp(`[\\\\/]src[\\\\/]features[\\\\/]${entry.directory}[\\\\/]`)
      return !entryPaths.find(file => regex.test(file))
    })
    .forEach(entry => {
      const entrypath = `./src/features/${entry.directory}/index.ts`
      if (fs.existsSync(path.resolve(entrypath))) {
        webpackEntries[entry.type + '-' + entry.directory] = entrypath
        featureEntries[entry.type + '-' + entry.directory] = entrypath
      }
    })
  return {
    webpackEntries,
    featureEntries,
    storeLibraries
  }
}

module.exports = generateBuildEntries