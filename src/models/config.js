// const local=`http://localhost:5050`
const host=`https://id-tb.herokuapp.com`
const URL= host
exports.centers =  URL+`/api/v1/center/`
exports.center =(x) =>  `${URL}/api/v1/center/${x}`
exports.tables =(x) => `${URL}/api/v1/tables/${x}`
exports.array = `${URL}/api/v1/array/`
//auth
exports.login = `${URL}/auth/v1/login`
exports.signup = `${URL}/auth/v1/signup`
