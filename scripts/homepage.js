const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            hello: "Hello",
            name: "Mariam",
            welcome_msg: "How can we help you today?",
            edit_profile: "EDIT PROFILE",
            upcoming_activities: "Upcoming Activities:",
            guide_and_resources: "Guides & Resources"

        }
    },

    created(){
        
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
        translate(){
            axios.get("http://localhost:3000/HomeLandingAbout/homepage.html").then( response => { 
        
            translation = response.headers.translation;
            console.log(translation);
            translations = translation.split(' ~ ');
            this.hello = translations[0]
            this.welcome_msg = translations[1]
            this.edit_profile = translations[2]
            this.upcoming_activities = translations[3]
            
        

        })
    }

    }
    // Other stuff
})

root.mount("#root")
