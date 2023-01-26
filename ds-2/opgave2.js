let input = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

/*  Ide:
*   Et program der genere et one time pad: random tal og numre ud fra input.
*   1. Genere random nummer og tal.
*   2. Det gereneret nummer skal være lige så lang som input.
*
*  */


// Fundet på stackoverflow for at genere random tal og bogstaver:
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

// Læser fra input:
btn.addEventListener("click", function() {
    let inputValue = input.value;
    console.log(inputValue);
    console.log(makeid(inputValue.length));
})

