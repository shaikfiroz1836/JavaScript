function ImgStr(){
    // alert("GA")
    let imageFile=document.getElementById('ImgFile').files[0];
    let TA = document.getElementById('abc')
    let reader = new FileReader();
    reader.readAsDataURL(imageFile); 
    reader.addEventListener( "load",()=>{
        console.log(reader.result)
        TA.innerText=reader.result;
        globalStr=reader.result;
        console.log(reader.result)
    })
}

var globalStr=''

function Image(){
    // alert('GN')
    let ImgRef = document.getElementById('xyz')
    ImgRef.innerHTML=globalStr;

}