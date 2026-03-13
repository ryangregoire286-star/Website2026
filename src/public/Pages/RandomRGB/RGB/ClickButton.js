const GenerateRGB = (r) => {
    return Math.floor(Math.random() * r);
}

const SIZE_Y = 254 + 1;

const BUTTON_X = document.querySelectorAll("#buttonX")

BUTTON_X.forEach(e => {

    e.addEventListener("click", () => {

        const colorGenR = GenerateRGB(SIZE_Y);
        const colorGenG = GenerateRGB(SIZE_Y);
        const colorGenB = GenerateRGB(SIZE_Y);

        const DisplayRGB = document.querySelectorAll("#COLOR");
        DisplayRGB.forEach(color => {
            color.textContent = `R: ${colorGenR}, G: ${colorGenG}, B: ${colorGenB}`;

        });

    });
});