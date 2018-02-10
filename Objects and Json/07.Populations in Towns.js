function solution (input=[]) {
    let tokens = '';
    let townData = new Map();
    input.forEach(x=>{
        tokens = x.split(' <-> ');
        let town = tokens[0];
        let population = tokens[1];
        if(!townData.has(town)){
            townData.set(town,0);
        }
        townData.set(town,townData.get(town)+Number(population))
    })
    for (let [key,value] of townData) {
        console.log(key+' : '+value)
    }
}