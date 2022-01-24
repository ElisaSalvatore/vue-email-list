new Vue({
    el:'#app',
    data: {
        emailList: [],
    },
    methods: {
        newEmail: function() {
            for (let i=0; i<10; i++) {
                axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                    this.emailList.push(email.data.response)
                })
            }
        }
    },
    mounted: function() {
        this.newEmail();
    }
})