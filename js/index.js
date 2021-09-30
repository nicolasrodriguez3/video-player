const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);


function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

function handleBackward(){
    $video.currentTime -= 10;
}

function handleForward(){
    $video.currentTime += 10;
}

const $progress = document.querySelector("#progress")
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpload);

function handleLoaded() {
    $progress.max = $video.duration
}

function handleTimeUpload() {
    $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput)

function handleInput() {
    $video.currentTime = $progress.value;
}

const $fullscreen = document.querySelector("#fullscreen");
$fullscreen.addEventListener("click", openFullscreen);
/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
    if ($video.requestvideo) {
        $video.requestFullscreen();
    } else if ($video.webkitRequestFullscreen) { /* Safari */
        $video.webkitRequestFullscreen();
    } else if ($video.msRequestFullscreen) { /* IE11 */
        $video.msRequestFullscreen();
    }
  }