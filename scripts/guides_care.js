console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            guides: "",
        }
    },

    created(){
        axios.get("http://localhost:3000/Guides/guide_care.html").then( response => { 
            this.guides = JSON.parse(response.headers.guides);
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