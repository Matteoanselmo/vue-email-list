const app = new Vue({
    el: '#app',
    data: {
        randomMail: ['']
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
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(response){
                    const result = 
                    self.randomMail[i].push(response.data.response);
                    // console.log(result.data.response);
            })
        }
    }
})


