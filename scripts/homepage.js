console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            hello: "Hello",
            name: "Mariam",
            welcome_msg: "How can we help you today?",
            edit_profile: "EDIT PROFILE",
            upcoming_activities: "Upcoming activities:",
            guide_and_resources: "Guides & Resources"

        }
    },

    created(){
        
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
       
        

    }
    // Other stuff
})

root.mount("#root")
