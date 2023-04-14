const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your read file: ', (readName) => {
  var readerStream = fs.createReadStream(readName, { encoding: 'UTF8' });

  rl.question('Enter your write file: ', (writeName) => {
    var writeStream = fs.createWriteStream(writeName, { flags: 'a' });

    readerStream.pipe(writeStream);

    rl.close();
  });
});
