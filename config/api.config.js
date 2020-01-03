const isPro = Object.is(process.env.NODE_ENV, 'production')
import {Url} from './apiUrl'

module.exports = {
    baseUrl: isPro ? Url : '/apis'
    // baseUrl: httpUrl
}