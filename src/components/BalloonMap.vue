<script setup lang="ts">
const props = defineProps(["marker"]);

const paths = [new URL("@/assets/apartments/01.jpg", import.meta.url).href, new URL("@/assets/apartments/02.jpg", import.meta.url).href, new URL("@/assets/apartments/03.jpg", import.meta.url).href, new URL("@/assets/apartments/04.jpg", import.meta.url).href];
</script>
<template>
    <div class="balloon" :class="[props.marker.alt !== 'defaultPin' ? 'grid' : '']">
        <img v-if="props.marker.alt === 'defaultPin'" :src="paths[props.marker.id - 1]" :alt="props.marker.balloon.alt" class="balloon__img" />
        <div class="balloon__content">
            <div class="balloon__title">
                <strong>{{ props.marker.balloon.title }}</strong>
            </div>
            <div class="balloon__subtitle">{{ props.marker.balloon.subtitle }} р.</div>
            <div v-if="props.marker.alt === 'defaultPin'" class="balloon__text">
                <p>{{ props.marker.balloon.text.p1 }}</p>
                <p>{{ props.marker.balloon.text.p2 }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.balloon {
    top: -50px;
    display: grid;
    grid-template-columns: 195px 100px;

    border-radius: 10px;
    background-color: #000000;
    color: #ffffff;

    font-size: 14px;
    font-weight: 700;
    font-family: vars.$third-family;

    transition: opacity 0.2s ease-out;
}

.balloon__content {
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 0 10px 10px 0;

    padding: 20px 10px;
}

.balloon__title {
    font-size: 16px;
}

.balloon__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
}

@include mix.medium {
    .balloon {
        grid-template-columns: 35px 120px;
    }

    .balloon__content {
        padding: 5px;
        font-size: 11px;
        gap: 5px;
    }

    .balloon__title {
        font-size: 14px;
    }

    .grid {
        grid-template-columns: 150px;
    }
}
</style>
