<script setup>
import CtaSect from "@/components/CtaSect.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import MapSect from "@/components/MapSect.vue";
import PageFooter from "@/components/PageFooter.vue";

import {provide, reactive} from "vue";

const map = reactive([[30.458921, 59.965271], 13]);

provide("map", map);
</script>

<template>
    <home-header></home-header>
    <main>
        <map-sect :title="'Красногвардейский район'"></map-sect>
        <cta-sect :title="'Оставьте контакты'"></cta-sect>
    </main>
    <page-footer></page-footer>
</template>
