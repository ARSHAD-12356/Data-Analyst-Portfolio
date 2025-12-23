
const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('e:/data-analyst-portfolio/public/Resume/Sample Resume_2025 (1).pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.log(error);
})
