import Vue from 'vue'
const date = datetime => {
  const config = { hour12: true, dateStyle: 'full', timeStyle: 'short' }
  return new Date(datetime).toLocaleString('es-MX', config)
}
const shortDate = datetime => {
  if (datetime) {
    const temporalDate = new Date(datetime)
    return temporalDate.getDate() + '/' + (temporalDate.getMonth() + 1) + '/' + temporalDate.getFullYear()
  } else {
    return 'Fecha no registrada'
  }
}
const getTime = datetime => {
  if (datetime) {
    const date = new Date(datetime)
    return date.getHours() + ':' + date.getMinutes()
  } else {
    return 'Hora no registrada'
  }
}
const getDay = datetime => {
  const date = new Date(datetime)
  return date.getDate()
}
const birthdate = datetime => {
  const config = { hour12: true, dateStyle: 'long' }
  return new Date(datetime).toLocaleString('es-MX', config)
}
const currency = (num) => {
  return parseFloat(num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
const status = (status) => {
  /*
  switch (status) {
    case status === 'process':
      return 'is-warning'
    case status === 'danger':
      return 'is-danger'
    case status === 'success':
      return 'is-success'
    case status === 'active':
      return 'is-info'
    default:
      return 'is-dark'
  }
  */
  return status === 'process' ? 'is-warning' : (status === 'danger' ? 'is-danger' : (status === 'success' ? 'is-success' : (status === 'active' ? 'is-info' : 'is-dark')))
}
const statusBinnacle = (status) => {
  // // // console.log(status)
  /*
  switch (status) {
    case status === 'sin-revisar':
      return 'Sin revisar'
    case status === 'en-revision':
      return 'En revisión'
    case status === 'revisado':
      return 'Revisado'
    default:
      return 'en-revision'
  }
  */
  return status === 'sin-revisar' ? 'Sin revisar' : (status === 'en-revision' ? 'En revisión' : (status === 'revisado' ? 'Revisado' : 'Sin estado'))
}
Vue.filter('getTime', getTime)
Vue.filter('status', status)
Vue.filter('statusBinnacle', statusBinnacle)
Vue.filter('date', date)
Vue.filter('shortDate', shortDate)
Vue.filter('getDay', getDay)
Vue.filter('birthdate', birthdate)
Vue.filter('currency', currency)
