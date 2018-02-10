function roadRadar([speed, area]) {
    speed = Number(speed);

    function getLimit(area) {
        switch (area) {
            case "city": return 50;
            case "interstate": return 90;
            case "motorway": return 130;
            case "residential": return 20;
        }
    }

    let limit = getLimit(area);

    function getInfraction(speed, limit) {
        let overspeed = speed - limit;

        if(overspeed <= 0) {
            return false;
        } else if(overspeed > 0 && overspeed <= 20){
            return "speeding";
        } else if(overspeed > 20 && overspeed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }

    let infraction = getInfraction(speed, limit);

    if(infraction) {
        console.log(infraction);
    }
}

// function solution (input) {
//     let limits = {city:50,
//                     residential:20,
//                         interstate:90,
//                             motorway:130};
//     let overSpeed = (input[0]-limits[input[1]]);

//     if(overSpeed>0&&overSpeed<=20){
//         console.log('speeding')
//     }
//     else if(overSpeed<=40&&overSpeed>0){
//         console.log('excessive speeding')
//     }
//     else if(overSpeed>40&&overSpeed>0){
//         console.log('reckless driving')
//     }
//     else{
//         return;
//     }

// }