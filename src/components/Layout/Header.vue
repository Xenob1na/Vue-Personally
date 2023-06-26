<template>
    <div>
        <section class="head">
            <div class="container">
                <header class="header">
                    <router-link to="/"><img src="/img/logo.svg" alt=""></router-link>

                    <nav class="navigation">
                        <ul>
                            <li v-for="(navs, index) in nav">
                                <router-link :to="navs.path" class="li">{{ navs.name }}</router-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="btn">
                        <button class="btn-sub">Subscribe</button>
                    </div>
                </header>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nav = ref([
    {
        name: 'Daily Digest',
        path: '/Daily-Digest'
    },
    {
        name: 'Design Tools',
        path: '/Design-Tools'
    },
    {
        name: 'Tutorials',
        path: '/Tutorials'
    },
])
</script>

<style scoped>
.container {
    max-width: 1340px;
    margin: 0 auto;
    padding: 30px;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigation ul {
    display: flex;
    gap: 30px;
    text-decoration: none;
    list-style: none;
}
.navigation ul li .li {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    color: black;
}
.navigation {
    margin-left: 500px;
}
.btn-sub {
    padding: 12px 14px;
    border-radius: 8px;
    background-color: #1D2939;
    color: white;
    font-weight: 600;
    font-size: 14px;
    transition: 0.4s all;
    cursor: pointer;
}
.btn-sub:hover {
    background-color: #0e151d;
}
</style>
