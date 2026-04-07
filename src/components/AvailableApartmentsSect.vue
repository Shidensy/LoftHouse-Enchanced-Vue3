<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay} from "swiper/modules";
import FormBtn from "./FormBtn.vue";
import {ref} from "vue";
import ContactModal from "./ContactModal.vue";

const items = [
    {id: 121, images: [new URL("@/assets/apartments/01.jpg", import.meta.url).href, new URL("@/assets/apartments/02.jpg", import.meta.url).href, new URL("@/assets/apartments/03.jpg", import.meta.url).href, new URL("@/assets/apartments/04.jpg", import.meta.url).href], title1: "58 м2 2-комнатная квартира 6 этаж", title2: "4 600 000 Р", subtitle1: "Санкт - Петербург", subtitle2: "80 000 Р за м2"},

    {id: 22, images: [new URL("@/assets/apartments/01.jpg", import.meta.url).href, new URL("@/assets/apartments/02.jpg", import.meta.url).href, new URL("@/assets/apartments/03.jpg", import.meta.url).href, new URL("@/assets/apartments/04.jpg", import.meta.url).href], title1: "58 м2 2-комнатная квартира 6 этаж", title2: "4 600 000 Р", subtitle1: "Санкт - Петербург", subtitle2: "80 000 Р за м2"},

    {id: 323, images: [new URL("@/assets/apartments/01.jpg", import.meta.url).href, new URL("@/assets/apartments/02.jpg", import.meta.url).href, new URL("@/assets/apartments/03.jpg", import.meta.url).href, new URL("@/assets/apartments/04.jpg", import.meta.url).href], title1: "58 м2 2-комнатная квартира 6 этаж", title2: "4 600 000 Р", subtitle1: "Санкт - Петербург", subtitle2: "80 000 Р за м2"},

    {id: 1, images: [new URL("@/assets/apartments/01.jpg", import.meta.url).href, new URL("@/assets/apartments/02.jpg", import.meta.url).href, new URL("@/assets/apartments/03.jpg", import.meta.url).href, new URL("@/assets/apartments/04.jpg", import.meta.url).href], title1: "58 м2 2-комнатная квартира 6 этаж", title2: "4 600 000 Р", subtitle1: "Санкт - Петербург", subtitle2: "80 000 Р за м2"},
];

const modules = [Autoplay];

const show = ref(null);

const toggleModal = () => {
    show.value = !show.value;
};

const curIndex = ref(null);

const togglePhone = (index) => {
    curIndex.value = index;
};
</script>

<template>
    <section class="available">
        <div class="container">
            <div class="available__title">
                <h2 class="title-2">Список доступных квартир</h2>
            </div>
            <div class="available__grid">
                <div v-for="item in items" class="available__grid-item">
                    <swiper
                        :modules="modules"
                        :loop="true"
                        :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }"
                        class="Myswiper"
                        :slidesPerView="1"
                        :spaceBetween="30">
                        <swiper-slide v-for="img in item.images"><img :src="img" alt="apartments" /></swiper-slide>
                    </swiper>
                    <div class="available__content">
                        <div class="content__info">
                            <div class="content__info-top">
                                <div class="content__title">{{ item.title1 }}</div>
                                <div class="price__title">{{ item.title2 }}</div>
                                <div class="content__subtitle">{{ item.subtitle1 }}</div>

                                <div class="price__subtitle">{{ item.subtitle2 }}</div>
                            </div>
                            <div class="content__info-bottom">
                                <form-btn @click="togglePhone(item.id)" class="btn" :text="curIndex !== item.id ? 'Показать телефон' : '8 (812) 123 45 67'"></form-btn>
                                <form-btn @click="toggleModal" class="btn" :text="'Оставить заявку'"></form-btn>
                                <transition name="fade">
                                    <contact-modal v-if="show" @toggleModal="toggleModal"></contact-modal>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.available__title {
    margin-bottom: 30px;
}

.available__grid-item {
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 30px;

    padding: 15px 10px;
    background-color: rgba($color: #fff, $alpha: 0.1);
    font-family: vars.$third-family;
    font-size: 16px;
    margin-bottom: 20px;
    border-radius: 20px;
}

.content__info {
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: end;
    gap: 50px;
}

.content__info-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    grid-template-rows: 1fr 1fr;
    row-gap: 20px;
    margin-top: 30px;
}

.content__info-bottom {
    display: flex;
    gap: 10px;
}

.available__btns {
    display: flex;
    gap: 20px;
}

.btn {
    border-radius: 10px;
    font-size: 14px;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.slider {
    padding: 15px 0 35px;
}

.slider__title {
    margin-bottom: 30px;
}

@include mix.small {
    .available__grid-item {
        grid-template-columns: unset;
        grid-template-rows: 50% 30%;
        gap: 15px;
    }

    .content__info-top {
        margin: 0;
        gap: 10px;
        font-size: 12px;
    }

    .btn {
        font-size: 13px;
    }

    .content__info {
        grid-template-columns: unset;
        align-items: start;
        gap: 20px;
    }
}
</style>
