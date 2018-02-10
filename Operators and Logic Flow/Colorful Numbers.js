function colorfulNames([number]) {
    number = Number(number);
    let html = '<ul>\n';
    for(let i = 1; i<= number; i++) {
        let color = i % 2 == 0 ? "blue" : "green";
        html += `\t<li><span style="color: ${color}">${i}</span></li>\n`;
    }
    html += "</ul>";
    return html;
}

// function nums(n) {
//   let html = '<ul>\n';
//   for (let i = 1; i <= n; i++) {
//     let color = 'blue';
//     if (i % 2 != 0) color = 'green';
//     html += `  <li><span style='color:${color}'>${i}</span></li>\n`;
//   }
//   html += '</ul>';
//   return html;
// }