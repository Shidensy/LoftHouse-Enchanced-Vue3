<script setup>
import YandexMap from "./YandexMap.vue";

const mapTitle = defineProps(["title"]);
</script>
<template>
    <section class="map map-first" id="map">
        <div class="container">
            <div class="map__title">
                <h2 class="title-2">{{ mapTitle.title }}</h2>
            </div>
            <div class="map__view">
                <YandexMap></YandexMap>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.map {
    position: relative;

    &::before {
        content: "V";
        top: 15%;
        left: calc(50% - 555px);

        @include mix.decorNum;
    }
}

.map__title {
    margin-bottom: 50px;
}

@include mix.extraLarge {
    .map::before {
        display: none;
    }
}

@include mix.large {
    .map__title {
        margin-bottom: 30px;
    }
}
</style>
