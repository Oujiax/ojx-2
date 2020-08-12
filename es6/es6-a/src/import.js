import {aa as a,fn1} from './export';
console.log(a);
console.log(fn1());

import Person1 from './export';
let p1 = new Person1('wangwu');
p1.sleep();