<script setup lang="ts"></script>

<template>
    <div class="closeBtn"></div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    cursor: pointer;

    border: 1px dashed black;
    border-radius: 0 10px 0 10px;
    background-color: rgb(255, 255, 255);

    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgb(199, 199, 199);
    }
}
</style>
