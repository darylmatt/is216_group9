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
        axios.get("http://localhost:3000/Guides/guide_rights.html")
        .then( response => { 

            // fetch data
            this.guides = JSON.parse(response.headers.guides);

            var guides = this.guides

            // create filteredGuides array
            for (let index = 0; index < guides.length; index++) {
                if(guides[index].guide_category == 'Rights'){
                    this.filteredGuides.push(guides[index])
                }
    
            }
            
        }
        );
    }, 

    // Methods
    methods: {

        fillContent(id){
            
            var modalContent = document.getElementById('modalContent')
            var modalHeader = document.getElementById('modalHeader')

            console.log(modalContent)
            for (let index = 0; index < this.filteredGuides.length; index++) {
         
                if(this.filteredGuides[index].guide_id == id){
                    console.log(this.filteredGuides[index].guide_content)
                    modalContent.innerHTML =  "<h3>" + this.filteredGuides[index].guide_content + "</h3>"
                    modalHeader.innerText = this.filteredGuides[index].guide_title
                }
            }
        }



    }
})

root.mount("#root")




