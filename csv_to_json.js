let csvToJson = require('convert-csv-to-json');

let fileInputName = 'input.csv'; 
let fileOutputName = 'output.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
