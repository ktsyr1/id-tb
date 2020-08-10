exports.URL_api=`https://id-tb.herokuapp.com`
exports.centers =  `${this.URL_api}/api/v1/center/`
exports.center =(x) =>  `${this.URL_api}/api/v1/center/${x}`
exports.tables =(x) => `${this.URL_api}/api/v1/tables/${x}`
//auth
exports.login = `${this.URL_api}/auth/v1/login`
exports.signup = `${this.URL_api}/auth/v1/signup`
