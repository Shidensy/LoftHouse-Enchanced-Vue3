<script setup>
import {ref} from "vue";
import ContactModal from "./ContactModal.vue";
import DistrictDropDown from "./DistrictDropDown.vue";

const toggleModal = () => {
    isOpen.value = !isOpen.value;
};

const isOpen = ref(null);

const props = defineProps(["isActive", "isFooterNav"]);

const links = [
    {to: "/about", text: "О комплексе"},
    {to: "/catalog", text: "Каталог квартир"},
    {to: "/credit", text: "Ипотека"},
];
</script>

<template>
    <nav class="nav" :class="{show: props.isActive || props.isFooterNav}">
        <ul class="nav__list--horizontal" :class="{'nav__list--vertical': props.isFooterNav || props.isActive}">
            <district-drop-down v-if="!props.isFooterNav"></district-drop-down>
            <li v-for="(link, index) in links" :key="index" class="nav__link">
                <router-link :to="link.to">{{ link.text }}</router-link>
            </li>
            <div class="nav__modal-btn" @click="toggleModal"><button class="modal-btn" :class="{'nav--active': props.isActive}">Контакты</button></div>
            <transition name="fade">
                <contact-modal v-show="isOpen" @toggleModal="toggleModal"></contact-modal>
            </transition>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.nav {
    font-size: 14px;
    letter-spacing: 0.7px;
}

.nav__link {
    padding: 5px 15px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in;
    cursor: pointer;
    &:hover {
        background-color: rgba($color: #fff, $alpha: 0.1);
    }
}

.nav__modal-btn {
    transition: background-color 0.2s ease-in;
    border-radius: 5px;
    &:hover {
        background-color: rgba($color: #fff, $alpha: 0.1);
    }
}

.modal-btn {
    text-align: left;
    display: block;
    padding: 5px 15px;
    border-radius: 5px;
}

.nav--active {
    text-align: center;
    display: inline-block;
}

.nav__list--horizontal {
    display: grid;
    grid-template-columns: repeat(5, minmax(auto, auto));
    gap: 5px;
}

.nav__list--vertical {
    display: flex;
    flex-direction: column;
    gap: 13.5px;
}

@include mix.large {
    .nav {
        display: none;
    }

    .nav__list {
        flex-direction: column;
        align-items: center;
        row-gap: 30px;
    }

    .nav__list--vertical {
        align-items: baseline;
        li,
        .modal-btn {
            padding-left: 0px;
        }
    }
}
</style>
