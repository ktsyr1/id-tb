// const local=`http://localhost:5050`
const host=`https://id-tb.herokuapp.com`
const URL= host
exports.centers =  URL+`/api/v1/center/`
exports.center =(x) =>  `${URL}/api/v1/center/${x}`
exports.tables =(x) => `${URL}/api/v1/tables/${x}`
exports.table =(x) => `${URL}/api/v1/table/${x}`
exports.day =(x) => `${URL}/api/v1/day/${x}`
exports.array = `${URL}/api/v1/array/`

exports.reports =  URL+`/api/v1/report/`
exports.report =(x) =>  `${URL}/api/v1/report/${x}`
//auth
exports.login = `${URL}/auth/v1/login`
exports.signup = `${URL}/auth/v1/signup`
