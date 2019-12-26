import axios from 'axios';

// 本地跨域处理
import apiConfig from '../config/api.config'

// 请求超时时间
axios.defaults.timeout = 5000;
// 默认请求url
axios.defaults.baseURL = 'http://192.168.140.67:3000'

//http response 拦截器
axios.interceptors.request.use(
    (config) => {
        // token
        config.headers['datacheck'] = localStorage.getItem("token")
        //处理请求前代码
        return config;
    },
    (error) => {
        //接口出错
        return Promise.reject(error)
    })



/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
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
        // data.data = this.$base64.encode(this.$base64.encode(data.data))
        // loding

        // Toast.loading({
        //     mask: true,
        //     message: "加载中...",
        //     forbidClick: true
        // });
        axios.post(url, data)
            .then(response => {
                // response.data = JSON.parse(this.$base64.decode(this.$base64.decode(response.data)))
                // console.log(response.data)
                console.log(url)
                if (response.data.code == -2) {
                    // console.log(url)
                    // console.log(window.location)
                    localStorage.setItem('user_type', '1')
                    if (localStorage.getItem("token") == null) {
                        // this.$my_message("您尚未登陆,请登陆后查看", "error");
                    } else {
                        // this.$my_message("您的登陆失效,请重新登陆", "error");
                    }
                    setTimeout(time => {
                        window.location.href = window.location.origin + "/#/login"
                    }, 1500)
                } else {
                    resolve(response.data);
                }
                // Toast.clear();
            }, err => {
                reject(err)
            })
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
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
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
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}


// Component.prototype.fetch = fetch;
// Component.prototype.post = post;
// Component.prototype.patch = patch;
// Component.prototype.put = put;
