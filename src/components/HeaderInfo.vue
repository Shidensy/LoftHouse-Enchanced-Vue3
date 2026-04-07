<script setup></script>

<template>
    <div class="info">
        <div class="info__left">
            <a class="info__map" href="#map">Наб. реки Фонтанки 10-15</a>
        </div>
        <div class="info__right">
            <a class="info__tel" href="tel:+78121234567">8 (812) 123-45-67</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins" as mix;

.info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    font-family: vars.$third-family;
    opacity: 0.9;

    font-size: 18px;
}

.info__left {
    text-align: right;
}

.info__map {
    position: relative;
    padding-left: 35px;
    &::before {
        content: url("./../assets/header/map.svg");

        position: absolute;
        left: 0px;
        top: 0px;
        width: 21px;
        height: 21px;

        background-repeat: no-repeat;
    }

    &:hover {
        color: vars.$accent;
    }
}

.info__tel {
    position: relative;
    padding-left: 35px;
    &::before {
        content: url("./../assets/header/phone.svg");

        position: absolute;
        left: 0px;
        top: 0px;
        width: 21px;
        height: 21px;

        background-repeat: no-repeat;
    }

    &:hover {
        color: vars.$accent;
    }
}

@include mix.large {
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 30px;
        padding: 10px;
    }
}
</style>
