function OPENUrl(url) {
    return window.open(url);
}
function URLS() {
    OPENUrl("https://github.com/ryangregoire286-star");
}
var button = document.getElementById("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", URLS);
