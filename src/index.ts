function OPENUrl(url: string) {

    return window.open(url);
}

function URLS() {

    OPENUrl("https://github.com/ryangregoire286-star");
}

const button = document.getElementById("button");
button?.addEventListener("click", URLS)