<script setup>
const item = defineProps(["item", "id"]);

const paths = [new URL("@/assets/apartments/01.jpg", import.meta.url).href, new URL("@/assets/apartments/02.jpg", import.meta.url).href, new URL("@/assets/apartments/03.jpg", import.meta.url).href, new URL("@/assets/apartments/04.jpg", import.meta.url).href];
</script>
<template>
    <div class="card">
        <img class="card__img" :src="paths[item.id]" :alt="item.alt" />
        <h3 class="card__title">{{ item.text }}</h3>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars.scss" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.card {
    position: relative;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    margin: 0 auto;

    &::before {
        content: "";
        position: absolute;
        z-index: 2;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(36, 43, 51, 0) 0%, vars.$dark 100%);
    }

    &::after {
        opacity: 0;
        content: "";
        position: absolute;
        z-index: 2;
        left: 5px;
        top: 5px;
        right: 5px;
        bottom: 5px;
        border: 2px solid #6f6f6f;
        transition: opacity 0.2s ease-in;
    }

    &:hover {
        .card__img {
            transform: scale(1.1);
            filter: contrast(1.1) brightness(1.2) saturate(1.2);
        }
    }

    &:hover::after {
        opacity: 1;
    }
}

.card__title {
    width: fit-content;
    position: absolute;
    left: 30px;
    right: 10px;
    bottom: 10px;
    font-size: 20px;
    z-index: 99;
}

.card__img {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in;
}

@include mix.large {
    .card__title {
        font-size: 20px;
        left: 30px;
        bottom: 20px;
    }
}

@include mix.medium {
    .card__title {
        font-size: 16px;
    }
}
</style>
