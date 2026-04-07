<script setup>
import ApartmentsItem from "./ApartmentsItem.vue";

const data = [
    {
        id: 0,
        alt: "Loft Olimp",
        text: "Пентхаус “Loft Olimp”",
    },

    {
        id: 1,
        alt: "Nice Loft",
        text: "Апартаменты “Nice Loft”",
    },
    {
        id: 2,
        alt: "“Loft Studio”",
        text: "Апартаменты “Loft Studio”",
    },
    {
        id: 3,
        alt: "“Prestige”",
        text: "Loft квартира “Prestige”",
    },
];
</script>
<template>
    <section class="apartments" id="apartments">
        <div class="container">
            <div class="apartments__title"><h2 class="title-2">Наши квартиры</h2></div>
            <div class="apartments__cards">
                <ApartmentsItem v-for="(item, index) in data" :key="item.id" :item="item" :id="item.id"></ApartmentsItem>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/scss/vars.scss" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.apartments {
    position: relative;

    &::before {
        content: "III";
        top: 25px;
        left: calc(50% - 555px);

        @include mix.decorNum;
    }
}

.apartments__title {
    margin-bottom: 90px;
}

.apartments__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

@include mix.extraLarge {
    .apartments::before {
        display: none;
    }

    .apartments__title {
        margin-bottom: 45px;
    }
}

@include mix.medium {
    .apartments__cards {
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    }
}

@include mix.small {
    .apartments__cards {
        width: 100%;
    }
}
</style>
