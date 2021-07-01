// require 请求，加载
let a = require('./1.module_a');

// let b = require('./3.module_b');
let Person = require('./3.module_b');
// console.log(a);  //{ test: [Function] }
// console.log(b);  //[Function]

// 直接调用b
// b("hahahaha");

// a.test('haha');
// a.tools.test1('test1');
// a.tools.test2('test2');

let p1 = new a.Person('wangwu',24);
// let p2 = new b('zhangsan',20);
let p2 = new Person('zhangsan',20);
console.log(p1);//{ name: 'wangwu', age: 24 }
console.log(p2);//Person { name: 'zhangsan', age: 20 }