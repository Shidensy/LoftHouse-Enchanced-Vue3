<script setup>
import {Fancybox} from "@fancyapps/ui/dist/fancybox/";

Fancybox.bind("[data-fancybox]", {});
</script>

<template>
    <section class="video">
        <div class="container">
            <h2 class="visually-hidden">Видео про ЖК</h2>
            <a class="video__link" href="https://www.youtube.com/watch?v=CVhU__ypBRA" data-fancybox><img class="video__icon" src="@/assets/video/play-button.svg" alt="play-button" /><img src="@/assets/video/video.jpg" alt="video__img" class="video__img" /></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.video {
    text-align: center;
    position: relative;
    overflow-x: hidden;

    &::after {
        content: "IV";
        top: 15%;
        left: calc(50% + 545px);

        @include mix.decorNum;
    }
}

.video__link {
    position: relative;
    display: inline-block;

    &::before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(36, 43, 51, 0.8);
        transition: background-color 0.3s ease-in;
    }

    &:hover::before {
        background: rgba(36, 43, 51, 0.7);
    }

    &:hover {
        .video__icon {
            transform: translate(-50%, -50%) scale(1.2);
            filter: saturate(1.3);
        }
    }
}

.video__icon {
    position: absolute;
    cursor: pointer;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease-in;
}

@include mix.extraLarge {
    .video::after {
        display: none;
    }
}

@include mix.medium {
    .video__icon {
        width: 70px;
        height: 70px;
    }
}
</style>
