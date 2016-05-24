var mymedia = null;

function isReady(){
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log("isReady");
}

function onDeviceReady(){
  console.log("onDeviceReady");
  mymedia = new Media("/android_asset/www/audio/2.mp3", stopAudio, function(error){
    console.log(error.message);
  });
}

function stopAudio(){
  console.log("stop");
  if(mymedia){
    mymedia.stop();
    mymedia.release();
  }
}
$(document).ready(function(){
  
    $('#botunt').click(function(event){
      console.log("botunt");
        mymedia.play();
    });
});