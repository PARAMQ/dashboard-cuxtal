import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e57db22 = () => interopDefault(import('../pages/binnacle.vue' /* webpackChunkName: "pages/binnacle" */))
const _5e232a41 = () => interopDefault(import('../pages/building.vue' /* webpackChunkName: "pages/building" */))
const _f8a6846a = () => interopDefault(import('../pages/calendar.vue' /* webpackChunkName: "pages/calendar" */))
const _98bbc71c = () => interopDefault(import('../pages/forms.vue' /* webpackChunkName: "pages/forms" */))
const _2ea606d0 = () => interopDefault(import('../pages/full-page.vue' /* webpackChunkName: "pages/full-page" */))
const _5ba760ee = () => interopDefault(import('../pages/full-page/error.vue' /* webpackChunkName: "pages/full-page/error" */))
const _17cc172e = () => interopDefault(import('../pages/full-page/error-copy.vue' /* webpackChunkName: "pages/full-page/error-copy" */))
const _78e9b1e2 = () => interopDefault(import('../pages/full-page/lock-screen.vue' /* webpackChunkName: "pages/full-page/lock-screen" */))
const _580dd46a = () => interopDefault(import('../pages/full-page/login.vue' /* webpackChunkName: "pages/full-page/login" */))
const _6e27d1f0 = () => interopDefault(import('../pages/full-page/password-recovery.vue' /* webpackChunkName: "pages/full-page/password-recovery" */))
const _75bda3a8 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _39b64eb2 = () => interopDefault(import('../pages/tables.vue' /* webpackChunkName: "pages/tables" */))
const _d471e738 = () => interopDefault(import('../pages/auth/error-copy.vue' /* webpackChunkName: "pages/auth/error-copy" */))
const _57810e74 = () => interopDefault(import('../pages/auth/lock-screen.vue' /* webpackChunkName: "pages/auth/lock-screen" */))
const _76ca6b8f = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _6f6e1ead = () => interopDefault(import('../pages/auth/password-recovery.vue' /* webpackChunkName: "pages/auth/password-recovery" */))
const _e7a86226 = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _86e99bc4 = () => interopDefault(import('../pages/catalogos/adscriptionsAreas.vue' /* webpackChunkName: "pages/catalogos/adscriptionsAreas" */))
const _4c062ee6 = () => interopDefault(import('../pages/catalogos/applicantType.vue' /* webpackChunkName: "pages/catalogos/applicantType" */))
const _5d7bb2fc = () => interopDefault(import('../pages/catalogos/applicationMethod.vue' /* webpackChunkName: "pages/catalogos/applicationMethod" */))
const _b6eb6ea0 = () => interopDefault(import('../pages/catalogos/charges.vue' /* webpackChunkName: "pages/catalogos/charges" */))
const _3a5e8828 = () => interopDefault(import('../pages/catalogos/coordinates.vue' /* webpackChunkName: "pages/catalogos/coordinates" */))
const _ab2dbeae = () => interopDefault(import('../pages/catalogos/coordinations.vue' /* webpackChunkName: "pages/catalogos/coordinations" */))
const _09bcf0e7 = () => interopDefault(import('../pages/catalogos/departaments.vue' /* webpackChunkName: "pages/catalogos/departaments" */))
const _2f567bba = () => interopDefault(import('../pages/catalogos/gobLevels.vue' /* webpackChunkName: "pages/catalogos/gobLevels" */))
const _02633c7c = () => interopDefault(import('../pages/catalogos/ilicits.vue' /* webpackChunkName: "pages/catalogos/ilicits" */))
const _188a1d6d = () => interopDefault(import('../pages/catalogos/legalEntity.vue' /* webpackChunkName: "pages/catalogos/legalEntity" */))
const _0bd082ad = () => interopDefault(import('../pages/catalogos/legalZones.vue' /* webpackChunkName: "pages/catalogos/legalZones" */))
const _70737147 = () => interopDefault(import('../pages/catalogos/motiveDescription.vue' /* webpackChunkName: "pages/catalogos/motiveDescription" */))
const _1f5a7d22 = () => interopDefault(import('../pages/catalogos/operativeZones.vue' /* webpackChunkName: "pages/catalogos/operativeZones" */))
const _43c0307f = () => interopDefault(import('../pages/catalogos/participants.vue' /* webpackChunkName: "pages/catalogos/participants" */))
const _1c3f4ab4 = () => interopDefault(import('../pages/catalogos/requestMotive.vue' /* webpackChunkName: "pages/catalogos/requestMotive" */))
const _77bb5fc0 = () => interopDefault(import('../pages/catalogos/response.vue' /* webpackChunkName: "pages/catalogos/response" */))
const _d6673634 = () => interopDefault(import('../pages/catalogos/subzones.vue' /* webpackChunkName: "pages/catalogos/subzones" */))
const _6dda0014 = () => interopDefault(import('../pages/catalogos/tablaje.vue' /* webpackChunkName: "pages/catalogos/tablaje" */))
const _161230ca = () => interopDefault(import('../pages/catalogos/tenure.vue' /* webpackChunkName: "pages/catalogos/tenure" */))
const _a55ad35a = () => interopDefault(import('../pages/catalogos/typeLegalEntity.vue' /* webpackChunkName: "pages/catalogos/typeLegalEntity" */))
const _28b8f0fa = () => interopDefault(import('../pages/catalogos/typeResponse.vue' /* webpackChunkName: "pages/catalogos/typeResponse" */))
const _161c01fb = () => interopDefault(import('../pages/catalogos/typeResponseOp.vue' /* webpackChunkName: "pages/catalogos/typeResponseOp" */))
const _17b81839 = () => interopDefault(import('../pages/catalogos/users.vue' /* webpackChunkName: "pages/catalogos/users" */))
const _cbc2ff7e = () => interopDefault(import('../pages/catalogos/vegetationAffected.vue' /* webpackChunkName: "pages/catalogos/vegetationAffected" */))
const _132e40b4 = () => interopDefault(import('../pages/catalogos/vehicles.vue' /* webpackChunkName: "pages/catalogos/vehicles" */))
const _3843ffea = () => interopDefault(import('../pages/client/form.vue' /* webpackChunkName: "pages/client/form" */))
const _36ca3cb4 = () => interopDefault(import('../pages/planification/editPlanification.vue' /* webpackChunkName: "pages/planification/editPlanification" */))
const _83372dc0 = () => interopDefault(import('../pages/tracking/complaint.vue' /* webpackChunkName: "pages/tracking/complaint" */))
const _03e844d9 = () => interopDefault(import('../pages/tracking/concentrado.vue' /* webpackChunkName: "pages/tracking/concentrado" */))
const _71fa473e = () => interopDefault(import('../pages/tracking/concentradoOld.vue' /* webpackChunkName: "pages/tracking/concentradoOld" */))
const _32e4bba3 = () => interopDefault(import('../pages/tracking/programmed.vue' /* webpackChunkName: "pages/tracking/programmed" */))
const _2c40045a = () => interopDefault(import('../pages/tracking/technicalOp.vue' /* webpackChunkName: "pages/tracking/technicalOp" */))
const _36723a7a = () => interopDefault(import('../pages/client/_id.vue' /* webpackChunkName: "pages/client/_id" */))
const _1696af95 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: '/sistema-iv/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/binnacle",
    component: _4e57db22,
    meta: {"name":"Binnacle"},
    name: "binnacle"
  }, {
    path: "/building",
    component: _5e232a41,
    meta: {"name":"Building"},
    name: "building"
  }, {
    path: "/calendar",
    component: _f8a6846a,
    meta: {"name":"Calendar"},
    name: "calendar"
  }, {
    path: "/forms",
    component: _98bbc71c,
    meta: {"name":"Cliente","titleStack":["Cliente"]},
    name: "forms"
  }, {
    path: "/full-page",
    component: _2ea606d0,
    meta: {"name":"FullPage"},
    name: "full-page",
    children: [{
      path: "error",
      component: _5ba760ee,
      meta: {"name":"Error","props":{"isInCard":{"default":true}}},
      name: "full-page-error"
    }, {
      path: "error-copy",
      component: _17cc172e,
      meta: {"name":"ErrorCopy","props":{"isInCard":{"default":false}}},
      name: "full-page-error-copy"
    }, {
      path: "lock-screen",
      component: _78e9b1e2,
      meta: {"name":"LockScreen"},
      name: "full-page-lock-screen"
    }, {
      path: "login",
      component: _580dd46a,
      meta: {"name":"Login"},
      name: "full-page-login"
    }, {
      path: "password-recovery",
      component: _6e27d1f0,
      meta: {"name":"Login"},
      name: "full-page-password-recovery"
    }]
  }, {
    path: "/profile",
    component: _75bda3a8,
    meta: {"name":"Profile"},
    name: "profile"
  }, {
    path: "/tables",
    component: _39b64eb2,
    meta: {"name":"Tables"},
    name: "tables"
  }, {
    path: "/auth/error-copy",
    component: _d471e738,
    meta: {"name":"ErrorCopy","props":{"isInCard":{"default":false}}},
    name: "auth-error-copy"
  }, {
    path: "/auth/lock-screen",
    component: _57810e74,
    meta: {"name":"LockScreen"},
    name: "auth-lock-screen"
  }, {
    path: "/auth/login",
    component: _76ca6b8f,
    meta: {"name":"Login","layout":"full-page"},
    name: "auth-login"
  }, {
    path: "/auth/password-recovery",
    component: _6f6e1ead,
    meta: {"name":"Login"},
    name: "auth-password-recovery"
  }, {
    path: "/auth/register",
    component: _e7a86226,
    meta: {"name":"Login","layout":"full-page"},
    name: "auth-register"
  }, {
    path: "/catalogos/adscriptionsAreas",
    component: _86e99bc4,
    meta: {"name":"AdscriptionsAreas"},
    name: "catalogos-adscriptionsAreas"
  }, {
    path: "/catalogos/applicantType",
    component: _4c062ee6,
    meta: {"name":"GobLevels"},
    name: "catalogos-applicantType"
  }, {
    path: "/catalogos/applicationMethod",
    component: _5d7bb2fc,
    meta: {"name":"AppMethod"},
    name: "catalogos-applicationMethod"
  }, {
    path: "/catalogos/charges",
    component: _b6eb6ea0,
    meta: {"name":"Charges"},
    name: "catalogos-charges"
  }, {
    path: "/catalogos/coordinates",
    component: _3a5e8828,
    meta: {"name":"Coordinates"},
    name: "catalogos-coordinates"
  }, {
    path: "/catalogos/coordinations",
    component: _ab2dbeae,
    meta: {"name":"Coordinations"},
    name: "catalogos-coordinations"
  }, {
    path: "/catalogos/departaments",
    component: _09bcf0e7,
    meta: {"name":"Departaments"},
    name: "catalogos-departaments"
  }, {
    path: "/catalogos/gobLevels",
    component: _2f567bba,
    meta: {"name":"GobLevels"},
    name: "catalogos-gobLevels"
  }, {
    path: "/catalogos/ilicits",
    component: _02633c7c,
    meta: {"name":"Ilicits"},
    name: "catalogos-ilicits"
  }, {
    path: "/catalogos/legalEntity",
    component: _188a1d6d,
    meta: {"name":"LegalEntity"},
    name: "catalogos-legalEntity"
  }, {
    path: "/catalogos/legalZones",
    component: _0bd082ad,
    meta: {"name":"Zones"},
    name: "catalogos-legalZones"
  }, {
    path: "/catalogos/motiveDescription",
    component: _70737147,
    meta: {"name":"MotiveDescription"},
    name: "catalogos-motiveDescription"
  }, {
    path: "/catalogos/operativeZones",
    component: _1f5a7d22,
    meta: {"name":"Zones"},
    name: "catalogos-operativeZones"
  }, {
    path: "/catalogos/participants",
    component: _43c0307f,
    meta: {"name":"Participants"},
    name: "catalogos-participants"
  }, {
    path: "/catalogos/requestMotive",
    component: _1c3f4ab4,
    meta: {"name":"RequestMotive"},
    name: "catalogos-requestMotive"
  }, {
    path: "/catalogos/response",
    component: _77bb5fc0,
    meta: {"name":"Response"},
    name: "catalogos-response"
  }, {
    path: "/catalogos/subzones",
    component: _d6673634,
    meta: {"name":"SubZone"},
    name: "catalogos-subzones"
  }, {
    path: "/catalogos/tablaje",
    component: _6dda0014,
    meta: {"name":"Tablaje"},
    name: "catalogos-tablaje"
  }, {
    path: "/catalogos/tenure",
    component: _161230ca,
    meta: {"name":"Tenure"},
    name: "catalogos-tenure"
  }, {
    path: "/catalogos/typeLegalEntity",
    component: _a55ad35a,
    meta: {"name":"TypeLegalEntity"},
    name: "catalogos-typeLegalEntity"
  }, {
    path: "/catalogos/typeResponse",
    component: _28b8f0fa,
    meta: {"name":"AppMethod"},
    name: "catalogos-typeResponse"
  }, {
    path: "/catalogos/typeResponseOp",
    component: _161c01fb,
    meta: {"name":"TypeResponseOp"},
    name: "catalogos-typeResponseOp"
  }, {
    path: "/catalogos/users",
    component: _17b81839,
    meta: {"name":"Users"},
    name: "catalogos-users"
  }, {
    path: "/catalogos/vegetationAffected",
    component: _cbc2ff7e,
    meta: {"name":"Vegetation"},
    name: "catalogos-vegetationAffected"
  }, {
    path: "/catalogos/vehicles",
    component: _132e40b4,
    meta: {"name":"Vehicles"},
    name: "catalogos-vehicles"
  }, {
    path: "/client/form",
    component: _3843ffea,
    meta: {"name":"ClientDetail","titleStack":["Clientes","Detalle"]},
    name: "client-form"
  }, {
    path: "/planification/editPlanification",
    component: _36ca3cb4,
    meta: {"name":"EditPlanification"},
    name: "planification-editPlanification"
  }, {
    path: "/tracking/complaint",
    component: _83372dc0,
    meta: {"name":"Complaint"},
    name: "tracking-complaint"
  }, {
    path: "/tracking/concentrado",
    component: _03e844d9,
    meta: {"name":"Concentrado"},
    name: "tracking-concentrado"
  }, {
    path: "/tracking/concentradoOld",
    component: _71fa473e,
    meta: {"name":"ConcentradoOld"},
    name: "tracking-concentradoOld"
  }, {
    path: "/tracking/programmed",
    component: _32e4bba3,
    meta: {"name":"Programmed"},
    name: "tracking-programmed"
  }, {
    path: "/tracking/technicalOp",
    component: _2c40045a,
    meta: {"name":"TechnicalOp"},
    name: "tracking-technicalOp"
  }, {
    path: "/client/:id?",
    component: _36723a7a,
    meta: {"name":"ClientDetail"},
    name: "client-id"
  }, {
    path: "/",
    component: _1696af95,
    meta: {"name":"Home"},
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
