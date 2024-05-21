const URL="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const inputText= document.querySelector(".input-box input");
const button = document.querySelector("#btn");
const qrImg = document.querySelector("#qrImg");
const imgBox = document.querySelector(".img-box");

const getQR= ()=>{
    if(inputText.value.length>0){
        qrImg.src=`${URL}${inputText.value}`;
        imgBox.classList.add("show-img");
    }
    
}

button.addEventListener("click",()=>{
    getQR();

});