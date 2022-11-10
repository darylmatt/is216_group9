const root = Vue.createApp({

    // Data Properties
    data() {
        return { 

            // ALL facilities arrray of objects
            facilities: [],
            
            subCategories : [],

            selectedArray : [],

            selectedLocation : '',
            
        }
    },

    created(){
        axios.get("http://localhost:3000/HealthIsWealth/Physical_Health/physical_health_places.html")
        .then( response => { 

            // fetch data
            this.facilities = JSON.parse(response.headers.facilities);
            var facilities = this.facilities

            // create subCategories array
            for (let index = 0; index < facilities.length; index++) {
                this.subCategories.push(facilities[index].sub_category)
                // console.log(facilities[index])
            }
            
        }
         );
    }, 

    // Methods
    methods: {

        fetchSelectedArray(category){

            this.selectedArray = []
            // create array of filtered category
            var facilitiesArray = this.facilities

            for (let index = 0; index < facilitiesArray.length; index++) {
         
                if (facilitiesArray[index].sub_category == category){
                    this.selectedArray.push(facilitiesArray[index])
                }
            }

            var tableBodyDiv = document.getElementById('tableBody')
            var tableStr = '';
            console.log(tableBodyDiv)
  

            for(var facility of this.selectedArray) {
                
                var name = facility.facility_name
                var location = facility.address
                var postal = facility.postal
                var contact = facility.phone
                var hours = facility.hours

                tableStr += `<tr>
                    <td>${name}</td>
                    <td>${location}</td>
                    <td>${postal}</td>
                    <td>${contact}</td>
                    <td>
                        <button value="${name}" onclick ="setSearchValue()" type="button" class="btn btn-sm text-light" style='background-color:#9a616d;'>Get Directions</button>
                    </td>
                </tr>`      

         
            }

            tableBodyDiv.innerHTML  = tableStr;   
        },


        // setSearchValue(name){

        //     console.log('hello')
        //     var value = document.getElementById('addr')
        //     value.setAttribute('value', name)

        // }


    }
})

root.mount("#root")


function setSearchValue(){

    console.log('hello')
    // var value = document.getElementById('addr')
    // value.setAttribute('value', name)

}


function fillTitle(id){
    var modalTitle = document.getElementById('modalHeader')
    var text = id.toUpperCase()
    modalTitle.innerText = text;
}

