<script setup>
import AboutRow from "./AboutRow.vue";
import CtaForm from "./CtaForm.vue";
</script>

<template>
    <section class="about">
        <div class="container">
            <div class="about__wrapper">
                <div class="about__title">
                    <h2 class="title-2">LoftHouse в Санкт - Петербурге</h2>
                </div>
                <div class="about__content">
                    <about-row></about-row>
                    <div class="about__text"><span>LoftHouse</span> — федеральный девелопер, входящий в ТОП - 10 крупнейших застройщиков России по объёму строительства. С 2011 года компания реализовала проекты общей площадью более 2,3 млн м². История <span>LoftHouse</span> началась в Новокузнецке, сегодня компания строит современные жилые кварталы с развитой инфраструктурой в Новороссийске, Омске, Калужской, Московской областях и других регионах. Проекты <span>LoftHouse</span> воплощают концепцию «города в городе» и включают полноценную инфраструктуру — от образовательных учреждений, детских садов, торговых центров и спортивных объектов до прогулочных зон с фонтанами, бульварами, аллеями и экопарками.</div>
                </div>
                <cta-form></cta-form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.about {
    padding-top: 0;
}

.about__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.about__content {
    display: flex;
    flex-direction: column;
    gap: 40px;

    margin-bottom: 40px;
    font-family: vars.$third-family;
    line-height: 1.4;
}

.about__title {
    margin-bottom: 20px;
}

.about__text {
    font-size: 18px;
    span {
        color: vars.$accent;
    }
}

@include mix.small {
    .about__wrapper {
        gap: 20px;
    }

    .about__text {
        font-size: 16px;
    }
}
</style>
