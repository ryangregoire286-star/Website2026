// import {Connect} from "./DB";
import {button, buttonLight, OPENUrl} from "./Imports";

async function URLS() {

    OPENUrl("https://github.com/ryangregoire286-star");
    // await Connect("https://github.com/ryangregoire286-star");
    button.textContent = "Clicked";
}

function SetLight() {
    return "#ccc";
}

button.addEventListener("click", URLS)
buttonLight.addEventListener("click", () => {

    document.body.style.backgroundColor = SetLight();
})