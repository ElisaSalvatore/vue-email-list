new Vue({
    el:'#app',
    data: {
        emailList: [],
    },
    mounted: function() {
        for (let i=0; i<10; i++) {
            this.getEmail();
        }
    },
    methods: {
        getEmail: function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                // this.emailList.push(email.data.response)
                if (!this.emailList.includes(email.data.response)) {
                    this.emailList.push(email.data.response)
                } else {
                    //l'email è duplicata
                    this.getEmail();
                }
            });
        },
    },
})