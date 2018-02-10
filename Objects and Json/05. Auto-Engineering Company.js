function solution (input=[]) {
    let info = new Map();
    input.forEach(line=>{
        let tokens = line.split(' | ');
        let carBrand = tokens[0];
        let carModel = tokens[1];
        let producedCars = Number(tokens[2]);
        if(!info.has(carBrand)){
            info.set(carBrand,new Map())
        }
        let oldValue = info.get(carBrand).get(carModel)
        if(oldValue){
            info.get(carBrand).set(carModel,producedCars+oldValue)
        }
        else{
            info.get(carBrand).set(carModel,producedCars)
        }
    })
    for (let [brand,map] of info) {
        console.log(brand)
        for (let [model,price] of map) {
            console.log('###'+model+' -> '+price)
        }
    }
}