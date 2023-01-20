<template>
    <div id="about">
        <div class="title">
            <h1 class="center">Introduction</h1>
            <p class="center">I am highly motivated to learn and grow as a developer and am excited to apply my skills and knowledge to real-world projects.</p>
        </div>
        <div class="col-2">
            <div>
                <img src="@/assets/img/intro.svg" alt="intro"/>
            </div>
            <div class="card">
                <div class="element">
                    <img src="@/assets/img/icon-compass.svg" alt="icon-compass" class="icon">
                    <p class="text">I have a strong foundation in both front-end and back-end development, with experience in languages such as HTML, CSS, JavaScript, and PHP.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icon-members.svg" alt="icon-members" class="icon">
                    <p class="text">I am also proficient in agile methodologies and have experience working in a team environment.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Intro',
    }
</script>
<style lang="scss" scoped>

#about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 13px;

        p {
            max-width: 700px;
        }

    }

    
    .col-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10rem;
        align-items: center;
        margin: 0 auto;
        
        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            gap: 37px;
        }

        img {
            display: block;
            width: 80%;
            height: auto;
            margin-left: auto;

            width: 430px;
            height: 430px;
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 44px;
        gap: 37px;


        background: #212427;
        border: 1.5px solid #32363A;
        border-radius: 8px;

        .element {
            display: flex;
            gap: 37px;

            .icon {
                width: 41px;
                height: 41px;
            }
        }
    }
}


    

</style>