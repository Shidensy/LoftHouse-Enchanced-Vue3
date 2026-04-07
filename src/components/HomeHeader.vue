<script setup>
import BurgerBtn from "./BurgerBtn.vue";
import HeaderInfo from "./HeaderInfo.vue";
import HeaderTitle from "./HeaderTitle.vue";
import PageNav from "./PageNav.vue";

import {ref, onMounted, onUnmounted} from "vue";

const isActive = ref(false);

const openMobileNav = () => {
    return (isActive.value = !isActive.value);
};

const scrollPosition = ref(0);

const updateScroll = () => {
    scrollPosition.value = window.scrollY; // Текущая позиция от верха
};

onMounted(() => {
    window.addEventListener("scroll", updateScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", updateScroll); // Обязательно удаляем обработчик
});
</script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__top">
                    <div class="header__top-row">
                        <RouterLink to="/home"><img src="@/assets/logo.svg" alt="logo" /></RouterLink>
                        <PageNav :isActive="isActive"></PageNav>
                        <BurgerBtn @open-nav="openMobileNav" :isActive="isActive"></BurgerBtn>
                    </div>
                    <transition name="translate">
                        <div v-show="isActive" class="header__top-row--mobile">
                            <RouterLink to="/home"><img src="@/assets/logo.svg" alt="logo" /></RouterLink>
                            <PageNav :isActive="isActive"></PageNav>
                            <BurgerBtn @open-nav="openMobileNav" :isActive="isActive"></BurgerBtn>
                        </div>
                    </transition>
                </div>
                <HeaderTitle></HeaderTitle>
                <HeaderInfo></HeaderInfo>
            </div>
        </div>
        <transition name="fade">
            <div :class="{nav__wrapper: scrollPosition > 100}">
                <transition name="fade">
                    <div v-if="scrollPosition > 100" class="header__top-row isSticky" :class="{'header__top-row--mobile': isActive}">
                        <RouterLink to="/home"><img src="@/assets/logo.svg" alt="logo" /></RouterLink>
                        <PageNav :isActive="isActive"></PageNav>
                        <BurgerBtn @open-nav="openMobileNav" :isActive="isActive"></BurgerBtn>
                    </div>
                </transition>
            </div>
        </transition>
    </header>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.nav__wrapper {
    position: fixed;
    height: 75px;
    top: 0;
    width: 100%;
    background: linear-gradient(180deg, #242b33 92.98%, rgba(45, 52, 60, 0.38) 51.04%, #242b33 92.19%);

    z-index: 998;
}

.isSticky {
    position: fixed;
    max-width: 1140px;
    background: linear-gradient(180deg, #242b33 92.98%, rgba(45, 52, 60, 0.38) 51.04%, #242b33 92.19%);
    top: 0;
    left: 50%;
    width: 100%;
    height: 75px;
    padding: 15px;
    z-index: 999;
    transform: translateX(-50%);
}

.header {
    background:
        linear-gradient(180deg, #242b33 11.98%, rgba(45, 52, 60, 0.38) 51.04%, #242b33 92.19%),
        url(./../assets/header/header-bg.jpg) lightgray 50% / cover no-repeat;
}

.header__wrapper {
    padding: 30px 0 75px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 800px;
}

.header__top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__top-row--mobile {
    position: fixed;
    z-index: 999;
    background-color: vars.$dark;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    row-gap: 50px;

    padding: 40px 0;
}

@include mix.large {
    .header {
        min-height: unset;
        row-gap: 50px;
    }

    .header__wrapper {
        padding-bottom: 35px;
    }
}

@include mix.medium {
    .header__wrapper {
        min-height: 635px;
    }
}
</style>
