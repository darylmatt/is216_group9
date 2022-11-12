const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            hello: "Hello",
            name: "Mariam",
            welcome_msg: "How can we help you today?",
            edit_profile: "EDIT PROFILE",
            upcoming_activities: "Upcoming Activities:",
            guide_and_resources: "Guides & Resources",
            social_plus: "Social+",
            forum_title: "Forum",
            forum_desc: "Post and respond to threads by other domestic helpers facing similar issues as you. Connect with them here.",
            forum_btn: "POST A THREAD",
            activity_title: "Activity",
            activity_desc: "Participate in activities with other domestic helpers with similar interests as you. Join today and make new friends!",
            activity_btn: "FIND ACTIVITY",
            guides: "Guides",
            guides_navigate_title: "Carrying Out Your Responsibilities",
            guides_navigate_desc: "Find out more about what you need to do as a helper and other soft skills you might need",
            guides_navigate_btn: "READ GUIDES",
            guides_rights_title: "My Rights As A Domestic Helper",
            guides_rights_desc: "Know more about your rights to help you with any questions you have and to protect yourself",
            guides_rights_btn: "LET'S BEGIN",
            guides_resources_title: "Assimilating Into Singapore",
            guides_resources_desc: "Unfamiliar with your new surroundings? Explore our resources for navigating Singapore!",
            guides_resources_btn: "EXPLORE NOW",
            wellness: "Wellness",
            breather_title: "Take a Breather",
            breather_desc: "Feeling anxious or stressed out? Breathing exercises are known to calm people down and make them feel better.",
            breather_btn: "START BREATHING",
            health_title: "Be Physically Well",
            health_desc: "Finding healthcare institutions like clinics or hospitals can be difficult if you don't know where to look. Fret not, we have you covered",
            health_btn: "SEARCH NOW",
            journal_title: "Journal Your Thoughts",
            journal_desc: "Writing down your thoughts and emotions is a good way of understanding yourself better and how you're feeling. Start Journalling to have a peace of mind.",
            journal_btn: "JOURNAL NOW",
            words_of_wisdom: "Words Of Wisdom",
            words_of_wisdom_desc: "We just need some golden advice at times. Explore our mental wellness articles for encouragement and advice.",
            words_of_wisdom_btn: "BEGIN READING",

            show_sos_dialog: false,

            // fas fa-window-close fa-xl

            show_translate_option: false,

            show_sos_confirmation:false


        }
    },

    created(){
        
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
        translate(){
            axios.get("http://localhost:3000/HomeLandingAbout/homepage.html").then( response => { 
        
            translation = response.headers.translation;
            console.log(translation);
            translations = translation.split(' ~ ');
            /*
            this.hello = translations[0]
            this.welcome_msg = translations[1]
            this.edit_profile = translations[2]
            this.upcoming_activities = translations[3]
            */

            this.hello = translations[0],
            this.welcome_msg = translations[1],
            this.edit_profile = translations[2],
            this.upcoming_activities = translations[3],
            this.guide_and_resources = translations[4],
            this.social_plus = translations[5],
            this.forum_title = translations[6],
            this.forum_desc = translations[7],
            this.activity_title = translations[8],
            this.activity_desc= translations[9],
            this.activity_btn = translations[10],
            this.guides= translations[11],
            this.guides_navigate_title= translations[12],
            this.guides_navigate_desc= translations[13],
            this.guides_navigate_btn= translations[14],
            this.guides_rights_title= translations[15],
            this.guides_rights_desc= translations[16],
            this.guides_rights_btn= translations[17],
            this.guides_resources_title= translations[18],
            this.guides_resources_desc= translations[19],
            this.guides_resources_btn= translations[20],
            this.wellness= translations[21],
            this.breather_title= translations[22],
            this.breather_desc= translations[23],
            this.breather_btn = translations[24],
            this.words_of_wisdom= translations[25],
            this.words_of_wisdom_desc= translations[26],
            this.words_of_wisdom_btn= translations[27],
            this.journal_title= translations[28],
            this.journal_desc= translations[29],
            this.journal_btn= translations[30],
            this.health_title= translations[31],
            this.health_desc= translations[32],
            this.health_btn = translations[33],

            document.getElementById("indo").style.backgroundColor="rgb(255, 255, 234)"
            document.getElementById("en").style.backgroundColor="white"
            
        

        })
    },

    translate_dialog(){
        // Check if its an open or close command
        if (this.show_translate_option){
            this.show_translate_option = false
        }
        else{
            this.show_translate_option = true
        }

     

    }
    }
    // Other stuff
})
root.component("translate-template", {
    template :
    `
    <button type="button" id="translate_btn"
    class="btn btn-floating btn-outline-secondary bg-white">
    <i v-show="!show_translate_option" class="fas fa-language fa-xl"></i>
    <i v-show="show_translate_option" class="fas fa-window-close fa-xl"></i>
    </button>

    <div class="card" id="translate_option" v-show="show_translate_option">
        <div class="card-body">
        <h5 class="card-title">Select preferred language</h5>

        <div>
            <button type="button" id="en" onClick="window.location.reload();" class="btn w-100" style="background-color:rgb(255, 255, 234)">
            <i class="flag-singapore flag float-start"></i>
            English
            </button>
        </div>

        <div>
            <button type="button" id="indo" class="btn w-100">
            <i class="flag-indonesia flag float-start"></i>
            Bahasa Indonesia
            </button>
        </div>

        <div>
            <button type="button" class="btn w-100">
            <i class="flag-myanmar flag float-start"></i>
            Burmese
            </button>
        </div>

        <div>
            <button type="button" class="btn w-100">
            <i class="flag-philippines flag float-start"></i>
            Tagalog
            </button>
        </div>

        </div>


    </div>
    `
})
root.component("sos-template", {
    template:
    `
    <button type="button" id="sos_btn" class="btn btn-floating sos_btn btn-danger fw-bolder" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop">
    <h5 v-show="!show_sos_dialog" class="m-auto">SOS</h5>
    </button>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5 text-danger" id="staticBackdropLabel">Request for SOS</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <p class="text-warning">⚠️BEFORE YOU PROCEED:⚠️</p>
            <ul>
                <li>
                <div>
                    Choosing "Confirm" will send an immediate help alert to the <mark>Singapore Police</mark>.
                </div>
                </li>
                <li>
                <div>
                    All information shared with us remains <span style="text-decoration: underline;">confidential</span>.
                </div>
                </li>
            </ul>
            <hr>
            <div class="text-danger text-center">
                Please do not abuse this function.
            </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary " data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary btn-danger float-end"
                data-bs-dismiss="modal">Confirm</button>
            </div>
        </div>
        </div>
    </div>
    `
})

root.mount("#root")
