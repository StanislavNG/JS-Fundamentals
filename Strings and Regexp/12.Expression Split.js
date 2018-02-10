function solution (input) {
    let regex = /[();,.\s]+/
    input.split(regex).filter(s => console.log(s))
}