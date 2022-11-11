
const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            activities: [],

            filteredArray: [],
            
        }
    },

    created(){
        axios.get("http://localhost:3000/Social/Activities/activities_landing.html")
        .then( response => { 
            

            
            // fetch data
            this.activities = JSON.parse(response.headers.activities);




  
        }
         );
    }, 
    // Methods
    methods: {

        filter(key){

            // filter results into seperate array
            for(let index=0; index<this.activities.length; index++){
                if(this.activities[index].activity_category == key){
                    this.filteredArray.push(this.activities[index])
                }
            }

            // create cards and append to the div
            var filterDiv = document.getElementById('filteredCardsDiv')
  


        }        
        

    }
    // Other stuff
})

root.mount("#root_activities")