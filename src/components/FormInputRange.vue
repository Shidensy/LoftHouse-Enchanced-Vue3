<script setup></script>

<template>
    <input class="form-input__range" type="range" />
</template>
<style lang="scss" scoped>
.form-input__range {
    position: absolute;
    height: 1px;
    content: "";
    width: 100%;
    cursor: grab;
}
</style>
