var dat = new Date();
console.log(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 1);
dat.setDate(0);
console.log(dat.toLocaleString());

var dat1 = new Date(2017, 4, 15);
var dat2 = new Date(2017, 5, 20);
var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff + '日の差があります');
