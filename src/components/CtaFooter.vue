<script setup>
import {ref} from "vue";
import CtaForm from "./CtaForm.vue";

const change = ref(true);
const title = ref("Есть вопросы?");
</script>
<template>
    <section class="cta">
        <div class="container">
            <div class="cta__title">
                <h2 class="title-2">{{ title }}</h2>
            </div>
            <cta-form :change="change"></cta-form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.cta__title {
    margin-bottom: 30px;
}
</style>
