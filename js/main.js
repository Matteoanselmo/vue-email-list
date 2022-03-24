const app = new Vue({
    el: '#app',
    data: {
        randomMail: ''
    },
    methods: {
        randomMailGenerator(mail){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(response){
                    mail = response.data.response;
                    // console.log(result.data.response);
            })
        }
    },
    created(){},
    mounted(){
        const self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(response){

                    self.randomMail = (response.data.response);
                    // console.log(result.data.response);
            })
    }
})


