<script setup>
import {ref} from "vue";
import CtaForm from "./CtaForm.vue";

const title = defineProps(["title"]);
</script>

<template>
    <section class="cta">
        <div class="container">
            <div class="cta__title">
                <h2 class="title-2">Хотите посмотреть?<br />{{ title.title }}</h2>
            </div>
            <div class="cta__wrapper">
                <div class="cta__text"><p>ЖК LoftHouse – это проект бизнес-класса, расположенный в центре города, на Наб. реки Фонтанки 10-15. Комплекс предлагает своим жильцам квартиры площадью от 40 до 170 кв. м. В здании будет три секции, в которых разместится всего 56 квартир.</p></div>
                <cta-form></cta-form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.cta {
    background: linear-gradient(180deg, #242b33 10.42%, rgba(36, 43, 51, 0) 50.52%, vars.$dark 90.1%), linear-gradient(0deg, rgba(36, 43, 51, 0.9) 0%, rgba(36, 43, 51, 0.9) 100%), url("./../assets/cta/cta-bg.jpg"), #c4c4c4;
}

.cta__title {
    margin-bottom: 30px;
}

.cta__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.cta__text {
    line-height: 1.5;
}

@include mix.medium {
    .cta__wrapper {
        grid-template-columns: 1fr;
    }
}

@include mix.small {
    .cta__form {
        grid-template-columns: 1fr;
    }
}
</style>
