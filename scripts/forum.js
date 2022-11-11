console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            threads: "",
        }
    },

    created(){
        axios.get("http://localhost:3000/Social/Forum/forum.html").then( response => { 
            this.threads = JSON.parse(response.headers.threads);
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
