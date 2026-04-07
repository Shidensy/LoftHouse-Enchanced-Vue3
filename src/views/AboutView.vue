<script setup>
import AboutSect from "@/components/AboutSect.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import {provide, reactive} from "vue";

const map = reactive([[30.281234, 59.957766], 13]);

provide("map", map);
</script>

<template>
    <HomeHeader></HomeHeader>
    <about-sect></about-sect>
    <page-footer></page-footer>
</template>
