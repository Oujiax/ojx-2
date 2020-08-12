export let aa = 666;
export let fn1 = () => 'hello';

class Person {
    constructor (name){
        this.name = name;
    }
    sleep(){
        console.log(this.name + " is sleeping...");
    }
};
export default Person;  //页面里只能有一个export default