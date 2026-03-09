// import {Connect} from "../../DB";

const button =
    document.getElementById("button");

const p = document.getElementById("about_p");

function OPENUrl(url) {

    return window.open(url);
}



async function URLS() {

    OPENUrl("https://github.com/ryangregoire286-star");
    // await Connect("https://github.com/ryangregoire286-star");
    button.textContent = "Clicked";
}

const buttonAboutMe =
    document.getElementById("about_me");

button.addEventListener("click", URLS)

function DisplayAboutMe() {
    return `
        I Started Coding Back in ${2026 - 6}, I Started With HTML CSS JS
        And Loved Creating Websites and Apps for my Self and my Family,
        Learned A lot from That Experience, I Learned About 
        MongoDB, NodeJS Express, Discord.js for Bots of Discord Server
    `;

}
const yN = document.getElementById("QuestionAnswer");
yN.addEventListener("click", () => {

    const pTag = document.getElementById("codingAnswer")
    pTag.textContent = "YES I do Enjoy Coding Everyday";
})

buttonAboutMe.addEventListener("click", () => {

    p.textContent = DisplayAboutMe();

})

