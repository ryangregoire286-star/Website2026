import {GenerateRGB} from "../../ColorStuff/GenerateRGBColorLength";
import {SIZE_Y} from "../../ColorStuff/SIZE_Number";

for(const BUTTON_X of document.querySelectorAll("#buttonX")) {

    BUTTON_X.addEventListener("click", () => {

        const colorGenR = GenerateRGB(SIZE_Y);
        const colorGenG = GenerateRGB(SIZE_Y);
        const colorGenB = GenerateRGB(SIZE_Y);

        const DisplayRGB = document.querySelectorAll("#COLOR");
        DisplayRGB.forEach(color => {
            color.textContent = `R: ${colorGenR}, G: ${colorGenG}, B: ${colorGenB}`;

        });

    })
}