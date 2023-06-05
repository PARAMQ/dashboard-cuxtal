import Vue from 'vue'
const date = datetime => {
  const config = { hour12: true, dateStyle: 'full', timeStyle: 'short' }
  return new Date(datetime).toLocaleString('es-MX', config)
}
const shortDate = datetime => {
  const config = { hour12: true, dateStyle: 'short', timeStyle: 'short' }
  return new Date(datetime).toLocaleString('es-MX', config)
}
const getTime = datetime => {
  if (datetime) {
    const date = new Date(datetime)
    console.log(date)
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
  switch (status) {
    case status === 'process':
      return 'is-warning'
    case status === 'danger':
      return 'is-danger'
    case status === 'success':
      return 'is-success'
    default:
      return 'is-info'
  }
}
Vue.filter('getTime', getTime)
Vue.filter('status', status)
Vue.filter('date', date)
Vue.filter('shortDate', shortDate)
Vue.filter('getDay', getDay)
Vue.filter('birthdate', birthdate)
Vue.filter('currency', currency)
