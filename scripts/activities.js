console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            activities: "",
        }
    },

    created(){
        axios.get("http://localhost:3000/Social/Activities/activities_landing.html").then( response => { 
            this.activities = JSON.parse(response.headers.activities);
        }
         );
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
        
        

    }
    // Other stuff
})

root.mount("#root")