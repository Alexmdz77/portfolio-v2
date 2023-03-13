<template>
    <div id="contact">
        <div class="title">
            <h1 class="center">Contact</h1>
        </div>
        <div class="col-2">
            <div>
                <p>I am eager to take on new challenges and contribute to the success of your team.</p>
                <p>Thank you for considering me for your project.I look forward to the opportunity to work with you and further develop my skills.</p>
                <p class="mail">alexandretrv@gmail.com</p>
                <div class="links">
                    <a href="https://github.com/Alexmdz77" target="_blank"><img src="@/assets/img/github.svg" alt="github"/></a>
                    <a href="https://www.linkedin.com/in/alexandre-trouve/" target="_blank"><img src="@/assets/img/linkedin.svg" alt="linkedin"/></a>
                    <a href="https://twitter.com/Alexmdz77" target="_blank"><img src="@/assets/img/twitter.svg" alt="twitter"/></a>
                </div>
            </div>
            <div class="form">
                <p>Let us know more about you !</p>
                <div class="col-2">
                    <div class="input">
                        <input type="text" id="firstname" placeholder=" " v-model="form.firstname"/>
                        <label for="firstname">Firstname</label>
                    </div>
                    <div class="input">
                        <input type="text" id="lastname" placeholder=" " v-model="form.lastname"/>
                        <label for="lastname">Lastname</label>
                    </div>
                </div>
                <div class="input">
                    <input type="email" id="email" placeholder=" " v-model="form.email"/>
                    <label for="email">Email</label>
                </div>
                <div class="input">
                    <textarea id="message" cols="30" rows="10" placeholder=" " v-model="form.message"></textarea>
                    <label for="message">Message</label>
                </div>
                <a class="btn-primary btn-border" @click="sendEmail()">Send</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form : {
                firstname: '',
                lastname: '',
                email: '',
                message: ''
            }
        }
    },

    methods: {
        sendEmail() {
            if(this.form.firstname === '' || this.form.lastname === '' || this.form.email === '' || this.form.message === '') return console.log('Please fill all the fields');
            this.$mail.send({
                to: '',
                from: this.form.email,
                subject: 'Contact form from ' + this.form.firstname + ' ' + this.form.lastname,
                text: this.form.message,
            }).then(() => {
                this.form = {
                    firstname: '',
                    lastname: '',
                    email: '',
                    message: ''
                }
                console.log('Email sent')
            })
        }
    }
}
</script>

<style lang="scss" scoped>

#contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    max-width: 900px;

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
        grid-gap: 70px;
        align-items: flex-start;
        margin: 0 auto;
        
        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            gap: 35px;

            p {
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;

                &.mail {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 25px;
                    color: #9B9B9A;
                }
            }
        }
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 16px !important;

        position: relative;

        .col-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 14px;
            margin: 0 auto;
            width: 100%;
        }

        input, textarea {
            background: none;
            border: 1px solid #F9F9F8;
            border-radius: 8px;
            padding: 13px 16px;

            font-family: 'Sora';
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;

            width: 100%;


            &:focus {
                outline: none;
            }

            &:focus ~ label, &:not(:placeholder-shown):not(:focus) ~ label {
                transform: translateY(-20px);
            }
        }

        .input {
            position: relative;
            width: 100%;
        }

        label {
            position: absolute;
            left: 12px;
            top: 13px;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;
            
            user-select: none;
            cursor: text;
            transition: all 0.2s ease-in-out;

            background-color: #18191B;
            padding: 0 4px;
        }
    }

    .links {
        display: flex;
        flex-direction: row;
        gap: 20px;

        img {
            width: 40px;
            height: 40px;
        }
    }
}
</style>