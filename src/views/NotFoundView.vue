<script setup></script>

<template>
    <div class="wrapper">
        <p>Похоже на нашем сайта пока нет этой страницы</p>
        <router-link class="link" to="/">Вернуться на главную</router-link>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 20px;

    font-size: 16px;
}

.link {
    background-color: rgba($color: #fff, $alpha: 0.1);
    padding: 10px 5px;

    transition: background-color 0.2s linear;

    &:hover {
        background-color: rgba($color: #fff, $alpha: 0.25);
    }
}
</style>
