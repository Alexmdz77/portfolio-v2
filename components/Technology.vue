<template>
    <div id="technology">
        <div class="title">
            <h1 class="center">Technology</h1>
            <p class="center">I am eager to take on new challenges and contribute to the success of your team. I look forward to the opportunity to work with you and further develop my skills.</p>
        </div>
        <div class="col-2">
            <div>
                <div class="element">
                    <img src="@/assets/img/icons/html.svg" alt="icon-html" class="icon">
                    <h3>HTML</h3>
                    <p class="text">Markup language used to format the content of a Web page.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/css.svg" alt="icon-css" class="icon">
                    <h3>CSS</h3>
                    <p class="text">Language of style sheets allowing the formatting of the contents of a Web page.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/css.svg" alt="icon-members" class="icon">
                    <h3>CSS</h3>
                    <p class="text">Language of style sheets allowing the formatting of the contents of a Web page.</p>
                </div>
            </div>
            <div>
                <div class="element">
                    <img src="@/assets/img/icons/css.svg" alt="icon-members" class="icon">
                    <h3>CSS</h3>
                    <p class="text">Language of style sheets allowing the formatting of the contents of a Web page.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/css.svg" alt="icon-members" class="icon">
                    <h3>CSS</h3>
                    <p class="text">Language of style sheets allowing the formatting of the contents of a Web page.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/css.svg" alt="icon-members" class="icon">
                    <h3>CSS</h3>
                    <p class="text">Language of style sheets allowing the formatting of the contents of a Web page.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Technology',
    }
</script>
<style lang="scss" scoped>

#technology {
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
        }
    }

    .element {
        display: grid;
        grid-template-areas: 
            "icon title"
            "icon text";
        gap: 9px 18px;

        h3 {
            grid-area: title;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #FFFFFF;
        }

        .text {
            grid-area: text;
            font-weight: 400;
            font-size: 15px;
            line-height: 19px;
            color: $white;
        }

        .icon {
            grid-area: icon;
            width: 80px;
            height: 80px;
        }
    }
}


    

</style>