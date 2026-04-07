<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay} from "swiper/modules";
import ApartmentsItem from "./ApartmentsItem.vue";
import ApartmentsItems from "@/utils/apartmentsItems.json";
import {ref} from "vue";

const modules = [Autoplay];

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
};

// Методы остановки/запуска
const stopAutoplay = () => {
    if (swiperInstance.value && swiperInstance.value.autoplay) {
        swiperInstance.value.autoplay.stop();
    }
};

const startAutoplay = () => {
    if (swiperInstance.value && swiperInstance.value.autoplay) {
        swiperInstance.value.autoplay.start();
    }
};
</script>

<template>
    <section class="slider">
        <div class="container">
            <div class="slider__title">
                <h2 class="title-2">Каталог</h2>
            </div>
            <swiper
                @swiper="onSwiper"
                @mouseenter="stopAutoplay"
                @mouseleave="startAutoplay"
                class="Myswiper"
                :slidesPerView="1"
                :spaceBetween="30"
                :modules="modules"
                :loop="true"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :breakpoints="{
                    '576': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '1200': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }">
                <swiper-slide v-for="item in ApartmentsItems">
                    <ApartmentsItem :id="item.id" :item="item"></ApartmentsItem>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider {
    padding: 15px 0 35px;
}

.slider__title {
    margin-bottom: 30px;
}
</style>
