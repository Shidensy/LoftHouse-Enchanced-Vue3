<script setup lang="ts">
import {YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapMarker} from "vue-yandex-maps";
import type {LngLat} from "@yandex/ymaps3-types";
import {ref, inject} from "vue";
import markers from "@/utils/mapMarkers.json";
import BalloonMap from "./BalloonMap.vue";
import type {BehaviorType} from "@yandex/ymaps3-types";
import CloseBalloonBtn from "./CloseBalloonBtn.vue";

const map = inject("map");

const paths = [new URL("@/assets/map/pin-home.svg", import.meta.url).href, new URL("@/assets/map/pin.svg", import.meta.url).href];

const openMarker = ref<null | number>(null);
const mapSettings = ref({behaviors: ref<BehaviorType[]>(["drag", "scrollZoom"]), location: {center: map[0], zoom: map[1], duration: 500}});
</script>

<template>
    <yandex-map :settings="mapSettings" width="100%" height="380px">
        <yandex-map-default-scheme-layer />
        <yandex-map-default-features-layer />
        <yandex-map-marker
            v-for="(marker, index) in markers"
            :key="index"
            :settings="{
                coordinates: marker.coordinates as LngLat,
                onClick: () => ((openMarker = index), (mapSettings.location.center = marker.coordinates)),
                zIndex: openMarker === index ? 1 : 0,
            }">
            <img class="pin" :src="marker.alt === 'home-pin' ? paths[0] : paths[1]" :alt="marker.alt === 'home-pin' ? 'home-pin' : 'defaultPin'" />

            <transition name="fade">
                <div v-if="openMarker === index" class="popup">
                    <balloon-map :marker="marker"></balloon-map>
                    <close-balloon-btn @click.stop="openMarker = null"></close-balloon-btn>
                </div>
            </transition>
        </yandex-map-marker>
    </yandex-map>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.pin {
    cursor: pointer;
    max-width: unset;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    transition: transform 0.3s ease-in;

    &:hover {
        transform: scale(1.1);
    }
}

.popup {
    position: absolute;
    bottom: 10px;
    left: -125px;
    background: #fff;
    border-radius: 10px;
    color: black;
}

@include mix.medium {
    .popup {
        left: -55px;
    }
}
</style>
