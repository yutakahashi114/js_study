var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく';
var result = str.match(p);
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}
console.log(p.test(str));
var str2 = 'サポート';
console.log(str.search(p));
console.log(str2.search(p));

p = /^[0-9]{1,}/gm;
str = '101匹 \n7人';
result = str.match(p);
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}

p = /[\/\.\-]/gi;
console.log('2018/05/21'.split(p));
console.log('2018.05.21'.split(p));
console.log('2018-05-21'.split(p));
