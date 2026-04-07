<script setup></script>

<template>
    <label class="form__label">Цена:</label>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.form__label {
    position: absolute;
    color: vars.$input;
    font-size: 16px;
    font-family: vars.$third-family;
    top: 25%;
    margin-left: 10px;
}
</style>
