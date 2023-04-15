var readLine = require('readline');
var TDate = new Date(); //this is today date

var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var diffDays = function (date) {
  date = new Date(date);

  var msec = date.getTime() - TDate.getTime();
  var days = msec / 1000 / 60 / 60 / 24;

  return Math.floor(days);
};

rl.question('Enter date of Christmas in ISO format : ', (CDate) => {
  console.log('Days Till Chrismas are : ' + diffDays(CDate));

  rl.question('Enter your Birth Date in ISO Format : ', (BDay) => {
    console.log('Days till your BirthDay are : ' + Math.abs(diffDays(BDay)));
    rl.close();
  });
});
