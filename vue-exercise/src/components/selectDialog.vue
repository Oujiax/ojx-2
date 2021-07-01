<template>
  <div id="container">
    <div id="birth">
      <span>出生日期：</span>
      <div class="selectBox">
        <div class="selectShow"></div>
        <div class="selectList">
          <div class="listItem" v-for="item in dataList" :key="item">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div id="sex">
      <span>性别：</span>
      <div class="selectBox">
        <div class="selectShow">
          <p>{{ unitSex }}</p>
          <i @click="selDown"></i>
        </div>
        <div class="selectList" v-show="!isShow">
          <div
            class="listItem"
            v-for="item in sexList"
            :key="item"
            @click="select(item)"
          >
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
    <div id="btn">
      <button>确认</button>
      <button>取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "selectDialog",
  //   props: {
  //     msg: String
  //   }
  data() {
    return {
      isShow: false,
      unitSex: "男",
      dataList: [
        {
          value: "",
        },
      ],
      sexList: [
        {
          value: "男",
        },
        {
          value: "女",
        },
      ],
    };
  },
  methods: {
    selDown() {
      this.isShow = !this.isShow;
    },
    select(item) {
      this.isShow = false;
      this.unitSex = item.value;
    },
  },
};
</script>

<style scoped lang="scss">
#container{
    height: 200px;
    .selectBox{
        margin: auto;
        .selectShow{
            position: relative;
            p{
                color: #fff;
                font-size: 14px;
                padding-top: 10px;
                padding-left: 10px;
            }
        }
    }
}
</style>