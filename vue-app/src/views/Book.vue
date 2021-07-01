<template>
  <div
    id="book"
    v-loading.fullscreen="loading"
    element-loading-text="玩命加载ing"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    
  >
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in cardList" :key="item">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="虚构类" name="fiction"></el-tab-pane>
        <el-tab-pane label="非虚构类" name="nonfiction"></el-tab-pane>
      </el-tabs>
      <div class="book-list">
        <el-row v-for="item in bookList" :key="item.id">
          <el-col :span="8">
            <div class="img">
              <img :src="item.cover.url" alt />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="content">
              <h3>{{item.title}}</h3>
              <p>{{item.info}}</p>
              <div class="grade">
                <el-rate
                  :value="getRate(item.rating.value)"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [],
      activeName: "fiction",
      bookList: [],
      loading: false,
      start:0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let bookUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/book_${this.activeName}/items?os=ios&start=${this.start}&count=8`;
      this.axios
        .get(baseUrl + bookUrl)
        .then((res) => {
          // console.log(res);
          this.cardList = res.data.subject_collection_items.map((item) => {
            return item.cover.url;
          });
          this.bookList = res.data.subject_collection_items;
          this.loading = false;
          // console.log(this.bookList);
          // console.log(this.cardList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClick() {
      this.getData();
    },
    getRate(num) {
      // num = 2.5
      let val = num / 2; //1.25
      val = val * 10; //12.5
      val = Math.trunc(val); //12  //Math.trunc()如果参数的字符串内部会先使用Number将其先转为数值
      val = val / 10; //1.2
      return val;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel {
  img {
    width: 100%;
  }
}
.tab {
  padding: 10px;
  .book-list {
    .content {
      padding: 0.2rem;
      .grade {
        padding-top: 10px;
      }
    }
    .img {
      img {
        width: 100%;
      }
    }
  }
}
</style>