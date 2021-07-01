<template>
<!-- 1 新建一个vue页面，其中包含：姓名（文本录入框）、一个展示域。（提供主页面）
2 新建一个域，名字为numberInput，其中包含：年龄：（数字类型的输入框）、一个确认按钮。（提供动态显隐模块）
3 新建一个组件，名字为selectDialog，其中包含：出生日期：（日期选择器）、性别：（下拉框，下拉选项为男、女），底部两个按钮：取消，确定按钮。（提供模态框）
4 在第一步新建的vue页面中，引入2,3步新建的组件，实现以下功能：
在第1步创建的主页面中输入“姓名”后，显示第2步创建的“年龄”数字输入框及确认按钮，删除“姓名”内容后，隐藏第2步创建的“年龄”输入框及确认按钮；
在第2步创建的“年龄”输入框中输入数字，点击确认按钮后：
若年龄大于5，弹出第3步创建的模态框，模态框的样式为绿色背景标题栏，标题居中，显示“出生日期”日期选择器，隐藏“年龄”下拉框，选择日期。
若不大于5，.弹出框第3步创建的模态框，模态框的样式为红色背景标题栏，标题居左，显示“年龄”下拉框，隐藏“出生日期”日期选择器。（父组件向子组件传值，对应显示风格样式）
点击底部确定按钮，模态框消失，父页面展示域展示所有页面录入域的值（姓名、年龄、出生日期/性别）。（子组件向父组件传值） 
 -->
  <div>
    <div id="app">
      <div id="content">
        <div id="name">
          <label>姓名：</label>
          <input type="text" @blur="isShowNumber" v-model="value">
        </div>
        <div class="numberInput" v-show="isShow">
          <label>年龄：</label>
          <input type="text" v-model="age">
          <button @click="judge">确认</button>
        </div>
      </div>
      <div :class="select" v-show="isShowInfo" >
        <selectDialog></selectDialog>
      </div>
    </div>
  </div>
</template>


<script>
import selectDialog from "../components/selectDialog"
export default {
  data() {
    return {
      value: '',
      age: '',
      isShow: false,
      isShowInfo: false,
    }
  },
  methods: {
   isShowNumber(){
     if(this.value !== ''){
       this.isShow = true
     }else{
       this.isShow = false
     }
   },
   judge(){
     if(typeof this.age !== 'number'){
       alert('请输入数字')
     }else{
       if(parseInt(this.age) > 5){
         this.isShowInfo = true
       }
     }
     
   }
  },
  components: {
    selectDialog
  }
}
</script>

<style lang="scss" scoped>
  .numberInput{
    height: 100px;
  }
</style>