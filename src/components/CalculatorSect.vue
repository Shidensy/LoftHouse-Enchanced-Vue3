<script setup>
import CalculatorForm from "./CalculatorForm.vue";
</script>

<template>
    <section class="calculator">
        <div class="container">
            <div class="calculator__title">
                <h1 class="title-2">Ипотека без первоначального взноса</h1>
            </div>
            <calculator-form></calculator-form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.calculator__title {
    margin-bottom: 30px;
}
</style>
