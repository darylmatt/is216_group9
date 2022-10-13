var count = 1;

// var prev_button = document.getElementById("prev_button");
// var next_button = document.getElementById("next_button");

// prev_button.addEventListener("click", prev_page);
// next_button.addEventListener("click", next_page);

// make all the statements into variables , split them into arrays of several variables at once
// and then send in all the variables into an API request for translation at the start once user loads page
// this is to lower the number of API requests
// use the variables which are now translated into the functions

function prev_page() {
    count -= 1;
    output_step();
    button_change();
}

function next_page() {
    count += 1;
    console.log(count);
    output_step();
    button_change();
}

function output_step() {
    var breather_steps = document.getElementById("steps");

    if (count == 1) {
        breather_steps.innerHTML = 
        `
        <h1 class="step">Let's Begin</h1>
        <h1 class="step">Find somewhere comfortable to sit. Preferably, somewhere quiet.</h1>
        <h1 class="step">If you can, close your eyes.</h1>
        `
    }
    else if(count == 2){
        breather_steps.innerHTML = 
        `
        <h1 class="step">Start by breathing in</h1>
        <h1 class="step">Breathe in through your nose to the count of 4 (4 seconds). Imagine taking in all of your surroundings.</h1>
        <h1 class="step">Inhale deeply.</h1>
        `
    }

    else if(count == 3){
        breather_steps.innerHTML = 
        `
        <h1 class="step">Hold your breath.</h1>
        <h1 class="step">Hold your breath to the count of seven (Hold for 7 seconds).</h1>
        <h1 class="step">Feel your self preparing to release the stress and anxiety that you are experiencing.</h1>
        `
    }

    else if(count == 4){
        breather_steps.innerHTML = 
        `
        <h1 class="step">Breathe out.</h1>
        <h1 class="step">Exhale through your mouth to the count of eight (8 seconds).</h1>
        <h1 class="step">Breathe out slowly and release all the accumulated stress and anxiety.</h1>
        `
    }

    else{
        breather_steps.innerHTML = 
        `
        <h1 class="step">Now you're ready to begin.</h1>
        <h1 class="step">Click 'Start' once you are ready.</h1>
        <h1 class="step">CLick "Previous" to go back if you need to see the instructions again.</h1>
        `
    }
}

function button_change(){
    var button_div = document.getElementById("buttons")

    if (count == 1) {
        button_div.innerHTML = 
        `
        <div class="col-1"></div>
        <div class="col-2">
            <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" disabled>
                Previous
            </button>
        </div>
        <div class="col-6"></div>
        <div class="col-2">
            <button class="btn btn-lg btn-primary" id="next_button breathing-btn" onclick="next_page()">
                Next
            </button>
        </div>
        <div class="col-1"></div>
        `
    }
    else if(count == 5) {
        button_div.innerHTML = 
        `
        <div class="col-1"></div>
        <div class="col-2">
            <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" onclick="prev_page()">
                Previous
            </button>
        </div>
        <div class="col-6"></div>
        <div class="col-2">
            <button class="btn btn-lg btn-primary breathing-btn" id="start_button" onclick="startTimer()" onclick="setTimeout(clearTimer,20000)">
                Start
            </button>
        </div>
        <div class="col-1"></div>
        `
    }
    else{
        button_div.innerHTML = 
        `
        <div class="col-1"></div>
        <div class="col-2">
            <button class="btn btn-lg btn-primary breathing-btn" id="prev_button" onclick="prev_page()">
                Previous
            </button>
        </div>
        <div class="col-6"></div>
        <div class="col-2">
            <button class="btn btn-lg btn-primary breathing-btn" id="next_button" onclick="next_page()">
                Next
            </button>
        </div>
        <div class="col-1"></div>
        `
    }
}

var time_count = 0;
var stopper = false;
function startTimer() {  

    var button_div = document.getElementById("buttons");
    button_div.innerHTML = "";

    let myTimer = setInterval(breathing, 1000);

    if (time_count != 0) {
        time_count = 0;
        clearInterval(myTimer)
    }
    console.log(time_count);
}


function breathing() {
    time_count += 1;
    var timer_div = document.getElementById("steps")

    if (time_count <= 4) {
        timer_div.innerHTML =
        `
        <h1 class="step">Breathe In for 4 seconds...</h1>
        <h1 class="step">${time_count}</h1>
        `
    }
    else if(time_count <= 11){
        timer_div.innerHTML =
        `
        <h1 class="step">Hold your breath for 7 seconds... (Till 11 seconds)</h1>
        <h1 class="step">${time_count}</h1>
        `
    }
    else if(time_count <= 20){
        timer_div.innerHTML =
        `
        <h1 class="step">Breathe out for 8 seconds... (Till 20 seconds)</h1>
        <h1 class="step">${time_count}</h1>
        `
    }

    if(time_count == 21){
        // clearInterval(myTimer);
        var button_div = document.getElementById("buttons");
        timer_div.innerHTML =
        `
        <h1 class="step">Experience Tranquility</h1>
        `;

        button_div.innerHTML = 
        `
        <div class="col-1"></div>
        <div class="col-2">
            <button class="btn btn-lg btn-primary breathing-btn" id="stop_button" onclick="startTimer()">
                Breathe Again
            </button>
        </div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-2">
        <a href="../Mental Health/mental_health_landing.html">
            <button class="btn btn-lg btn-primary breathing-btn" id="back_button">
                Go Back
            </button>
        </a>
        </div>
        <div class="col-1"></div>
        <div class="col-1"></div>
        <div class="col-2">
        <a href="../../HomeLandingAbout/homepage.html">
            <button class="btn btn-lg btn-primary breathing-btn" id="home_button">
                Home
            </button>
        </a>
        </div>
        <div class="col-1"></div>
    `
    }
}





