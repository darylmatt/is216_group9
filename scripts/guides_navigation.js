const root = Vue.createApp({

    // Data Properties
    data() {
        return { 

            // ALL facilities arrray of objects
            guides: [],

            filteredGuides : [],
            
         
            
        }
    },

    created(){
        axios.get("http://localhost:3000/Guides/guide_navigation.html")
        .then( response => { 

            // fetch data
            this.guides = JSON.parse(response.headers.guides);

            var guides = this.guides

            // create subCategories array
            for (let index = 0; index < guides.length; index++) {
                if(guides[index].guide_category == 'navigation'){
                    this.filteredGuides.push(guides[index])
                }
    
            }
            
        }
        );
    }, 

    // Methods
    methods: {





    }
})

root.mount("#root")



