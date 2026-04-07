<script setup>
import BenefitsSect from "@/components/BenefitsSect.vue";
import HomeHeader from "./../components/HomeHeader.vue";
import ApartmentsSect from "@/components/ApartmentsSect.vue";
import CtaSect from "@/components/CtaSect.vue";
import VideoSect from "@/components/VideoSect.vue";
import CtaFooter from "@/components/CtaFooter.vue";
import PageFooter from "@/components/PageFooter.vue";
import MapSect from "@/components/MapSect.vue";

import {provide, reactive} from "vue";

const map = reactive([[30.343024, 59.936147], 16]);

provide("map", map);
</script>
<template>
    <HomeHeader></HomeHeader>
    <main>
        <benefits-sect></benefits-sect>
        <apartments-sect></apartments-sect>
        <cta-sect></cta-sect>
        <video-sect></video-sect>
        <map-sect :title="'Мы на карте'"></map-sect>
        <cta-footer></cta-footer>
        <page-footer></page-footer>
    </main>
</template>
<style lang="scss" scoped></style>
