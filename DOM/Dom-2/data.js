function ChangeColor(){
    let ref = document.getElementById('ABC')

    ref=innerHTML.style.backgroundColor= "red"
}
setInterval(()=>{
    let dt=new Date().toLocaleTimeString();

    document.getElementById('ABC').innerHTML=dt;
},1000)