
let correct = 0
let incorrect = 0
let timeleft = 60

var downloadTimer = setInterval(function(){
document.getElementById("countdown").innerHTML = timeleft;
timeleft -= 1;

if(timeleft <= -1){
  
    clearInterval(downloadTimer);

    if (document.getElementById("defaultInline1").checked) {
        correct++
    }

    if (document.getElementById("defaultInline8").checked) {
        correct++
    }

    if (document.getElementById("defaultInline11").checked) {
        correct++
    }

    if (document.getElementById("defaultInline14").checked) {
        correct++
    }

    if (document.getElementById("defaultInline20").checked) {
        correct++
    }

    if (document.getElementById("defaultInline21").checked) {
        correct++
    }

    if (document.getElementById("defaultInline27").checked) {
        correct++
    }

    if (document.getElementById("defaultInline32").checked) {
        correct++
    }

    incorrect = 8 - correct

    $("#littlebox").empty()
    $("#countdown").text("Time's up!")
   
    $("#littlebox").append("<p class='endgame'> Correct answers: " + correct + "</p>")
    $("#littlebox").append("<p class='endgame'> Incorrect answers: " + incorrect + "</p>")
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

$(".btn").click(function() {
      
    clearInterval(downloadTimer);

    if (document.getElementById("defaultInline1").checked) {
        correct++
    }

    if (document.getElementById("defaultInline8").checked) {
        correct++
    }

    if (document.getElementById("defaultInline11").checked) {
        correct++
    }

    if (document.getElementById("defaultInline14").checked) {
        correct++
    }

    if (document.getElementById("defaultInline20").checked) {
        correct++
    }

    if (document.getElementById("defaultInline21").checked) {
        correct++
    }

    if (document.getElementById("defaultInline27").checked) {
        correct++
    }

    if (document.getElementById("defaultInline32").checked) {
        correct++
    }

    incorrect = 8 - correct

    $("#littlebox").empty()
    $("#countdown").text("Here's how you did!")
   
    $("#littlebox").append("<p class='endgame'> Correct answers: " + correct + "</p>")
    $("#littlebox").append("<p class='endgame'> Incorrect answers: " + incorrect + "</p>")
    $('html, body').animate({ scrollTop: 0 }, 'fast');

  });


}, 1000);
