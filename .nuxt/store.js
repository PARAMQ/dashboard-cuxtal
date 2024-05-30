import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('../store/index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('../store/modules/adscriptions.js'), 'modules/adscriptions.js')
  resolveStoreModules(require('../store/modules/apMethod.js'), 'modules/apMethod.js')
  resolveStoreModules(require('../store/modules/apType.js'), 'modules/apType.js')
  resolveStoreModules(require('../store/modules/auth.js'), 'modules/auth.js')
  resolveStoreModules(require('../store/modules/binnacles.js'), 'modules/binnacles.js')
  resolveStoreModules(require('../store/modules/charges.js'), 'modules/charges.js')
  resolveStoreModules(require('../store/modules/complaint.js'), 'modules/complaint.js')
  resolveStoreModules(require('../store/modules/convertDbf.js'), 'modules/convertDbf.js')
  resolveStoreModules(require('../store/modules/coordinates.js'), 'modules/coordinates.js')
  resolveStoreModules(require('../store/modules/coordinations.js'), 'modules/coordinations.js')
  resolveStoreModules(require('../store/modules/deptos.js'), 'modules/deptos.js')
  resolveStoreModules(require('../store/modules/gobLevel.js'), 'modules/gobLevel.js')
  resolveStoreModules(require('../store/modules/ilicitDenounced.js'), 'modules/ilicitDenounced.js')
  resolveStoreModules(require('../store/modules/incidents.js'), 'modules/incidents.js')
  resolveStoreModules(require('../store/modules/legalEntity.js'), 'modules/legalEntity.js')
  resolveStoreModules(require('../store/modules/motiveDescription.js'), 'modules/motiveDescription.js')
  resolveStoreModules(require('../store/modules/operativeZones.js'), 'modules/operativeZones.js')
  resolveStoreModules(require('../store/modules/participants.js'), 'modules/participants.js')
  resolveStoreModules(require('../store/modules/plans.js'), 'modules/plans.js')
  resolveStoreModules(require('../store/modules/requestMotive.js'), 'modules/requestMotive.js')
  resolveStoreModules(require('../store/modules/response.js'), 'modules/response.js')
  resolveStoreModules(require('../store/modules/responseOp.js'), 'modules/responseOp.js')
  resolveStoreModules(require('../store/modules/tablaje.js'), 'modules/tablaje.js')
  resolveStoreModules(require('../store/modules/technicalOp.js'), 'modules/technicalOp.js')
  resolveStoreModules(require('../store/modules/tenure.js'), 'modules/tenure.js')
  resolveStoreModules(require('../store/modules/users.js'), 'modules/users.js')
  resolveStoreModules(require('../store/modules/vegetation.js'), 'modules/vegetation.js')
  resolveStoreModules(require('../store/modules/vehicles.js'), 'modules/vehicles.js')
  resolveStoreModules(require('../store/modules/zones.js'), 'modules/zones.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '../store/index.js',
      '../store/modules/adscriptions.js',
      '../store/modules/apMethod.js',
      '../store/modules/apType.js',
      '../store/modules/auth.js',
      '../store/modules/binnacles.js',
      '../store/modules/charges.js',
      '../store/modules/complaint.js',
      '../store/modules/convertDbf.js',
      '../store/modules/coordinates.js',
      '../store/modules/coordinations.js',
      '../store/modules/deptos.js',
      '../store/modules/gobLevel.js',
      '../store/modules/ilicitDenounced.js',
      '../store/modules/incidents.js',
      '../store/modules/legalEntity.js',
      '../store/modules/motiveDescription.js',
      '../store/modules/operativeZones.js',
      '../store/modules/participants.js',
      '../store/modules/plans.js',
      '../store/modules/requestMotive.js',
      '../store/modules/response.js',
      '../store/modules/responseOp.js',
      '../store/modules/tablaje.js',
      '../store/modules/technicalOp.js',
      '../store/modules/tenure.js',
      '../store/modules/users.js',
      '../store/modules/vegetation.js',
      '../store/modules/vehicles.js',
      '../store/modules/zones.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
