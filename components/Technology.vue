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
                    <p class="text">Markup language used to create the structure and layout of web pages.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/css.svg" alt="icon-css" class="icon">
                    <h3>CSS</h3>
                    <p class="text">Stylesheet language used to describe the presentation of a document written in HTML.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/js.svg" alt="icon-js" class="icon">
                    <h3>JavaScript</h3>
                    <p class="text">Programming language used to create interactive and dynamic websites.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/nuxt.svg" alt="icon-nuxt" class="icon">
                    <h3>Nuxt.js</h3>
                    <p class="text">Framework built on top of Vue.js that simplifies the development of universal Vue.js applications.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/vue.svg" alt="icon-vue" class="icon">
                    <h3>Vue.js</h3>
                    <p class="text">Open-source JavaScript framework for building user interfaces.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/vuetify.svg" alt="icon-vuetify" class="icon">
                    <h3>Vuetify</h3>
                    <p class="text">Material Design framework for Vue.js that provides a set of reusable UI components.</p>
                </div>
            </div>
            <div>
                <div class="element">
                    <img src="@/assets/img/icons/git.svg" alt="icon-git" class="icon">
                    <h3>Git</h3>
                    <p class="text">Version control system that allows developers to keep track of changes made to their code, collaborate with others, and easily roll back to previous versions.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/php.svg" alt="icon-php" class="icon">
                    <h3>PHP</h3>
                    <p class="text">Server-side scripting language used to create dynamic web pages.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/laravel.svg" alt="icon-laravel" class="icon">
                    <h3>Laravel</h3>
                    <p class="text">PHP web application framework designed to make the process of building web applications more efficient.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/mysql.svg" alt="icon-mysql" class="icon">
                    <h3>MySQL</h3>
                    <p class="text">Relational database management system used to store and retrieve data.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/node.svg" alt="icon-node" class="icon">
                    <h3>Node.js</h3>
                    <p class="text">JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server side.</p>
                </div>
                <div class="element">
                    <img src="@/assets/img/icons/mongo.svg" alt="icon-mongo" class="icon">
                    <h3>MongoDB</h3>
                    <p class="text">NoSQL, document-oriented database that allows for easy and flexible data modeling.</p>
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