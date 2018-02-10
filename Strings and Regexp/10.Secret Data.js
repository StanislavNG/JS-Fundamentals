function solution (input=[]) {
    let regex = /\*[A-Z][a-zA-Z]*(\s+)|\*[A-Z][a-zA-Z]*$|\+[0-9-]{10}(\s+)|\+[0-9-]{10}$|\![a-zA-Z0-9]+(\s+)|\![a-zA-Z0-9]+$|\_[a-zA-Z0-9]+(\s+)|\_[a-zA-Z0-9]+$/g;
    input.forEach(line=>{
        let match = regex.exec(line);
        while(match){
            let match1 = match[0].trim();
            let replacer = '|'.repeat(match1.length);
            let inserting = match[0].replace(match1,replacer)

            line = line.replace(match[0],inserting)
            match = regex.exec(line)
        }
        console.log(line)
    })
    
}