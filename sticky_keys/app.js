const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ask();

function ask() {
    let originalText = "";
    rl.question(
        "Enter the original text or enter 0 to exit\n",
        (original) => {
            if(original != '0') {
                originalText = original;
                rl.question(
                    "Enter the typed text\n",
                    (typed) => {
                        console.log(isLongPressed(originalText, typed));
                        ask();
                    }
                );
            } else {
                process.exit(0);
            }
        }
    );
}

function isLongPressed(original, typed) {
    for (var i = 0; i < original.length; i++)
    {
        originalSubstring = original.substring(i);
        
        originalCount = howManyUntilChange(originalSubstring);
        typedCount = howManyUntilChange(typed)
        
        if(originalSubstring.charAt(0) == typed.charAt(0)) {
            if(originalCount > typedCount) {
                return false;
            }
        } else {
            return false;
        }


        typed = typed.substring(typedCount);
        i = i + (originalCount-1);
    }

    if(typed.length > 0) {
        return false;
    }

    return true;
}

function howManyUntilChange(text) {
    char = text.charAt(0);
    count = 0;

    for (var i = 0; i < text.length; i++)
    {
        if(text.charAt(i) != char) {
            break;
        }
        count++;
    }
    
    return count;
}