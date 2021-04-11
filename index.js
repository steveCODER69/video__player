document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

var loader = document.getElementById('loader');
var videoSource = document.getElementById('video_source');
var videoPlayer = document.getElementById('video__player');
var video = document.getElementById('my-video');

function loading(){
    loader.style.display = 'flex';
    videoPlayer.style.display = 'none';
}

function loadingComplete(){
    loader.style.display = 'none';
    videoPlayer.style.display = 'flex';
}

var url_param = window.location.href;
console.log(url_param);
var res =  url_param.split('=');
var movieSource = res[1];
var posterURL = res[2];

video.setAttribute('poster' , posterURL);
videoSource.setAttribute('src' , movieSource);
loading();
setTimeout(loadingComplete , 3000)
