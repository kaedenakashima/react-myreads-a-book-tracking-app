//const {injectBabelPlugin} = require('react-app-rewired')
// const rootImportConfig= [
//     'root-import',
//     {
//         rootPathPrefix:'~',
//         rootPathSuffix:'src'
//     }
// ]
// module.exports = config => override(rootImportConfig, config)

module.exports = function override(config, env) {
   'root-import',
    {
        rootPathPrefix:'~',
        rootPathSuffix:'src'
    }
    return config;
  }