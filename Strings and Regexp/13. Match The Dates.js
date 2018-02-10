function solution (input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/gm;
    let match = regex.exec(input);
    while(match){
        let day = match[1];
        let month = match[2];
        let year = match[3];
        console.log(`${match[0]} (Day: ${day}, Month: ${month}, Year: ${year})`)
        match = regex.exec(input)
    }
}