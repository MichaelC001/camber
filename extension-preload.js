// Chromium 156 gives extensions a `browser` object of its own, without the APIs
// electron-chrome-extensions adds to `chrome` (chrome.windows and others). Extensions
// that call `browser`, like 1Password, crashed on start, so the missing ones are copied
// over. The native ones stay: the library stands in for some of them (storage.sync is
// local storage there), and `browser` stays an ordinary, assignable global.
// Runs after the library's own preload, which electron-chrome-extensions registers first.
const { contextBridge } = require('electron')
if (process.type === 'service-worker' || location.href.startsWith('chrome-extension://')) {
  contextBridge.executeInMainWorld({
    func: () => {
      const b = globalThis.browser
      if (location.protocol !== 'chrome-extension:' || !b || b === globalThis.chrome) return
      for (const k of Object.keys(globalThis.chrome)) if (!(k in b)) b[k] = globalThis.chrome[k]
    },
  })
}
