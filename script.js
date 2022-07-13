const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMais = document.querySelector('.mais')
const buttonMenos = document.querySelector('.menos')
let minutes 
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut
const buttonFloresta = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonLareira = document.querySelector('.lareira')
const buttonCafeteria = document.querySelector('.cafeteria')
const florestaaudio = new Audio("Floresta.wav")
const chuvaaudio = new Audio("Chuva.wav")

const lareiraaudio = new Audio("Lareira.wav")

const cafeteriaaudio = new Audio("cafeteria.wav")





//==================botoes=====================

buttonFloresta.addEventListener('click', function(){
  toggleAudioPlay(florestaaudio)
  lareiraaudio.pause()
  cafeteriaaudio.pause()
  chuvaaudio.pause()

})

buttonChuva.addEventListener('click', function(){
  toggleAudioPlay(chuvaaudio)
  florestaaudio.pause()
  lareiraaudio.pause()
  cafeteriaaudio.pause()



})

buttonLareira.addEventListener('click', function(){
  toggleAudioPlay(lareiraaudio)
  florestaaudio.pause()
  cafeteriaaudio.pause()
  chuvaaudio.pause()


})

buttonCafeteria.addEventListener('click', function(){
  toggleAudioPlay(cafeteriaaudio)
  florestaaudio.pause()
  chuvaaudio.pause()
  lareiraaudio.pause()




})

buttonMais.addEventListener('click', function() {

})

buttonMenos.addEventListener('click', function() {
  
})



buttonPlay.addEventListener('click', function() {
    play()
    countdown()
})

buttonPause.addEventListener('click', function() {
   pause()
})

buttonStop.addEventListener('click', function() {
Stop()
})


buttonMais.addEventListener('click', function(){
  maiscinco()
})


buttonMenos.addEventListener('click', function(){
  menoscinco()
})

//======================Funcoes=================


function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
     if (isPaused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }




function menoscinco() {
  let minutes = Number(minutesDisplay.textContent)
 if (minutes) {
  minutes - 5
  minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
 } 
}

function maiscinco() {
  let minutes = Number(minutesDisplay.textContent)
 if (minutes) {
  minutes +5
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
 } 
}

 function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = "00"

    if (minutes <= 0 && seconds <= 0) {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")


    countdown()

  }, 1000)
 }



function Stop() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  resetTaimer()

}

function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

function pause() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut)
}

function updateTaimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(5).padStart(2, "0")
  secondsDisplay.textContent = String(0).padStart(2, "0")
}

function resetTaimer() {
  updateTaimerDisplay()
}



