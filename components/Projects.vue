<template>
    <div id="projects">
        <div class="title">
            <h1 class="center">Projects</h1>
            <p class="center">I am eager to take on new challenges and contribute to the success of your team. I look forward to the opportunity to work with you and further develop my skills.</p>
        </div>
        <div class="projects">
            <div class="tags">
                <div class="tag" :class="{active: activeTags.includes(tag)}" :key="tag" v-for="tag in tags" @click="toggleTag(tag)">{{tag}}</div>
            </div>
            <swiper 
                class="cards"
                :modules="modules"
                :slidesPerView="isMobile ? 1.3 : 3.5"
                :spaceBetween="30"
                :freeMode="isMobile ? false : true"
                :slidesOffsetBefore="50"
            >
                <swiper-slide class="card" v-for="(project, index) in filteredProjects" :key="index">
                        <div class="card-header" :style="{'backgroundImage': `url('/img/projects/${project.img}')`}">
                            <div class="tags">
                                <div class="tag" :class="{active: activeTags.includes(tag)}" :key="tag" v-for="tag in project.tags">{{tag}}</div>
                            </div>
                            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="view btn-primary">View project</a>
                        </div>
                        <div class="card-body">
                            <h2>{{project.name}}</h2>
                            <p>{{project.description}}</p>
                        </div>
                        <div class="card-footer">
                            <!-- <img :src="imgPath2" alt=""> -->
                            <!-- <img src="~/assets/img/projects/calypso.webp" alt="project image"> -->
                        </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import "swiper/css";
    import { FreeMode, Virtual } from "swiper";
    export default {
        name: 'Projects',
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                activeTags: [],
                modules: [FreeMode, Virtual],
                swiperRef: null,
                projects: [
                    { 
                        name: 'Portfolio',
                        tags: ['Nuxt.js', 'Vue.js', 'SCSS'],
                        description: 'My personal portfolio website. Hosted on Netlify.',
                        link: 'https://github.com/Alexmdz77/portfolio-v2',
                        img: 'portfolio.webp',
                    },
                    { 
                        name: 'ItsMyEmbed',
                        tags: ['Node.js', 'TypeScript', 'SQLite'],
                        description: 'Self-hosted Discord Bot for managing advanced messages through YAML files.',
                        link: 'https://builtbybit.com/resources/itsmyembed.28488/',
                        img: 'itsmyembed.webp',
                    },
                    { 
                        name: 'CMS From Scratch',
                        tags: ['PHP', 'MySQL', 'HTML', 'SCSS'],
                        description: 'A CMS from scratch. A 3rd year ESGI school project with a team of 5 people.',
                        link: 'https://github.com/yungmides/CMSFromScratch',
                        img: 'cmsfromscratch.webp',
                    },
                    { 
                        name: 'Discord Bot Template',
                        tags: ['Node.js', 'TypeScript', 'MongoDB'],
                        description: 'A template for a Discord bot.',
                        link: 'https://github.com/Alexmdz77/DiscordBotTSV14',
                        img: 'discordtemplate.webp',
                    },
                    { 
                        name: 'Calypso v1',
                        tags: ['Node.js', 'JavaScript', 'SQLite'],
                        description: 'A public Discord bot that allow users to manage their own server and add some features to it (moderation, music, etc).',
                        link: 'https://github.com/CalypsoDiscordBot/calypso',
                        img: 'calypso.webp',
                    },
                    { 
                        name: 'API REST Justify',
                        tags: ['Node.js', 'Express.js', 'SQLite'],
                        description: 'A REST API that allows you to justify a text. Hosted on Heroku.',
                        link: 'https://github.com/Alexmdz77/API-REST-justify',
                        img: 'api-rest-justify.webp',
                    },
                ],
            }
        },

        computed: {
            tags() {
                const tags = []
                this.projects.forEach(project => {
                    project.tags.forEach(tag => {
                        if (!tags.includes(tag)) {
                            tags.push(tag)
                        }
                    })
                })
                return tags
            },
            filteredProjects() {
                if (this.activeTags.length === 0) {
                    return this.projects
                }
                return this.projects.filter(project => {
                    return project.tags.some(tag => this.activeTags.includes(tag))
                })
            },
            isMobile() {
                if(process.client) {
                    return window.innerWidth < 768
                } else {
                    return false
                }
            }
        },
        methods: {
            setSwiperRef(swiper) {
                this.swiperRef = swiper
            },
            toggleTag(tag) {
                if (this.activeTags.includes(tag)) {
                    this.activeTags = this.activeTags.filter(activeTag => activeTag !== tag)
                } else {
                    this.activeTags.push(tag)
                }
            },
        }
    }
</script>
<style lang="scss">

#projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;

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

    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        width: 100%;

        > .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;
            
            @include breakpoint(mobile) {
                display: none !important;
            }

            > .tag {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 8px 20px;
                gap: 10px;

                font-weight: 700;
                font-size: 12px;
                line-height: 15px;
                color: #FFFFFF;

                border: 1.5px solid #32363A;
                backdrop-filter: blur(1.5px);
                border-radius: 8px;
                
                user-select: none;
                cursor: pointer;

                &:hover {
                    background: rgba(50, 54, 58, 0.6);
                    border: 1.5px solid #3DA07C;
                }

                &.active {
                    background: #44B58C;
                    border: unset;
                    border: 1.5px solid #44B58C;
                }
            }
        }

        .cards {
            width: calc(100% + 100px);
            left: -50px;
            cursor: grab;


            @include breakpoint(mobile) {
            width: calc(100% + 100px);
                left: -50px;
            }


            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 70px;
                height: 100%;
                background: linear-gradient(-90deg, rgba(24, 25, 27, 0) 5%, #18191b 99%);
                z-index: 10;
                pointer-events: none;
            }

            &::after {
                content: '';
                // fade out effect
                position: absolute;
                top: 0;
                right: 0;
                width: 70px;
                height: 100%;
                background: linear-gradient(90deg, rgba(24, 25, 27, 0) 5%, #18191b 99%);
                z-index: 10;
                pointer-events: none;
            }


            .card {
                display: flex;
                flex-direction: column;
                border: 1.5px solid #32363A;
                background: #212427;
                border-radius: 8px;
                transition: box-shadow 0.2s ease-in-out;
                height: auto;

                &:hover {
                    box-shadow: 0px 2px 24px rgba(255, 255, 255, 0.08);
                }


                .card-header {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: left;

                    padding: 30px;

                    width: 100%;
                    height: 350px;
                    background-size: cover;
                    background-position: center;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(180deg, #212427 0%, rgba(33, 36, 39, 0) 50%);
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        // background: linear-gradient(180deg, rgba(33, 36, 39, 0) 80%, #212427 100%);
                    }

                    > .tags {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: left;
                        gap: 10px;
                        z-index: 1;

                        > .tag {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            padding: 8px 20px;
                            gap: 10px;

                            font-weight: 700;
                            font-size: 12px;
                            line-height: 15px;
                            color: #FFFFFF;

                            background: rgba(50, 54, 58, 0.6);
                            backdrop-filter: blur(1.5px);
                            border-radius: 8px;

                        }
                    }
                    .view {
                        position: absolute;
                        bottom: -21px;
                        z-index: 1;
                    }
                }

                .card-body {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 16px;

                    padding: 30px;
                    padding-top: 43px;


                    h2 {
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 20px;
                        color: #FFFFFF;
                    }

                    p {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 19px;
                        color: #FFFFFF;
                    }
                }

            }
        }
    }

}
</style>