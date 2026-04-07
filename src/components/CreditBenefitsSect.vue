<script setup>
import CreditBenefitsItem from "./CreditBenefitsItem.vue";
</script>

<template>
    <section class="advantages">
        <div class="container">
            <div class="advantages__title"><h2 class="title-2">Преимущества одной заявки</h2></div>
            <div class="advantages__row">
                <credit-benefits-item></credit-benefits-item>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.advantages {
    padding: 30px 0 75px;
}

.advantages__title {
    margin-bottom: 40px;
}

.advantages__row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
}

@include mix.medium {
    .advantages__row {
        grid-template-columns: 1fr;
        max-width: 520px;
        font-size: 16px;
    }
}
</style>
