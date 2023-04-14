const vName = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your file: ', (fileName) => {
  vName.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('There is error while reading File');
    } else {
      console.log(data);
    }
  });
  rl.close();
});
