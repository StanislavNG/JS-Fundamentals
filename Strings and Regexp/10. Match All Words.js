function solution (input = []) {
    input = input.split(/\W+/);
    console.log(input.filter(s=>s!=='').join('|'))
}