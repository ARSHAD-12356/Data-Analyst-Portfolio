const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const resumePath = path.join(__dirname, 'public', 'Resume', 'DAnalystArshad.pdf');
const outputPath = path.join(__dirname, 'resume_content.txt');

console.log(`Reading from: ${resumePath}`);

if (!fs.existsSync(resumePath)) {
    console.error("Resume file not found!");
    process.exit(1);
}

const dataBuffer = fs.readFileSync(resumePath);

pdf(dataBuffer).then(function (data) {
    console.log("PDF parsed. Writing to file...");
    fs.writeFileSync(outputPath, data.text);
    console.log(`Success! Text written to ${outputPath}`);
    console.log("Preview:", data.text.substring(0, 100));
}).catch(function (error) {
    console.error("Error parsing PDF:", error);
});
