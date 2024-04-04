function fileImage(){
    document.getElementById('Image').addEventListener('change', (event) => {
        const img = event.target.files[0]; 
        const reader = new FileReader();

        reader.addEventListener("load", (event) => {
            console.log(event); 
        });

        reader.readAsDataURL(img);
    });
}
