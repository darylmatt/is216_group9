var count = 1;

var prev_button = document.getElementById("prev_button");
var next_button = document.getElementById("next_button");

prev_button.addEventListener("click", prev_page);
next_button.addEventListener("click", next_page);

function prev_page() {
    count -= 1;
    output_step();
    button_change();

}

function next_page() {
    count += 1;
    output_step();
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
        <h1 class="step">Breathe in through your nose to the count of four. Imagine taking in all of your surroundings.</h1>
        <h1 class="step">Inhale deeply.</h1>
        `
    }

    else if(count == 3){
        breather_steps.innerHTML = 
        `
        <h1 class="step">Hold your breath.</h1>
        <h1 class="step">Hold your breath to the count of seven.</h1>
        <h1 class="step">Feel your self preparing to release the stress and anxiety</h1>
        `
    }

    else if(count == 4){
        breather_steps.innerHTML = 
        `
        <h1 class="step">Breathe out.</h1>
        <h1 class="step">Exhale through your mouth to the count of eight.</h1>
        <h1 class="step">Breathe out and release all the stress and anxiety built up.</h1>
        `
    }

    else{
        breather_steps.innerHTML = 
        `
        <h1 class="step">Now you're ready to begin.</h1>
        <h1 class="step">Click 'Start' once you are ready.</h1>
        <h1 class="step">Go back if you need to see the instructions again.</h1>
        `
    }
}