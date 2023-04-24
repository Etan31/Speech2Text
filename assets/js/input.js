// var clickToConvertButton = document.getElementById("click_to_convert");

// clickToConvertButton.addEventListener('click', function(){
//    var speech = true;
//    window.SpeechRecognition = window.webkitSpeechRecognition;

//    const recognition = new SpeechRecognition();
//    recognition.interimResults = true;

//    recognition.addEventListener('result', e => {
//        const transcript = Array.from(e.results)
//            .map(result => result[0])
//            .map(result => result.transcript)
//            .join('')

//        document.getElementById("convert_text").innerHTML = transcript;
//        console.log(transcript);
//    });

//    if (speech == true) {
//        recognition.start();
//    }
// })

/////////////////////////////////////////////////////////////////////////////////////STOP RECORDING
var clickToConvertButton = document.getElementById("click_to_convert");
var isRecording = false; // added variable to track recording state
var recognition;

clickToConvertButton.addEventListener("click", function () {
  if (!isRecording) {
    // start recording if not already recording
    isRecording = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      document.getElementById("convert_text").innerHTML = transcript;
      console.log(transcript);
    });

    recognition.start();
  } else {
    // stop recording if already recording
    isRecording = false;
    recognition.stop();
  }
});

///////////////////////////////////////////////////////////////////////////////////
var clickToConvertButton = document.getElementById("click_to_convert");
var isRecording = false;
var recognition;

clickToConvertButton.addEventListener("click", function () {
  if (!isRecording) {
    isRecording = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = false; // set to false

    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      if (e.results[0].isFinal) {
        // check if result is final
        document.getElementById("convert_text").innerHTML = transcript;
        console.log(transcript);
      }
    });

    recognition.start();
  } else {
    isRecording = false;
    // recognition.stop();
  }
});

/*

FOR THE APPENDING DATA BACK TO THE JSON FILE

*/

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, '../../saved_JSON_file/data.json');

// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "../../saved_JSON_file/data.json");

// fs.readFile(filePath, (err, data) => {
//   if (err) throw err;
//   const fileData = JSON.parse(data);
//   const newData = { name: "Jo   hn", age: 30 };
//   fileData.push(newData);

//   fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
//     if (err) throw err;
//     console.log("Data added to file");
//   });
// });
