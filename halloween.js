let button = document.querySelector("#scaryButton");
let cuteImg = document.getElementById("cuteImg");

function scary(){
    button.innerHTML = "BOO!";
    button.style.width = "7%";
    button.style.height = "7%";
    button.style.fontSize = "150%";
    cuteImg.src = "scaryTeddyBear.webp";
    cuteImg.alt = "Scary Teddy Bear";
}