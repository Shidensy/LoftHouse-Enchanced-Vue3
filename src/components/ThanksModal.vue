<script setup>
import CloseBalloonBtn from "./CloseBalloonBtn.vue";
</script>

<template>
    <transition name="translate">
        <div class="modal">
            <div class="modal__window">
                <h2 class="modal__title">Спасибо за оставленную заявку!</h2>
                <h3 class="modal__title">Теперь осталось только дождаться звонка</h3>
                <close-balloon-btn @click="$emit('showThanks')"></close-balloon-btn>
            </div>
            <div class="modal__overlay"></div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__window {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    max-height: 200px;
    border-radius: 30px 15px 30px 30px;
    box-shadow: 0px 5px 10px 2px rgba(255, 255, 255, 0.2) inset;
    background-color: vars.$dark;
    padding: 30px;

    font-family: vars.$third-family;
}

.modal__title {
    font-size: 24px;
    text-align: center;
}

.modal__overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;

    background-color: vars.$dark;
    opacity: 0.7;
}

.modal__close-btn {
    position: absolute;
    top: 16px;
    right: 16px;

    img {
        width: 16px;
        height: 16px;

        transition: transform 0.3s ease;

        &:hover {
            transform: rotate(90deg);
        }
    }
}

@include mix.medium {
    .modal__window {
        width: 300px;
        height: 450px;
        gap: 25px;
        padding: 10px;
    }

    .modal__title {
        font-size: 15px;
    }
}
</style>
