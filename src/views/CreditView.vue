<script setup>
import BanksSect from "@/components/BanksSect.vue";
import CalculatorSect from "@/components/CalculatorSect.vue";
import CreditBenefitsSect from "@/components/CreditBenefitsSect.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
    <home-header></home-header>
    <main>
        <credit-benefits-sect></credit-benefits-sect>
        <calculator-sect></calculator-sect>
        <banks-sect></banks-sect>
    </main>
    <page-footer></page-footer>
</template>
