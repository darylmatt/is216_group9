
console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return {
            facilities: "", 

        }
    },

    created(){
        axios.get("http://localhost:3000/HealthIsWealth/Physical_Health/physical_health_places.html").then( response => { this.facilities = response.facilities});
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
        
        

    }
    





    
    // Other stuff

})

root.mount("#root")