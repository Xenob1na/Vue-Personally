<template>
    <div>
        <div class="container-post">
                <div class="post-text">
                    <p class="post-text-p">{{ post_data.date }}</p>
                    <h4 class="post-text-h4">{{ post_data.title }}</h4>
                    <p class="post-text-p2">{{ post_data.body }}</p>
                </div>
                <div class="post-img">
                    <img :src="post_data.img" alt="">
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        post_data: {
            type: Object,
            default() {
                return {

                }
            }
        }
    },
}
</script>

<style scoped>
    .container-post {
    max-width: 1170px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    padding: 30px 24px;
    margin-top: 55px;
}
.post-text-p {
    margin: 0;
    color: #667085;
    font-size: 13px;
    font-weight: 500;
    line-height: 120%;
    text-transform: uppercase; 
}
.post-text-h4 {
    max-width: 610px;
    margin: 0;
    margin-top: 30px;
    color: #1D2939;
    font-size: 26px;
    font-weight: 700;
    line-height: 130%; 
}
.post-text-p2 {
    max-width: 610px;
    margin: 0;
    margin-top: 10px;
    color: #475467;
    font-size: 18px;
    line-height: 150%; 
}
.post-text {
    margin-top: 20px;
    margin-left: 10px;
}
</style>