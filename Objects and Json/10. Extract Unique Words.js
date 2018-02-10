function solution (input=[]) {
    let result = new Set();
    input.forEach(line=>{
        let words = line.toLowerCase().split(/\W+/).filter(x=>x!=='');
        words.forEach(word=>{
            result.add(word)
         })
    })
    console.log([...result.values()].join(', '))
}