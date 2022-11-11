console.log("I'm in looping.js")

const root = Vue.createApp({

    // Data Properties
    data() {
        return { 
            hello: "Hello",
            name: "Mariam",
            welcome_msg: "How can we help you today?",
            edit_profile: "EDIT PROFILE",
            upcoming_activities: "Upcoming activities:",
            guide_and_resources: "Guides & Resources"

        }
    },

    created(){
        
    }, 
    // Methods
    methods: {

        // YOUR CODE GOES HERE IF YOU NEED ANY
        translate(){
            // TRANSLATION TESTING
            const {Translate} = require('@google-cloud/translate').v2;
            require('dotenv').config();

            const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
            console.log(CREDENTIALS);

            const translate = new Translate({
                credentials: CREDENTIALS,
                projectId: CREDENTIALS.project_id
            });

            const detectLanguage = async (text) => {

                try {
                    let response = await translate.detect(text);
                    return response[0].language;
                } catch (error) {
                    console.log(`Error at detectLanguage --> ${error}`);
                    return 0;
                }
            }

            // detectLanguage('Oggi è lunedì')
            //     .then((res) => {
            //         console.log(res);
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });

            const translateText = async (text, targetLanguage) => {

                try {
                    let [response] = await translate.translate(text, targetLanguage);
                    return response;
                } catch (error) {
                    console.log(`Error at translateText --> ${error}`);
                    return 0;
                }
            };

            translateText('Translation testing', 'fil')
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });


        }
        

    }
    // Other stuff
})

root.mount("#root")
