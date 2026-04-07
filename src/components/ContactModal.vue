<script setup>
import CloseBalloonBtn from "./CloseBalloonBtn.vue";
import CtaForm from "./CtaForm.vue";
</script>

<template>
    <div class="modal">
        <div class="modal__window">
            <h2 class="modal__title">Мы будем рады ответить на ваши вопросы</h2>
            <cta-form :modalForm="true"></cta-form>
            <a class="info info--tel" href="tel:+78121234567">8 (812) 123-45-67</a>
            <close-balloon-btn @click="$emit('toggleModal')"></close-balloon-btn>
        </div>
        <div class="modal__overlay"></div>
    </div>
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
    gap: 60px;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 600px;
    border-radius: 30px 15px 30px 30px;
    box-shadow: 0 10px 15px rgba($color: #ffffff, $alpha: 0.6);
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

.modal__form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px 30px;
    align-items: center;

    font-size: 16px !important;
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
