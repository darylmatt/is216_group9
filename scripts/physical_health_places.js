console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            facilities: "",

            selected : '',
            subCategories : [],


        }
    },

    created(){
        axios.get("http://localhost:3000/HealthIsWealth/Physical_Health/physical_health_places.html")
        .then( response => { 
            this.facilities = JSON.parse(response.headers.facilities);
            var facilities = this.facilities

            for (let index = 0; index < facilities.length; index++) {
                this.subCategories.push(facilities[index].sub_category)
                console.log(facilities[index])
                
            }


            
        }
         );
    }, 

    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY

        setSelection()
        

    }
    // Other stuff
})

root.mount("#root")



function fillTitle(id){
    var modalTitle = document.getElementById('modalHeader')
    var text = id.toUpperCase()
    modalTitle.innerText = text;
}