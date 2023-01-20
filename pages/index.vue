<template>
    <div id="index">
        <Header />
        <Intro />
        <Projects />
        <Technology />
    </div>
  
</template>

<script>

export default {
    name: 'Index',
    layout: 'default',
    async asyncData ({ req, res }) {
        if (process.server) {
            return { host: process.req.headers.host }
        } else {
            return { host: window.location.host }
        }
    }

}
</script>

<style>

    #index {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100%;

        gap: 250px;
    }
    

</style>