<script setup>
import BanksItem from "./BanksItem.vue";
</script>

<template>
    <section class="banks">
        <div class="container">
            <div class="banks__title">
                <h2 class="title-2">Наши партнеры</h2>
            </div>
            <div class="banks__grid">
                <banks-item></banks-item>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.banks__title {
    margin-bottom: 40px;
}

.banks__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 30px;
}
</style>
