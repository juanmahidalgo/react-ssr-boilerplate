function serviceWorker(options = {}) {
  if (process.env.NODE_ENV === 'production') {
    const OfflinePluginRuntime = require('offline-plugin/runtime');

    const defaultOptions = {
      caches: 'all',

      onUpdating: () => undefined,
      onInstalled: () => console.log('Service worker installed'),
      // When an update is ready we will tell the new SW to take control immediately.
      onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
      // After the new SW update has been applied we will reload the users page
      // to ensure they are using the latest assets.
      // This only gets run if there were updates available for our cached assets.
      onUpdated: () => window.location.reload(),
      onUpdateFailed: () => undefined
    };

    OfflinePluginRuntime.install(Object.assign({}, defaultOptions, options));
  }
}

module.exports = serviceWorker;