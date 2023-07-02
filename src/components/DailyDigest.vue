<template>
    <div class="bg" v-if="info">
        <div class="container">
            <div class="up-title">
                <h4 class="up-title-h4">Daily Digest</h4>
                <router-link to="/Daily-Digest">
                    <button class="up-title-btn">View all</button>
                </router-link>
            </div>
            <DailyDigestItem 
            v-for="(posts, index) in info.slice(0,3)"
            :key="posts.id"
            :post_data= "posts"
            />
        </div>
    </div>
    <div v-else>
        <h1 class="info-loading">Loading in progress</h1>
    </div>
</template>

<script>
import DailyDigestItem from './DailyDigestItem.vue'
import axios from 'axios'
export default {
    name: 'DailyDigest',
    components: {DailyDigestItem},
    data() {
        return {
            info: null
        }
    },
    mounted() {
    axios
      .get('http://localhost:3000/post')
      .then(response => (this.info = response.data));
  }
}
</script>

<style scoped>
.bg {
    margin-top: 80px;
    background-color: #F2F4F7;
}
.container {
    max-width: 1170px;
    margin: 0 auto;
    padding-bottom: 80px;
}
.up-title {
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
}
.up-title-h4 {
    color: #1D2939;
    font-size: 26px;
    font-weight: 700;
    line-height: 130%; 
}
.up-title-btn {
    padding: 8px 15px;
    border-radius: 8px;
    background: #fff;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px; 
    transition: 0.4s all;
    cursor: pointer;
}
.up-title-btn:hover {
    background-color: #1D2939;
    color: #fff;
}
.info-loading {
    font-size: 50px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -2.28px;
    background: linear-gradient(45deg, #C41740,  33%, #EA9C28 66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
}
</style>