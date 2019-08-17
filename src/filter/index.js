import Vue from 'vue'
Vue.filter('money', function (number, decimals = 2, decPoint = '.', thousandsSep = ',') {
  /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * decPoint：小数点符号
   * thousands_sep：千分位符号
   * */
  number = (number / 100 + '').replace(/[^0-9+-Ee.]/g, '')
  let n = !isFinite(+number) ? 0 : +number
  let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  let dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  let s = ''
  let toFixedFix = function (n, prec) {
    let k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  let re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
})

Vue.filter('dateFomat', function (dateStr, isDateTimeFormat = true) {
  /*
   * 参数说明：
   * dateStr 日期字符串
   * isDateTimeFormat 是否是datetime格式的
   * */
  let dt = new Date(dateStr)
  let y = dt.getFullYear().toString().padStart(2, '0')
  let m = (dt.getMonth() + 1).toString().padStart(2, '0')
  let d = dt.getDate().toString().padStart(2, '0')
  if (isDateTimeFormat) {
    let hh = dt.getHours().toString().padStart(2, '0')
    let mm = dt.getMinutes().toString().padStart(2, '0')
    let ss = dt.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  } else {
    return `${y}-${m}-${d}`
  }
})