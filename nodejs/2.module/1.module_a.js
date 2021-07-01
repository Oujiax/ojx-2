// 在exports下添加自定义方法 test
// exports.test = function(x){
//     console.log(x);
// };
// exports.test('hehe');

// function test1(x){
//     console.log(x);
// }
// function test2(y){
//     console.log(y);
// }
// exports.tools = {
//     test1: test1,
//     test2: test2
// }

exports.Person = function(name,age){
    this.name = name;
    this.age = age;
}