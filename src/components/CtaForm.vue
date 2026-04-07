<script setup>
import FormBtn from "./FormBtn.vue";
import CtaFormInput from "./CtaFormInput.vue";
import ThanksModal from "./ThanksModal.vue";
import {ref} from "vue";

const change = defineProps(["change", "modalForm"]);

const show = ref(null);

const showThanks = () => {
    show.value = !show.value;
};

const input = ref();
const input2 = ref();

const checkInput = () => {
    if (input2.value != null && input.value.length == 12) {
        show.value = !show.value;
    }
};
</script>

<template>
    <form class="form" :class="{replace: change.change === true, modalForm: change.modalForm}">
        <cta-form-input v-model="input2" placeholder="Ваше имя:"></cta-form-input>
        <cta-form-input v-model="input" :isTel="true" placeholder="Ваш телефон:"></cta-form-input>
        <p class="form__privacy" :class="{move: change.change === true}">*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>

        <form-btn @click="checkInput" :text="'Оставить заявку'"></form-btn>
    </form>
    <thanks-modal @showThanks="showThanks" v-if="show"></thanks-modal>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px 30px;
    align-items: center;
}

.replace {
    grid-template-columns: repeat(4, 1fr);
}

.modalForm {
    grid-template-columns: 1fr !important;
}

.form__privacy {
    padding: 5px;
    color: vars.$privacy;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
}

.move {
    grid-row: 1 / 1;
}

@include mix.medium {
    .form {
        grid-template-columns: 1fr 1fr;
    }
}

@include mix.small {
    .form {
        grid-template-columns: 1fr;
    }
}
</style>
