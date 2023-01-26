let input = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

/*  Ide:
*   Et program der genere et one time pad: random tal og numre ud fra input.
*   1. Genere random nummer og tal.
*   2. Det gereneret nummer skal være lige så lang som input.
*   3. Tilføjer selve input og ekstra random numre/bogstaver.
*  */

// Læser fra input:
btn.addEventListener("click", function() {
    let inputValue = input.value;
    console.log(inputValue);
    output.innerHTML = makeid(inputValue.length);

    // Funktion i en funktion for der er variabler der skal bruges, det virker ikke globalt (inputValue).
    // Fundet på stackoverflow for at genere random tal og bogstaver:
    function makeid(length) {
        let result = inputValue + '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
})

