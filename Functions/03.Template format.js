function templateFormat(input) {
    function drawQuestion(question) {
        let html = "\t<question>\n";
        html += `\t\t${question}\n`;
        html += "\t</question>\n";

        return html;
    }

    function drawAnswer(answer) {
        let html = "\t<answer>\n";
        html += `\t\t${answer}\n`;
        html += "\t</answer>\n";

        return html;
    }

    let html = '<?xml version="1.0" encoding="UTF-8"?>\n';
    html += '<quiz>\n';

    for(let i=0; i<input.length; i++) {
        if(i % 2 == 0) {
            html += drawQuestion(input[i]);
        } else {
            html += drawAnswer(input[i]);
        }
    }

    html += '</quiz>\n';

    console.log(html);
}


// function solution (input) {
//     let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
//     for (let i=0;i<input.length;i+=2){
//         html+=`<question>\n${input[i]}\n</question>\n`;
//         html+=`<answer>\n${input[i+1]}\n</answer>\n`;
//     }
//     html+=
//         '</quiz>\n';
//     console.log(html)
// }