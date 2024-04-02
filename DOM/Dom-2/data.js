function ChangeColor(){
    document.getElementById('ABC').style.backgroundColor= "red"
}
setInterval(()=>{
    let dt=new Date().toLocaleTimeString();

    document.getElementById('ABC').innerHTML=dt;
},1000)