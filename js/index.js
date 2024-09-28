 // Import the functions you need from the SDKs you need
 

console.log("SHIFT + CTRL + R TO CLEAR CASH")
console.log("THIS IS A NEW MESSAGE!")
 

var numstr = -1;  // used to refer to the clicked pinpoint

function launchPassword(element) {  // is called when some pinpoint is beeing clicked
  // Perform your action here
  var overlay = document.getElementById("overlay");
  numstr = element.id.slice(3);     // update pinpoint number
  console.log(numstr);
  overlay.classList.remove("hideme");
};

function hidePassword() {    // is called when password prompt shall be hidden
  // Perform your action here
  var overlay = document.getElementById("overlay");
  overlay.classList.add("hideme");

};





function redirect(element) {    // function to redirect if right password was entered
  /* pin id exists */
  console.log("start");
  console.log(numstr);

  var password = document.getElementById("pswinp").value;   // fetch password
  console.log(password);
  var fileUrl = "html/page"+ numstr + password +".html";    // create URL
  console.log(fileUrl);
  fetch(fileUrl, { method: 'HEAD' })   // check if URL exists ONLY works with internet connection
    .then(function(response) {
      if (response.ok) {
        console.log('File exists.');
        var tube = document.getElementById("tubesound");
        tube.play();
        console.log(fileUrl);
        setTimeout(function() {
        window.location.href = fileUrl;   // redirect on same tab
        /*window.open(fileUrl, '_blank');*/ // redirect in new tab (does not work at all on iphone safari)
        }, 1000);

      } else {                                    // disblay error message 
        console.log('File does not exist.');
        var diesound = document.getElementById("diesound");
        diesound.play();
        var wrongpsw = document.getElementById("wrongpsw");
        wrongpsw.style.opacity = 1;
        setTimeout(function() {
          wrongpsw.style.opacity = 0;
        }, 3000);
        }
    })
    .catch(function(error) {
      console.log('Error:', error);
    });

};

function showspeech() {
  var speech = document.getElementById("speech");
  speech.style.opacity = 0.9;
};

function hidespeech() {
  var speech = document.getElementById("speech");
  speech.style.opacity = 0;
};






/* Manikin moveee */
document.onkeydown = detectKey;



// Capture the keydown event PREVENT THE ARROWKEYS FROM SCROLING
document.addEventListener('keydown', function(event) {
  // Check if the arrow keys are pressed
  if (event.keyCode >= 37 && event.keyCode <= 40) {
    // Prevent the default behavior of arrow keys (scrolling)
    event.preventDefault();
  }
});



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('mario').style.marginTop = 1000 + "px";
  document.getElementById('mario').style.marginLeft = 2000 + "px";
});
function detectKey(e) {

    var posLeft = document.getElementById('mario').offsetLeft;
    var posTop = document.getElementById('mario').offsetTop;


    e = e || window.event;
    const stepsize = 25;

    if (e.keyCode == '38') {
        // up arrow
         posTop = (posTop - stepsize);
    }
    else if (e.keyCode == '40') {
        // down arrow
        posTop  = (posTop + stepsize);
    }
    else if (e.keyCode == '37') {
       // left arrow
        posLeft = (posLeft - stepsize);
    }
    else if (e.keyCode == '39') {
       // right arrow
        posLeft  = (posLeft + stepsize);
    }

  document.getElementById('mario').style.marginTop = posTop + "px";
  document.getElementById('mario').style.marginLeft  = posLeft + "px";

  let marioPosition = { top: posTop, left: posLeft};

    checkMarioPosition(marioPosition);

}

const mario = document.getElementById('mario');

function checkMarioPosition(marioPosition) {
  // Define the desired location
  const desiredLocation = { top: 0, left: 0 };
  console.log(marioPosition);

  // Check if Mario has reached the desired location
  if ( 700 <= marioPosition.top && marioPosition.top <= 750 && marioPosition.left <= 1425 && marioPosition.left >= 1375 ) {
    // Mario has reached the desired location
    console.log('Mario has reached the desired location!');
    var overlay = document.getElementById("overlay");
    numstr = "007";     // update pinpoint number
    console.log(numstr);
    var imageoverlay = document.getElementsByClassName("image-overlay")[0];

    imageoverlay.style.backgroundImage  = 'url("media/purplebox.png")';
    overlay.classList.remove("hideme");
  } else {
    var overlay = document.getElementById("overlay");
    var imageoverlay = document.getElementsByClassName("image-overlay")[0];
    imageoverlay.style.backgroundImage  = "url('media/mariobox05.png')";

  }

    // Perform additional actions or trigger events here
  }