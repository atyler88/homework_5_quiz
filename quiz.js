function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
            timer = duration;
        }
        if(timer === 0){
            // alert("times Up");
            $("#target").clear();
        }
    }, 1000);
  }
  
  window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('.time');
    startTimer(fiveMinutes, display);
  };

//   $(".submit").click(function(event){
//       alert("you clicked submit");
//       event.preventDefault();
//   });

//   $( "#target" ).submit(function( event ) {
//     alert( "Handler for .submit() called." );
//     event.preventDefault();
//   });