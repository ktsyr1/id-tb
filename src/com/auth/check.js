exports.auth = ()=>{
    
    let date = `${new Date().getHours()}.${new Date().getMinutes()} `
    let end = localStorage.getItem('end_login')  
    if (end){
        if (end <= 24){
            if (end >= date){
                console.log(11);
                
            }
        }
    }
    // localStorage.setItem('time_login',[`${new Date().getHours()}.${new Date().getMinutes()} `]) 
}