function chessBoard([number]) {
    number = Number(number);

    let html = '<div class="chessboard">\n';

    for(let i=0; i<number; i++) {
        html += '\t<div>\n';

        for(let j=0; j<number; j++) {
            let color = (i + j) % 2 == 0 ? "black" : "white";
            html += `\t\t<span class="${color}"></span>\n`;
        }

        html += '\t</div>\n';
    }

    html += '</div>';

    return html;
}

// function chessboard(size) {
//     let html = '<div class="chessboard">\n';
//     for (let row = 0; row < size; row++) {
//         html += '  <div>\n';
//         let color = (row % 2 == 0) ? 'black' : 'white';
//         for (let col = 0; col < size; col++) {
//             html += `  <span class="${color}"></span>\n`
//             color = (color == 'white') ? 'black' : 'white';
//         }
//         html += ' </div>\n';
//     }
//     return html + '</div>';
// }