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

            // create subCategories array
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

        setContent(guideId){
            var contentTitle = document.getElementById('modalTitle')
            var contentDiv = document.getElementById('modalContent')
            

            for(let index = 0; index < this.filteredGuides.length; index++){
                if(this.filteredGuides[index].guide_id == guideId){
                    // contentDiv.innerHTML = this.filteredGuides[index].guide_content

                    var content = this.filteredGuides[index].guide_content.split('\n\n').join('\n\n\n\n')
                    contentDiv.innerText = content

                    var title = this.filteredGuides[index].guide_title
                    contentTitle.innerText = title

                }
            }
        }



    }
})

root.mount("#root")



