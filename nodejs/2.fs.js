let fs = require('fs');

fs.readFile('./a.txt', 'utf-8', function(err,data){
    console.log(data);
})

// var data = fs.readFile('./a.txt','utf-8'); //报错 因为是异步操作
var data = fs.readFileSync('./a.txt','utf-8'); //readFileSync 是同步执行
console.log(data);
