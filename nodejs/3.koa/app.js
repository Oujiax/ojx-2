const Koa = require('koa');
const app = new Koa();

const logger = require('./logger');
// app.use:中间件，它是koa最核心的

function getData(){
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      var data = Math.random();
      if(data){
        resolve(data);
      }else{
        reject('fail...');
      }
    },2000)
  })
}
// app.use(logger());
app.use(logger);
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.use(async ctx => {
  var data = 'abc';
  ctx.body = await getData();
})

app.listen(3000);