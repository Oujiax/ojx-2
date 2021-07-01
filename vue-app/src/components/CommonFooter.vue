<template>
  <footer id="footer" :style="{backgroundColor: curMenu.bgColor}">
    <div @click="changeMenu(obj)" v-for="obj in menuList" :key="obj.path">
    <router-link :to="obj.path">{{obj.name}}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      menuList:[
        {
          path:'/',
          name:'剧集',
          bgColor:'#6699FF'
        },
        {
          path:'/music',
          name:'音乐',
          bgColor:'#00CC99'
        },
        {
          path:'/book',
          name:'书籍',
          bgColor:'#CC9966'
        },
        {
          path:'/chat',
          name:'聊天',
          bgColor:'#FF6699'
        }
      ]
    }
  },
  computed: {
    ...mapState(['curMenu'])
  },
  created() {
    // console.log(this.$route.path); 
    this.menuList.forEach(value=>{
      if(this.$route.path == value.path){
        this.setCurMenu(value)
      }
    })
  },
  methods: {
    ...mapMutations(['setCurMenu']),
    changeMenu(obj){
      this.setCurMenu(obj)
    }

  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: red;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  a{
    color: #000;
  }
}

</style>