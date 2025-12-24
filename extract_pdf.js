
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('e:/data-analyst-portfolio/public/Resume/DAnalystArshad.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.log(error);
})
