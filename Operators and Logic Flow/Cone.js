function cone([radius, height]) {
    [radius, height] = [radius, height].map(Number);

    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let area = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));

    console.log(volume);
    console.log(area);
}

// function cone(r, h) {
//   let s = Math.sqrt(r * r + h * h);
//   let volume = Math.PI * r * r * h / 3;
//   console.log("volume = " + volume);
//   let area = Math.PI * r * (r + s);
//   console.log("area = " + area);
// }