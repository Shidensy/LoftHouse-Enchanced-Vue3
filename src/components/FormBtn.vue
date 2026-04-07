<script setup>
const btnText = defineProps(["text"]);
</script>

<template>
    <button class="form__button" type="button">{{ btnText.text }}</button>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;
.form__button {
    height: 50px;
    padding: 12px;
    color: vars.$white;
    font-weight: 700;
    text-align: center;
    background-color: vars.$accent;

    transition: all 0.2s ease-in;

    &:hover {
        background-color: rgba($color: #fff, $alpha: 1);
        color: vars.$accent;
    }
}
</style>
