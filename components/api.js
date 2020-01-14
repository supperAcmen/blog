import axios from 'axios'
import { Component } from 'react'
import { message } from 'antd'

// http请求头 配置跨域http头 或非跨域HTTP头
// const isPro = Object.is(process.env.NODE_ENV, 'production')
let baseUrl = ''
// if (isPro === 'http://127.0.0.1:7001/default') {
  baseUrl = 'http://demo.sijia2113.top/default'
// } else {
//   baseUrl = '/blog'
// }

// 请求超时时间
axios.defaults.timeout = 5000
// 是否跨域
axios.defaults.withCredentials = true

// 默认请求url
axios.defaults.baseURL = baseUrl
//http response 拦截器

axios.interceptors.request.use(
  config => {
    // config.headers['datacheck'] = localStorage.getItem("token")
    // console.log('request go');
    //处理请求前代码
    return config
  },
  error => {
    //接口出错
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  config => {
    // Toast.hide()                             // 销毁Toast组件
    // console.log('response get')
    return config
  },
  err => {
    // console.log('响应失败')
    return Promise.reject(err)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

axios.interceptors.response.use(
  response => {
    // const res = response.data
    // console.log(response)
    if (response.status !== 200) {
      // console.log("response",res)
      return Promise.reject('接口出错')
    } else {
      if (response.data.data.code !== -2) {
        return response
      } else {
        message.error('您尚未登陆,请登陆后查看')
        localStorage.removeItem('openId')
        setTimeout(time => {
          window.location.href = window.location.origin + '/'
        }, 1500)
      }
      // return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        // console.log(response.data.data)
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

Component.prototype.$fetch = fetch
Component.prototype.$post = post
Component.prototype.$patch = patch
Component.prototype.$put = put
