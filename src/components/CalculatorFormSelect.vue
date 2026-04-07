<script setup>
import {computed, ref, onMounted, onBeforeUnmount} from "vue";
const props = defineProps(["options", "modelValue"]);

const selectedOption = ref(null);
const isDropDownVisible = ref(null);

const mappedSelectedOption = computed(() => {
    return selectedOption.value?.name || selectedOption.value || props.options[0].name;
});

const emit = defineEmits(["update:modelValue"]);

const dropDown = ref(null);

const toggleOptionSelect = (option) => {
    selectedOption.value = option;
    emit("update:modelValue", option);
    isDropDownVisible.value = false;
    console.log(option.name);
};

const closeDropDown = (element) => {
    if (!dropDown.value.contains(element.target)) {
        isDropDownVisible.value = false;
    }
};

onMounted(() => {
    window.addEventListener("click", closeDropDown);
});

onBeforeUnmount(() => {
    window.removeEventListener("click", closeDropDown);
});
</script>

<template>
    <div class="dropdown-wrapper" ref="dropDown">
        <div @click="isDropDownVisible = !isDropDownVisible" class="dropdown-selected-option">
            {{ mappedSelectedOption }}
            <button class="dropdown-selected-option-btn" :class="{active: isDropDownVisible}"></button>
        </div>
        <transition name="translate">
            <div v-if="isDropDownVisible" class="options-wrapper">
                <div v-for="(option, index) in props.options" :key="index" class="option" @click="toggleOptionSelect(option)">{{ option.name || option }}</div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.dropdow-wrapper {
    padding: 16px;
    cursor: pointer;
}

.dropdown-selected-option {
    padding: 16px;
    border: 1px solid rgba($color: #fff, $alpha: 0.25);
    border-radius: 8px;
    margin-bottom: 4px;
    position: relative;
    cursor: pointer;
    background-color: rgba($color: #fff, $alpha: 0.1);
}

.dropdown-selected-option-btn {
    content: "";
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    background-image: url(./../assets/credit/down.png);
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;

    transition: all 0.2s ease-in;
}

.active {
    transform: rotate(180deg);
}

.option:hover {
    background-color: rgba($color: #fff, $alpha: 0.25);
}

.option {
    padding: 16px;
    border: 1px solid rgba($color: #fff, $alpha: 0.25);
    border-radius: 8px;
    margin-bottom: 5px;
    cursor: pointer;
}
</style>
