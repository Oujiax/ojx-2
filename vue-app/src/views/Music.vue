<template>
  <div>
    <aplayer :audio="audio" :lrcType="3" />
    <ul>
      <li class="list">
        <span class="order">编号</span>
        <span class="name">歌曲名称</span>
        <span class="artist">歌手</span>
      </li>
      <li class="list" v-for="(item, index) in musicList" :key="item.id" @click="getMusic(item.id)">
        <span class="order">{{index + 1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="artist">{{item.artist}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, {
  defaultCover: "https://github.com/u3u.png",
  productionTip: true,
});
export default {
  data() {
    return {
      audio: {
        name: "东西（Cover：林俊呈）",
        artist: "纳豆",
        url: "https://cdn.moefe.org/music/mp3/thing.mp3",
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: "https://cdn.moefe.org/music/lrc/thing.lrc",
      },
      musicList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let musicUrl = "https://bird.ioliu.cn/netease/playlist?id=3204303034";
      this.axios
        .get(musicUrl)
        .then((res) => {
          console.log(res);
          this.musicList = res.data.playlist.tracks.map((item) => {
            return {
              id: item.id,
              name: item.name,
              artist: item.ar[0].name,
            };
          });
          // console.log(this.musicList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMusic(id) {
      let baseUrl = "https://bird.ioliu.cn/netease/song?id=" + id;
      let musicObj = {};
      this.axios
        .get(baseUrl)
        .then((res) => {
          console.log(res);
          
          musicObj = {
            name: res.data.data.name,
            artist: res.data.data.ar[0].name,
            url: res.data.data.mp3.url,
            cover: res.data.data.al.picUrl,
          };
          this.audio = musicObj
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  padding: 8px;
  .order {
    flex: 1;
  }
  .name {
    flex: 4;
  }
  .artist {
    flex: 3;
  }
}
</style>