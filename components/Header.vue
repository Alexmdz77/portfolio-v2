<template>
    <div class="col-2" id="home">
        <div>
            <h1>Making the Complex Simple.</h1>
            <p>My name is Alexandre and I am a fullstack web developer in an apprenticeship program, combining hands-on experience with classroom learning.</p>
            <a class="btn-primary btn-border" href="#contact">Contact me</a>
        </div>
        <div>
            <img src="@/assets/img/rocket.svg" alt="rocket"/>
        </div>
        
    </div>
</template>
<script>
    export default {
        name: 'Header',
    }
</script>
<style lang="scss" scoped>

.col-2 {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin: 0 auto;

    @include breakpoint(mobile) {
        flex-direction: column-reverse;
    }
    
    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 37px;
    }

    img {
        display: block;
        height: auto;
        margin-left: auto;

        width: 430px;

        @include breakpoint(mobile) {
            margin: auto;
            width: 80%;
        }

    }
}
    

</style>