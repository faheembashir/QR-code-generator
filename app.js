let input = document.querySelector("#qrText");
let btn = document.querySelector("button");
let img = document.querySelector("#img");
let imgBox = document.querySelector(".imgBox");

function getQr() {
    if (input.value == "" || input.value == " ") {
        input.classList.add("error");
        console.log("Enter something");
        setTimeout(() => {
            input.classList.remove("error");
        }, 500);
    } else {
        setTimeout(() => {
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
            imgBox.classList.add("show-img");
            input.value = "";
        }, 500);
    }
}

btn.addEventListener("click", function () { 
    getQr();
});

input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        getQr();
    }
});
