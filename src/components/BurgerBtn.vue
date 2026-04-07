<script setup>
const emit = defineEmits(["openNav"]);

const isActive = defineProps(["isActive"]);
</script>

<template>
    <div class="burger">
        <button class="burger-icon-btn">
            <div @click="$emit('openNav')" class="burger-icon" :class="{'burger-icon--active': isActive.isActive}"></div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.burger {
    display: none;
    position: absolute;
    z-index: 99;
    right: 15px;
}

.burger-icon-btn {
    height: 30px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.burger-icon {
    position: relative;
    width: 40px;
    height: 1px;
    background-color: vars.$white;

    &::before {
        @include mix.stick;
        bottom: 8px;
    }

    &::after {
        @include mix.stick;
        top: 8px;
    }
}

.burger-icon--active {
    top: 20px;
    background-color: transparent;
    z-index: 99;

    &::before {
        @include mix.stickPos;
        transform: rotate(45deg);
    }

    &::after {
        @include mix.stickPos;
        transform: rotate(-45deg);
    }
}

@include mix.large {
    .burger {
        display: block;
    }
}
</style>
