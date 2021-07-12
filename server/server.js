// var path = require('path');
// var fs = require('fs');

// var dataPath = path.join(__dirname, '../data.json');

// fs.readFile(dataPath,{
//     encoding: "UTF-8"
// }, (err, data) => {
//     // console.log(data);
//     var person = JSON.parse(data);

//     console.log(person.name);
//     console.log(person.shirtColor);
// });



/*NodeJS Project*/

const path = require('path');
const fs = require('fs');

const chirpArr = [
    {
        message: "Sheesh!",
        user: "Daze"
    },
    {
        message: "YOLO!",
        user: "Drake"
    },
    {
        message: "It's Lit!",
        user: "Travis $cott"
    }
];

fs.writeFile('chirps.json', JSON.stringify(chirpArr), function (err) {
    if (err) throw (err);
    console.log('Saved!')
});