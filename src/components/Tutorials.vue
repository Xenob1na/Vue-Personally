<template>
    <div class="bg">
        <div class="container">
            <div class="up-title">
                <h4 class="up-title-h4">Tutorials</h4>
                <router-link to="/Tutorials"><button class="up-title-btn">View all</button></router-link>
            </div>
            <TutorialsItem 
            v-for="(posts, index) in info.slice(6,9)"
            :key="posts.id"
            :post_data= "posts"
            />
        </div>
    </div>
</template>

<script>
import TutorialsItem from './TutorialsItem.vue'
import axios from 'axios'
export default {
    name: 'Tutorials',
    components: {TutorialsItem},
    data() {
        return {
            info: []
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
    background-color: #F2F4F7;
    padding-bottom: 80px;
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

</style>