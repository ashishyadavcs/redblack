var images = new Array();
images = [
  "https://images.unsplash.com/photo-1504763218308-645dc9602d3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1501908734255-16579c18c25f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

for (image of images) {
  document.querySelector(".items").innerHTML += `<img src="${image}"/>`;
  playAudio();
}
document.querySelector('button').click();
document.querySelector('.divnum').innerHTML="stop"

function playAudio() {
  var song = new Audio();
  song.src = "./public/sound/mixkit-aggressive-beast-roar-13.wav";
  song.play();
  setInterval(function(){
   song.src='./public/sound/mixkit-classic-alarm-995.wav';
   song.play();
   setInterval(function(){
song.src='./public/sound/mixkit-arcade-fast-game-over-233.wav';
song.play();
   },2000)
  

  },2000)
}
function stopS(){
Audio.stop();
}