///FIXING THE RECORDING WHEN THE MAIN IS RELOAD
let isRecording = false;
let recognition = null;

const startRecording = () => {
  isRecording = true;
  recognition = new window.webkitSpeechRecognition();
  recognition.interimResults = true;
  recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    document.getElementById("convert_text").innerHTML = transcript;
    console.log(transcript);
  });
  recognition.start();
};

const stopRecording = () => {
  isRecording = false;
  recognition.stop();
};

document.addEventListener("DOMContentLoaded", () => {
  const clickToConvertButton = document.getElementById("click_to_convert");
  clickToConvertButton.addEventListener("click", () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  });
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

// /LOADING SCREEN DURATION
// setTimeout(function() {
//   var loading = document.getElementById("loading");
//   loading.classList.add("hidden");
// }, 5000); // 5000 milliseconds = 5 seconds
