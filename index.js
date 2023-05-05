const keys=document.querySelectorAll(".key")

window.addEventListener("keydown",function(e){
  const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const div=document.querySelector(`div[data-key="${e.keyCode}"]`)
  div.classList.add("playing")
  if(!audio)return
audio.currentTime=0
  audio.play()

})
keys.forEach(function(i){
    console.log(i);
    i.addEventListener("transitionend",function(e){
        console.log(e);
        if(e.propertyName
            !=="transform") return
        this.classList.remove("playing")
    })
})