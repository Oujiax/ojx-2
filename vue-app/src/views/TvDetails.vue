<template>
  <div class="tv-list">
    <div class="content">
      <div class="pic">
        <img :src="'https://images.weserv.nl/?url=' + tvList.cover.image.small.url" alt />
      </div>
      <div class="title">
        <h2>{{tvList.title}}</h2>
        <p>{{tvList.card_subtitle}}</p>
        <p>{{tvList.episodes_info}}</p>
      </div>
    </div>
    <div class="info">
      <h3>剧情简介</h3>
      <p>{{tvList.intro}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvList: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let tvUrl =
        "https://m.douban.com/rexxar/api/v2/tv/" + this.$route.params.id;
      this.axios
        .get(baseUrl + tvUrl)
        .then((res) => {
          // console.log(res);
          this.tvList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.tv-list {
  .content {
    display: flex;
    .pic {
      flex: 3;
      padding: 10px;
      img {
        width: 100%;
      }
    }
    .title {
      flex: 5;
      padding: 20px;
      h2 {
        
        padding-bottom: 10px;
        font-weight: bolder;
      }
      p {
        margin: 10px 0;
      }
    }
  }
  .info{
      h3{
          font-weight: bolder;
      }
  }
}
</style>