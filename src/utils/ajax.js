import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import utils from './utils'
import { Toast } from 'vant'
import ExceptionHandle from './Exception'
import qs from 'qs'

Vue.use(Toast)

/**
  * 封装请求方法
  * @param  {url}  请求url
  * @param  {data}  请求参数
  * @param  {method}  请求方式
  */
export default function getAjax (url, data = {}, method = 'post', contentType = false) {
  return new Promise(function (resolve, reject) {
    const options = {
      url,
      method
    }
    options.headers = {
      'openid': utils.getCookie('openid') || '',
      'Authorization': utils.getCookie('Authorization') || '',
      'clientKey': utils.getCookie('clientKey') || '',
      'path': data.path || ('/' + window.location.hash || '')
    }
    // 如果是营销精灵
    if (utils.getStore('requestAim') === 'marketing') {
      options.headers['requestAim'] = utils.getStore('requestAim')
    }

    if (method.toLowerCase() === 'get') {
      options.params = data
    } else {
      if (contentType) {
        options.data = data
      } else {
        options.data = qs.stringify(data)
      }
    }

    axios(options).then(res => {
      let result = res.data
      if (Number(result.code) === 0) {
        resolve(result)
      } else if (Number(result.code) === 501) {
        router.replace('/login?redirectUrl=' + encodeURIComponent(result.data.redirectUrl))
      } else if (Number(result.code) === 502) {
        if (result.data.wxurl) {
          window.location = result.data.wxurl
        }
      } else {
        if (result.msg) {
          Toast(result.msg)
        }
      }
    }).catch(error => {
      reject(error)
      ExceptionHandle(error, this)
    })
  }).catch(error => {
    ExceptionHandle(error, this)
    Toast('服务器出问题啦！')
  })
}
