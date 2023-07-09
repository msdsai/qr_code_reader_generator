const genratortab = document.querySelector(".navGen");
const scannertab = document.querySelector(".navScan");

genratortab.addEventListener("click",() => {
    genratortab.classList.add("active");
    scannertab.classList.remove("active");

    document.querySelector(".scanner").style.display="none";
    document.querySelector(".generator").style.display="block";
})

scannertab.addEventListener("click",() => {
    genratortab.classList.remove("active");
    scannertab.classList.add("active");

    document.querySelector(".scanner").style.display="block";
    document.querySelector(".generator").style.display="none";
})