<template>
    <div class="header__title">
        <h1>
            Жилой комплекс<br />в историческом центре <router-link title="Перейти в каталог" to="/catalog"><img class="header__title-icon" src="@/assets/header/mouse.svg" alt="mouse" /></router-link>
        </h1>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.header__title {
    position: relative;
    padding-bottom: 90px;
    text-align: center;
    font-size: 48px;
    font-family: vars.$second-family;
    color: vars.$accent;
    font-weight: 700;

    &-icon {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }
}

.header__title-icon {
    transition: all 0.2s ease-in;

    &:hover {
        transform: translate(-50%, -50%) scale(1.2);
        filter: saturate(1.3);
    }
}

@include mix.large {
    .header__title {
        font-size: 32px;
        padding-bottom: 80px;
    }
}
</style>
