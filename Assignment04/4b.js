const http = require('http');
const fs = require('fs');

const url = 'http://www.google.com/';

http
  .get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    var writestream = fs.createWriteStream('./Assignment04/homePage.txt');

    writestream.write(data, 'utf8');

    res.on('end', () => {
      console.log(data);
    });
  })
  .on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });
