const generatorDiv = document.querySelector(".generator");
const generatorBtn = generatorDiv.querySelector(".generator-form button");
const qrinput = generatorDiv.querySelector(".generator-form input");
const qrimg = generatorDiv.querySelector(".generator-img img");
const downloadBtn =generatorDiv.querySelector(".generator-btn .btn-link"); 

let imgURL = '';
generatorBtn.addEventListener("click",() =>{
    let qrvalue = qrinput.value;
    if(!qrvalue.trim()) return;

    generatorBtn.innerText = "Generating QR Code..";
    imgURL=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrvalue}`;
    qrimg.src = imgURL;
    qrimg.addEventListener("load",()=>{
        generatorDiv.classList.add("active");
        generatorBtn.innerText="Generate QR Code";
    })
    
})

downloadBtn.addEventListener("click",() => {
    if(!imgURL) return;
    fetchImage(imgURL)
    
})
function fetchImage(url){
    fetch(url).then(res => res.blob()).then(file => {
        console.log(file);
        let tempfile = URL.createObjectURL(file);
        let file_name = url.split("/").pop().split(".")[0];
        let extension = file.type.split("/")[1];
        download(tempfile, file_name, extension);
    })
    .catch(() => imgURL='');
}

function download( tempfile, file_name, extension){
    let a= document.createElement('a');
    a.href = tempfile;
    a.download = `${file_name}.${extension}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
}
qrinput.addEventListener("input",()=>{
    if(!qrinput.value.trim())
        return generatorDiv.classList.remove("active");
})