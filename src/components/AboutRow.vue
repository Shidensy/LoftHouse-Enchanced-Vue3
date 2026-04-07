<script setup>
const items = [
    {img: "@/assets/about/key.png", alt: "key", content: {title: "Сдано", text: "103 дома в 9 ЖК"}},
    {img: "@/assets/about/cap.png", alt: "cap", content: {title: "Строятся", text: "164 дома в 8 ЖК"}},
    {img: "@/assets/about/sprout.png", alt: "sprout", content: {title: "Год основания", text: "2003 г."}},
];

const imgs = [new URL("@/assets/about/key.png", import.meta.url).href, new URL("@/assets/about/cap.png", import.meta.url).href, new URL("@/assets/about/sprout.png", import.meta.url).href];
</script>
<template>
    <div class="about__row">
        <div class="row">
            <ul class="row__list">
                <li class="row__item" v-for="(item, id) in items">
                    <img class="row__item-img" :src="imgs[id]" :alt="item.alt" />
                    <div class="row__item-content">
                        <div class="row__item-title">{{ item.content.title }}</div>
                        <div class="row__item-text">{{ item.content.text }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.row__list {
    display: flex;
    gap: 40px;

    font-size: 20px;
}

.row__item {
    display: flex;
    gap: 15px;

    img {
        width: 48px;
        height: 48px;
    }
}

@include mix.medium {
    .row__list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }
}

@include mix.small {
    .row__list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        font-size: 21px;
        line-height: 1.2;

        img {
            width: 52px;
            height: 52px;
        }
    }
}
</style>
