<template>
    <div v-if="Post">
        <div class="container">
            <div class="container-info">
                <div class="info-text">
                    <h2 class="info-h2">{{ Post.title }}</h2>
                    <p class="info-p">{{Post.date}} | {{Post.slug}}</p>
                </div>
            </div>
            <div class="info-img">
                <img :src="Post.img" alt="">
            </div>
            <div class="info-main-text">
                <p class="info-main-text-p">{{ Post.body }}</p>
                <p class="info-main-text-p">{{ Post.body }}</p>
                
                <p class="info-main-text-p">{{ Post.body }}</p>
                <p class="info-main-text-p">{{ Post.body }}</p>
            </div>
            <hr class="hr">
            <Subscribe />
        </div>
    </div>
    <div v-else>
        <h1 class="info-loading">Loading in progress</h1>
    </div>
</template>

<script>
import Subscribe from '../components/Subscribe.vue';
export default {
    name: 'Post',
    components: {Subscribe},
    props: ['id'],
    data() {
        return {
            Post: null
        }
    },
    mounted() {
    fetch('http://localhost:3000/post/' + this.id)
      .then(res => res.json())
      .then(data => this.Post = data)
      .catch(err => console.log(err.message))
  }

}
</script>

<style scoped>
.container {
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 120px;
} 
.container-info {
    max-width: 970px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 70px;
}
.info-h2 {
    font-size: 76px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -2.28px;
    background: linear-gradient(45deg, #C41740,  33%, #EA9C28 66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.info-p {
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    max-width: 690px;
    color: #475467;
    font-size: 16px;
    line-height: 150%; 
}
.info-img img {
    margin: 0 auto;
    width: 100%;
    border-radius: 43px;
}
.info-main-text-p {
    color: #1D2939;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 15px; 
}
.info-main-text {
    max-width: 970px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
}
.hr {
    border: 1px solid;
    color: rgb(216, 212, 212);
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