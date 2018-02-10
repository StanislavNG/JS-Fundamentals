function solution (a,b) {
   let count = 0;
    let Index = 0;
    while(true){
        Index = b.indexOf(a);
        if(Index <0){
            break;
        }
        count++;
        b = b.substr(Index+1);
    }
    console.log(count)
}