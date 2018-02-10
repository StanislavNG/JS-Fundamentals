function solution (input=[]) {
    let result = new Set();

    input.forEach(line=>{
        let array = JSON.parse(line).sort((a,b)=>b-a);


        result.add(JSON.stringify(array))

    })

    result = [...result].map(x=>x = JSON.parse(x));

    let array = Array.from(result).sort(function (a,b) {
        if(a.length>b.length) return 1;
        if(a.length<b.length) return -1;
        return 0;
    });


    array.forEach(array=>{
        console.log('['+array.join(', ')+']')
    })
}