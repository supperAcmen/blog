const isPro = Object.is(process.env.NODE_ENV, 'production')
// console.log(isPro)
module.exports = {
    baseUrl: isPro ? 'http://192.168.140.67' : 'apis/'
}