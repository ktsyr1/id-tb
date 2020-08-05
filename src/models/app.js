exports.view=(id , value )=>{
    var app =  document.getElementById(id)
    if (app.style.display==value){
      app.style.display = "none"; 
    }else{
      app.style.display = value; 
    } 
  } 