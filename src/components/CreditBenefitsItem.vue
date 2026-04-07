<script setup>
const benefits = [
    {img: new URL("@/assets/credit/first.webp", import.meta.url).href, alt: "money", text: "Одобрение с максимальной суммой"},
    {img: new URL("@/assets/credit/second.webp", import.meta.url).href, alt: "list", text: "Программы, которые подходят именно вам"},
    {img: new URL("@/assets/credit/third.webp", import.meta.url).href, alt: "house", text: "Решение по всем видам жилья"},
];
</script>

<template>
    <div v-for="benefit in benefits" class="advantages__item">
        <img :src="benefit.img" :alt="benefit.alt" class="advantages__item-img" />
        <p class="advantages__item-text">{{ benefit.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.advantages__item {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 20px 15px;
    border-radius: 15px;
    background-color: vars.$card-bg;

    font-size: 14px;

    img {
        width: 128px;
        height: 128px;
    }
}
</style>
