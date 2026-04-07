<script setup>
const item = defineProps(["item", "index"]);

const paths = [new URL("@/assets/benefits/bench.svg", import.meta.url).href, new URL("@/assets/benefits/bicycle.svg", import.meta.url).href, new URL("@/assets/benefits/building.svg", import.meta.url).href, new URL("@/assets/benefits/fountain.svg", import.meta.url).href];
</script>

<template>
    <div class="benefits__item">
        <img :src="paths[item.index]" :alt="item.item.alt" class="benefits__item-img" />
        <p class="benefits__item-text">{{ item.item.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars.scss";

.benefits__item {
    text-align: center;
}

.benefits__item-img {
    margin-bottom: 50px;
}

.benefits__item-text {
    font-size: 20px;
    line-height: 1.35;
    font-family: vars.$third-family;
    font-weight: 300;
}
</style>
