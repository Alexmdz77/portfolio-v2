<template>
    <div id="footer">
        <p>Made with ❤️ by <a href="https://github.com/Alexmdz77/" target="_blank">Alexmdz77</a> & <a href="https://itsme.to/" target="_blank">Itsme.to️</a></p>
        <p>Alexmdz77 · 2023</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    #footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 36px 42px;

        background: #212427;
        border-width: 1.5px 1.5px 0px 1.5px;
        border-style: solid;
        border-color: #32363A;
        border-radius: 8px 8px 0px 0px;

        max-width: 1250px;
        margin: 0 auto;

        
        @include breakpoint(mobile) {
            max-width: 100%;
            padding: 16px 24px;
        }

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: $white;

            a {
                color: $white;
                text-decoration: none;
                transition: color 0.2s ease-in-out;

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
    

</style>