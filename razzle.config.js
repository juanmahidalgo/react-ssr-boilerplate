const OfflinePlugin = require('offline-plugin');

module.exports = {
  modify(config, env, webpack, options) {
    const appConfig = config;
    const { target, dev } = env;

    if (target === 'web' && !dev) {
      // client production only

      const defaultOptions = {
        excludes: ['**/*.map'],
        updateStrategy: 'changed',
        autoUpdate: true,
        caches: 'all',
        ServiceWorker: {
          events: true,
          entry: './src/sw-handler.js'
        }
      };

      appConfig.plugins = [
        ...appConfig.plugins,
        new OfflinePlugin(Object.assign({}, defaultOptions, options)),
      ];
    }

    return appConfig;
  },
}