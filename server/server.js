const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../data.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if(err) console.error(err);
    // console.log(res);

    JSON.parse(body).data.children.forEach(item => {
        // console.log(item.data.title);
        fs.appendFileSync(dataPath, item.data.title + '\n');
    });

    // fs.writeFile(dataPath, res.body, err => {
    //     if(err) console.error(err);
    // });


});



// fs.readFile(dataPath,{
//     encoding: "UTF-8"
// }, (err, data) => {
//     // console.log(data);
//     var person = JSON.parse(data);

//     console.log(person.name);
//     console.log(person.shirtColor);
// });



/*NodeJS Project*/

// const path = require('path');
// const fs = require('fs');

// const chirpArr = [
//     {
//         message: "Sheesh!",
//         user: "Daze"
//     },
//     {
//         message: "YOLO!",
//         user: "Drake"
//     },
//     {
//         message: "It's Lit!",
//         user: "Travis $cott"
//     }
// ];

// fs.writeFile('chirps.json', JSON.stringify(chirpArr), function (err) {
//     if (err) throw (err);
//     console.log('Saved!')
// });