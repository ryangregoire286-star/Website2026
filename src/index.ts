import {Connect} from "./DB";

function OPENUrl(url: string) {

    return window.open(url);
}



async function URLS() {

    OPENUrl("https://github.com/ryangregoire286-star");
    await Connect("https://github.com/ryangregoire286-star");
}

const button = document.getElementById("button");
button?.addEventListener("click", URLS)