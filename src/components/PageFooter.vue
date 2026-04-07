<script setup>
import PageNav from "./PageNav.vue";
import FooterSocials from "./FooterSocials.vue";

const linkNames = ["Поселение и переезд", "Сервисные услуги", "Экологическая устойчивость", "Инвестиционные возможности", "Программа лояльности"];
</script>
<template>
    <div class="footer">
        <div class="container">
            <div class="footer__grid">
                <div class="footer__logo">
                    <router-link to="/"><img src="@/assets/logo.svg" alt="logo" /></router-link>
                </div>
                <page-nav :isFooterNav="true"></page-nav>
                <nav>
                    <ul class="footer__nav-list">
                        <li v-for="name in linkNames">
                            <router-link to=":/">{{ name }}</router-link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul class="footer__nav-list">
                        <li>Адрес: Наб. реки Фонтанки 10-15</li>
                        <li><a href="tel:+78121234567">Телефон: 8 (812) 123-45-67</a></li>
                        <li>Отдел продаж: 10:00 - 20:00</li>
                        <li>E-mail: <a class="link-bold" href="mailto:vip@lofthouse.ru">vip@lofthouse.ru</a></li>
                        <footer-socials></footer-socials>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "./../assets/styles/scss/vars" as vars;
@use "./../assets/styles/scss/mixins.scss" as mix;

.footer {
    padding: 70px 0 50px;
    background-color: vars.$footer-bg;

    font-size: 14px;
    letter-spacing: 0.7px;

    a:hover {
        color: vars.$accent;
    }
}

.footer__logo {
    margin-top: -10px;
}

.footer__nav-list {
    display: grid;
    gap: 15px;
}

.footer__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

@include mix.large {
    .footer {
        padding: 50px 0 30px;
    }

    .footer__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@include mix.small {
    .footer__grid {
        grid-template-columns: 1fr;
    }
}
</style>
