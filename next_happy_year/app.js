console.log(nextHappyYear(2017))
console.log(nextHappyYear(1990))
console.log(nextHappyYear(2021))

function nextHappyYear(year) {
    year++;

    while(isHappyYear(year) == false) {
        year++;
    }

    return year;
}

function isHappyYear(year) {
    yearText = year.toString();

    for(i=0; i < yearText.length; i++) {
        if(yearText.substring(i+1).indexOf(yearText.charAt(i)) != -1) {
            return false;
        }
    }

    return true;
}