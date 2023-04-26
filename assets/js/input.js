// /////////////////////////////////////////////////////////////////////////////////////STOP RECORDING
// const clickToConvertButton = document.getElementById("click_to_convert");
// var isRecording = false; // added variable to track recording state
// let recognition = null;
// document.addEventListener("DOMContentLoaded", () => {
//   if (!isRecording) {
//     // start recording if not already recording
//     isRecording = true;
//     window.SpeechRecognition = window.webkitSpeechRecognition;

//     const recognition = new SpeechRecognition();
//     recognition.interimResults = true;

//     recognition.addEventListener("result", (e) => {
//       const transcript = Array.from(e.results)
//         .map((result) => result[0])
//         .map((result) => result.transcript)
//         .join("");

//       document.getElementById("convert_text").innerHTML = transcript;
//       console.log(transcript);
//     });

//     recognition.start();
//   } else {
//     // stop recording if already recording
//     isRecording = false;
//     recognition.stop();
//   }
// });

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
