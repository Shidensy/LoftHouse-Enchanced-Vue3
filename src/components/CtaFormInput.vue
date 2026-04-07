<script setup>
const isTel = defineProps(["isTel"]);

import {ref} from "vue";
const input = ref("");

const onBlurInput = () => {
    if (isTel.isTel) {
        input.value.includes("+7") ? (input.value.length == 12 ? true : (input.value = "")) : (input.value = "");
    }
};

const onClickInput = () => {
    if (isTel.isTel) {
        input.value = "+";
    }
};
</script>

<template>
    <input class="form__input" @click="onClickInput" v-model="input" @blur="onBlurInput" type="text" autocomplete="off" />
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.form__input {
    height: 50px;
    width: 100%;
    padding: 12px;
    text-align: center;
    background-color: rgba($color: #fff, $alpha: 0.1);
    color: vars.$input;
    font-size: 16px;
    line-height: 40px;
    font-family: vars.$third-family;

    &:focus {
        background-color: rgba($color: #fff, $alpha: 0.25);
    }
}
</style>
