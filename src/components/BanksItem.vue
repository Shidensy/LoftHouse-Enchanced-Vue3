<script setup>
const banks = [
    {src: "https://bcs-bank.ru", img: new URL("@/assets/credit/bks.png", import.meta.url).href, alt: "BKS"},
    {src: "https://delo.ru", img: new URL("@/assets/credit/delo.png", import.meta.url).href, alt: "DELOBANK"},
    {src: "https://domclick.ru/", img: new URL("@/assets/credit/domklik.png", import.meta.url).href, alt: "DOMCLICK"},
    {src: "https://www.pochtabank.ru", img: new URL("@/assets/credit/pochta.png", import.meta.url).href, alt: "POCHTABANK"},
    {src: "https://www.tbank.ru", img: new URL("@/assets/credit/t.png", import.meta.url).href, alt: "TBANK"},
    {src: "https://tochka.com", img: new URL("@/assets/credit/tochka.png", import.meta.url).href, alt: "TOCHKA"},
];
</script>

<template>
    <div v-for="bank in banks" class="banks__item">
        <a :href="bank.src" class="banks__item-link" target="_blank">
            <img class="banks__item-img" :src="bank.img" :alt="bank.alt" />
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.banks__item {
    padding: 25px 20px;
    background-color: vars.$card-bg;
    border-radius: 15px;
}

.banks__item-img {
    width: 100%;
    height: 110px;
    object-fit: contain;
}

@include mix.medium {
    .banks__itemg {
        padding: 15px 10px;
    }
}
</style>
