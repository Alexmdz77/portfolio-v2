<template>
    <div id="index">
        <Header />
        <Intro />
        <Projects />
        <Technology />
        <Contact />
    </div>
  
</template>

<script>

export default {
    name: 'Index',
    layout: 'default',
}
</script>

<style lang="scss">

    #index {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100%;

        gap: 250px;

        @include breakpoint(mobile) {
            gap: 150px !important;
        }
    }
    

</style>