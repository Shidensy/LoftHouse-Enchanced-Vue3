<script setup>
import {ref} from "vue";

const props = defineProps(["label", "min", "max", "step", "isFirstInput", "vModel"]);

const vModel = ref(props.vModel);
console.log(vModel);
const emit = defineEmits(["changeFirstInput"]);
</script>

<template>
    <div class="input__inner">
        <div class="input">
            <label class="input__label" for="input">{{ props.label }}</label>
            <input class="input__text" v-model="vModel" type="text" id="input" autocomplete="off" />
        </div>
        <input @input="emit('changeFirstInput')" class="input-range" v-model="vModel" :min="[props.min > 0 ? props.min : props.min.value]" :max="[props.max > 0 ? props.max : props.max.value]" type="range" :step="props.step" />
    </div>
</template>

<style lang="scss" scoped>
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
    font-size: larger;
}

.input-range {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    cursor: grab;
}
</style>
