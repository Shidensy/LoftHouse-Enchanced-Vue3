<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";

const show = ref(null);

const links = [
    {to: "/admiralteyskiy", text: "Адмиралтейский"},
    {to: "/krasnogvardeyskiy", text: "Красногвардейский"},
    {to: "/petrogradskiy", text: "Петроградский"},
];

const district = ref(null);

const showLinks = () => {
    show.value = !show.value;
};

const closeLinks = (element) => {
    if (!district.value.contains(element.target)) {
        show.value = null;
    }
};

onMounted(() => {
    window.addEventListener("click", closeLinks);
});

onBeforeUnmount(() => {
    window.removeEventListener("click", closeLinks);
});
</script>

<template>
    <div class="district" ref="district" @click="showLinks">
        <a class="district__link-text" :class="['b']">Выбрать район</a>
        <transition name="translate">
            <div v-if="show" class="district-links__wrapper">
                <router-link class="district__link" @click="showLinks" v-for="link in links" :to="link.to">{{ link.text }}</router-link>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.district {
    order: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
}

.district__link-text {
    left: 0;
    border-radius: 5px;
    padding: 5px 25px;
    background-color: inherit;

    @media (hover: hover) {
        &:hover {
            background-color: rgba($color: #fff, $alpha: 0.25); /* Здесь указывается желаемый эффект при наведении. */
        }
    }
}

.district-links__wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 35px;
    left: 50%;
    gap: 10px;
    transform: translateX(-50%);
    z-index: 99;
    width: 100%;
}

.district__link {
    background-color: rgba($color: #fff, $alpha: 0.1);
    border-radius: 10px;
    padding: 10px 8px;
    text-align: center;
    font-size: 14px;

    transition: background-color 0.2s ease-in;

    &:hover {
        background-color: rgba($color: #fff, $alpha: 0.25);
    }
}

@include mix.large {
    .district__link-text {
        padding: 0;
    }
}
</style>
