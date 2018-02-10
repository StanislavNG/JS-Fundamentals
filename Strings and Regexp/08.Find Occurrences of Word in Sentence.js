function solution(sentence,wordToSearch) {
    let regex = new RegExp("\\b"+wordToSearch+"\\b","ig")
    let match = sentence.match(regex);
    if(match) {
        console.log(match.length)
    }
    else{
        console.log('0')
    }
}