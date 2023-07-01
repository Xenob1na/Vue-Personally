<template>
    <div>
        <div class="container">
            <div class="hero-text">
                <h1 class="text-h1">Daily Digest</h1>
                <p class="text-p">A description of the respective category goes right here. Be as expressive as possible, but in brief.</p>
            </div>
        </div>
        <DailyDigest />
        <div>
            <Subscribe />
        </div>
    </div>
</template>

<script setup>
import DailyDigest from '../components/DailyDigest.vue';
import Subscribe from '../components/Subscribe.vue';
</script>

<style scoped>
.container {
  max-width: 970px;
  margin: 0 auto;
  text-align: center;
  margin-top: 120px;
}
.hero {
    margin-top: 90px;
    text-align: center;
}    
.text-h1 {
    font-size: 76px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -2.28px;
    background: linear-gradient(45deg, #C41740,  33%, #EA9C28 66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.text-p {
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    max-width: 690px;
    color: #475467;
    font-size: 28px;
    line-height: 150%; 
}
</style>
