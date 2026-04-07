<script setup>
import {ref} from "vue";
import benefitsItems from "@/utils/benefitsItems.json";
import BenefitsItem from "./BenefitsItem.vue";

const benItems = ref(benefitsItems);
</script>
<template>
    <section class="benefits">
        <div class="container container--small">
            <h2 class="benefits__title visually-hidden">Преимущества ЖК</h2>
            <div class="benefits__row">
                <BenefitsItem v-for="(item, index) in benItems" :index="index" :item="item"></BenefitsItem>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/scss/mixins.scss" as mix;

.benefits {
    position: relative;
    overflow-y: hidden;

    &::after {
        content: "II";
        top: -25%;
        left: calc(50% + 555px);

        @include mix.decorNum;
    }
}

.benefits__row {
    display: flex;
    column-gap: 70px;
}

@include mix.large {
    .benefits {
        &::after {
            display: none;
        }
    }

    .benefits__row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 30px;
    }
}
</style>
