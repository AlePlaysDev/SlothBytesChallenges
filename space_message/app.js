const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ask();

function ask() {
    rl.question(
        "Enter the text to be decoded, enter 0 to exit ",
        (result) => {
            if(result != 0) {   
                console.log(decode(result));   
                ask();
            } else {
                process.exit(0);
            }
        }
    );
}

function decode(text) {
    let decodedText="";
    
    while (text.indexOf("[") != -1) {
        let leftPosition = text.indexOf("[");
        let rightPosition = text.indexOf("]");

        let partBefore = "";
        let partMiddle = "";

        partBefore = text.substring(0, leftPosition);
        partMiddle = text.substring(leftPosition + 1, rightPosition);
        
        decodedText = decodedText + partBefore;
        decodedText = decodedText + decodeBracket(partMiddle);
        text = text.substring(rightPosition+1);
    }

    return `The decoded text is: ${decodedText}`;
}

function decodeBracket(text) {
    let position = 0;
    let number = 0;
    let textArray = text.split("");

    for (let index = 0; index < textArray.length; index++) {
        const element = textArray[index];
        
        if (isNaN(parseInt(element))) {
            number = parseInt(text.substring(0,index));
            position = index;
            break;
        }
    }

    return text.substring(position).repeat(number);
}