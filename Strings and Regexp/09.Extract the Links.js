function solution (input=[]) {
    let pattern = /www\.[A-Za-z0-9-]+\.([a-zA-Z]+\.)*([a-zA-Z]+)/g;
    input.forEach(x=>{
        let matches = x.match(pattern);
        if(matches) {
            for (let i = 0; i < matches.length; i++) {
                console.log(matches[i])
            }
        }

    })
}