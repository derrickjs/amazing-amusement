function removeForm(){
    var form = document.querySelector("form");

    form.style.display = "none";
}

document.querySelector("#submitForm").addEventListener("click", removeForm);

function addText(){
    var show = document.querySelector(".show");

    show.style.display = "block";
}

document.querySelector("#submitForm").addEventListener("click", addText);








function addPicture(){
    var rightSide = document.querySelector(".rightside");

    rightSide.style.backgroundImage = "url('https://res.cloudinary.com/derrickstahlman/image/upload/v1666800450/farris_wheel_iomhdp.jpg')";

    rightSide.style.backgroundSize = "cover";

}

document.querySelector("#submitForm").addEventListener("click", addPicture);








const button = document.querySelector("#submitForm");
const inputName = document.querySelector("#first-name");
const changeText = document.querySelector("#showtext");

const checkRonald = () => {
    
    let name = inputName.value;

    if(name == "ronald"){

    changeText.innerHTML = "Hello, " + name + ". Enjoy 15% off";
    }

    else{
        changeText.innerHTML = "Thank you! A representive will be in touch with you shortly."
    }
    
}

button.addEventListener("click", checkRonald );



const inputArray = document.querySelectorAll("label");


function changeColors(){

for(let item of inputArray){
    item.style.color = "#873e23";
}

}

window.addEventListener("DOMContentLoaded", changeColors);
