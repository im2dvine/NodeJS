var path = require('path');
var fs = require('fs');

var dataPath = path.join(__dirname, '../data.json');

fs.readFile(dataPath,{
    encoding: "UTF-8"
}, (err, data) => {
    // console.log(data);
    var person = JSON.parse(data);

    console.log(person.name);
    console.log(person.shirtColor);
});