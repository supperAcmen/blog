const isPro = Object.is(process.env.NODE_ENV, 'production')
// console.log(isPro)
import { httpUrl } from "../config/serve";
module.exports = {
    baseUrl: isPro ? httpUrl : '/apis'
    // baseUrl: httpUrl
}