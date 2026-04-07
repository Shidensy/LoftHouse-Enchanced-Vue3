<script setup>
import AvailableApartmentsSect from "@/components/AvailableApartmentsSect.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import SliderSect from "@/components/SliderSect.vue";
</script>

<template>
    <home-header></home-header>
    <main>
        <slider-sect></slider-sect>
        <available-apartments-sect></available-apartments-sect>
    </main>
    <page-footer></page-footer>
</template>
