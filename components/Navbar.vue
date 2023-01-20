<template>
    <div id="nav__wrapper">
        <div id="nav">
            <div class="nav__logo">
                <a href="#"><img src="@/assets/img/logo.svg" alt="Logo"></a>
            </div>
            <div class="nav__links">
                <nuxt-link @click="scrollTo(link)" v-for="link in links" :key="link.name">{{ link.name }}</nuxt-link>
            </div>
            <a class="btn-primary btn-border" @click="scrollTo('#contact')">Contact me</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                links: [
                    { name: 'Home', url: '#home', offset: 256 },
                    { name: 'About', url: '#about', offset: 200 },
                    { name: 'Projects', url: '#projects', offset: 120 }
                ],
            }
        },

        methods: {
            scrollTo(link) {
                const element = document.querySelector(link.url);

                const offset = link.offset;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }

    }
</script>
<style lang="scss" scoped>
    #nav__wrapper {
        position: fixed;
        z-index: 1000;
        top: 48px;
        left: 0;

        width: 100%;
        padding: 0 48px;
    }

    #nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        height: 55px;
        padding: 6.5px 8px;
        max-width: 1250px;
        margin: 0 auto;

        background: rgba(24, 25, 27, 0.6);
        backdrop-filter: blur(3px);
        border-radius: 8px;

        .nav__links {
            display: flex;
            align-items: center;
            gap: 40px;
            margin-left: auto;
            padding: 0 40px;
            a {
                color: #FFFFFF;
                font-weight: 600;
                font-size: 14px;
                line-height: 18px;
                text-decoration: none;
                transition: all 0.2s ease-in-out;
                &:hover {
                    color: $primary-color;
                }
            }
        }
    }

</style>