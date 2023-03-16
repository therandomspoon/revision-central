function checkTimeAndPlay() {
  var date = new Date();
  // Check if time is 16:12:54
  if (date.getHours() == 13 && date.getMinutes() == 07 && date.getSeconds() == 22)
    document.getElementById('Breaking Bad.mp4').play();
  else {
    console.log("Time isn't match");
    setTimeout(checkTimeAndPlay, 1);
  }
}
checkTimeAndPlay();
