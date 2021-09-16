const fileName = 'log1';
const jsonexport = require('jsonexport');
const fs = require('fs');
const logFile = require(`./logs/${fileName}.json`);

const recordsArray = logFile.hits.hits;


jsonexport(recordsArray, function(err, csv){
    if(err) return console.error(err);

    fs.writeFile(`output/${fileName}.csv`, csv, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    // console.log(csv);
});