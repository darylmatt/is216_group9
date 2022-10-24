const root = Vue.createApp({

    data() {
        return {

            newEventName: '',

            newLocation: '',

            newDate: '',

            numPax: '',

            newCat: '',

            eventDesc: '',

            error_msg: '',

            show: false,

            img_link:'',


        }


    },

    methods: {
        validate_and_add() {
            //Validate the field
            this.show = false

            // console.log(this.newDate)

            // var today = new Date()
            // var dd = today.getDate()

            // var mm = today.getMonth() + 1
            // var yyyy = today.getFullYear()
            // var today = yyyy+'-'+mm+'-'+dd

            // console.log(this.newDate.getTime())
            

            // console.log(today)

            if (this.newEventName.trim().length == 0 || this.newLocation.trim().length == 0 || this.newDate.length == 0 || this.numPax.length == 0 || this.newCat.length == 0 || this.eventDesc.trim().length == 0) {
                this.show = true
                this.error_msg = "All fields are required!"
                return
            }

            else if (this.numPax <= 1) {
                this.show = true
                this.error_msg = "Number of pax must be greater than 1"
                return
            }
        }

    }

})

root.mount("#root")

