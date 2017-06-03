/**
 * Created by Aleksander on 6/3/2017.
 */
var myVideo;
// Get the modal
var modal;
// Get the button that opens the modal
var btn;
// Get the <span> element that closes the modal
var span;


window.onload = function () {
    myVideo = document.getElementById('video1');
    modal  = document.getElementById('myModal');
    btn = document.getElementById('myBtn');
    span = document.getElementsByClassName('close')[0];
};


function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function stopVideo() {
    myVideo.pause();
    myVideo.currentTime = 0;
}

function setVolume () {
    myVideo.volume = document.getElementById("volume1").value;

}

// When the user clicks the button, open the modal
function showModal() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
