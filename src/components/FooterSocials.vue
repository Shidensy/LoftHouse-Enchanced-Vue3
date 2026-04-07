<script setup>
const linkList = [
    {
        src: "https://www.youtube.com",
        alt: "YT",
    },
    {
        src: "https://vk.com",
        alt: "VK",
    },
    {
        src: "https://www.facebook.com",
        alt: "FB",
    },
    {
        src: "https://www.instagram.com",
        alt: "INST",
    },
];

const paths = [new URL("@/assets/footer/youtube.svg", import.meta.url).href, new URL("@/assets/footer/vk.svg", import.meta.url).href, new URL("@/assets/footer/facebook.svg", import.meta.url).href, new URL("@/assets/footer/instagram.svg", import.meta.url).href];
</script>

<template>
    <ul class="footer__socials">
        <li v-for="(link, index) in linkList">
            <a :href="link.src" target="_blank">
                <img :src="paths[index]" :alt="link.alt" />
            </a>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.footer__socials {
    display: flex;
    column-gap: 20px;
    align-items: center;

    img {
        width: 30px;
        height: 25px;
    }
}
</style>
