<script setup>
import {ref} from "vue";
import CalculatorFormSelect from "./CalculatorFormSelect.vue";
import FormBtn from "./FormBtn.vue";
import ContactModal from "./ContactModal.vue";

const options = [{name: "Новостройки"}, {name: "Вторичный рынок"}, {name: "Вторичный рынок, новостройки"}, {name: "Стандартная"}, {name: "Семейная"}, {name: "Военная"}];

const parentSelectedOption = ref(null);

const firstInput = ref(1000000);
const secondInput = ref(100000);
const thirdInput = ref(5);

const reset = () => {
    firstInput.value = 1000000;
    secondInput.value = firstInput.value / 10;
    thirdInput.value = 0;
};
const changeFirstInput = () => {
    secondInput.value = firstInput.value / 10;
};

const show = ref(null);

const toggleModal = () => {
    show.value = !show.value;
};
</script>

<template>
    <form class="form">
        <div class="selectors__wrapper">
            <calculator-form-select :options="options.slice(0, 3)" v-model="parentSelectedOption"></calculator-form-select>
            <calculator-form-select :options="options.slice(3, 6)" v-model="parentSelectedOption"></calculator-form-select>
        </div>
        <div class="inputs__wrapper">
            <div class="input__inner">
                <div class="input">
                    <label class="input__label" for="input">Цена</label>
                    <input class="input__text" v-model="firstInput" type="text" id="input" autocomplete="off" />
                </div>
                <input @input="changeFirstInput" class="input-range" v-model="firstInput" min="1000000" max="10000000" type="range" step="10000" />
            </div>
            <div class="input__inner">
                <div class="input">
                    <label class="input__label" for="input">Первый взнос</label>
                    <input class="input__text" v-model="secondInput" type="text" id="input" autocomplete="off" />
                </div>
                <input class="input-range" v-model="secondInput" :min="firstInput / 10" :max="firstInput" type="range" step="1000" />
            </div>
            <div class="input__inner">
                <div class="input">
                    <label class="input__label" for="input">Срок кредита</label>
                    <input class="input__text" v-model="thirdInput" type="text" id="input" autocomplete="off" />
                </div>
                <input class="input-range" v-model="thirdInput" :min="5" :max="30" type="range" step="5" />
            </div>
        </div>
        <div class="btns__wrapper">
            <form-btn @click="reset" :text="'Сбросить'"></form-btn>
            <form-btn @click="toggleModal" :text="'Оставить заявку'"></form-btn>
            <transition name="fade">
                <contact-modal v-if="show" @toggleModal="toggleModal"></contact-modal>
            </transition>
        </div>
    </form>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    * {
        outline: none;
    }
}

.selectors__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.inputs__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.btns__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.input__inner {
    position: relative;
    width: 100%;
}

.input {
    position: relative;
    width: 100%;
}

.input__label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    max-width: 40%;
}

.input__text {
    text-align: right;
    height: 50px;
    padding: 15px 15px;
    width: 100%;
    background-color: rgba($color: #fff, $alpha: 0.1);
    border: 1px solid rgba($color: #fff, $alpha: 0.25);
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
}

.input-range {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    cursor: grab;
}

@include mix.small {
    .form {
        font-size: 12px;
    }

    .selectors__wrapper {
        gap: 10px;
    }

    .inputs__wrapper {
        gap: 10px;
        grid-template-columns: 1fr;
    }

    .btns__wrapper {
        gap: 10px;
    }
}
</style>
