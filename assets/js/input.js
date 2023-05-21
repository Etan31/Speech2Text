// Limit the user from typing that special characters and exceeding more than 200 characters.
const inputElement = document.getElementById("inputText");
inputElement.addEventListener("input", function () {
  const inputValue = inputElement.value;

  // Limit the input to 200 characters
  if (inputValue.length > 200) {
    inputElement.value = inputValue.slice(0, 200);
    alert("You have reached the character limit (200).");
  }

  // Disallow special characters
  const invalidCharacters = /[/\\:*?"<>|]/;
  if (invalidCharacters.test(inputValue)) {
    inputElement.value = inputValue.replace(invalidCharacters, "");
    alert(
      'The file name cannot contain any of the following characters: / \\ : * ? " < > |'
    );
  }
});

///FIXING THE RECORDING WHEN THE MAIN IS RELOAD
let isRecording = false;
let recognition = null;
let transcript = "";
let previousTranscript = "";

const startRecording = () => {
  isRecording = true;
  recognition = new window.webkitSpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener("result", (event) => {
    transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    if (event.results[event.results.length - 1].isFinal) {
      previousTranscript = transcript;
    }

    const existingText = textarea.value.trim();
    if (existingText.length > 0) {
      if (existingText.endsWith(previousTranscript)) {
        textarea.value = existingText;
      } else {
        textarea.value = existingText + " " + transcript;
      }
    } else {
      textarea.value = transcript;
    }

    console.log(transcript);
  });

  recognition.addEventListener("end", () => {
    if (isRecording) {
      startRecording();
    }
  });

  recognition.start();
  document.getElementById("click_to_convert").style.backgroundColor = "#ff0000";
};

const stopRecording = () => {
  if (isRecording) {
    isRecording = false;
    recognition.stop();

    document.getElementById("click_to_convert").style.backgroundColor = "";
  }
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

//LOADER
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    document.body.classList.remove("loading");
  });
  document.body.classList.add("loading");
});

// //LOADER OF MAIN.EJS
// //LOADING SCREEN DURATION
setTimeout(function () {
  var loading = document.getElementById("loading");
  loading.classList.add("hidden");
  document.body.classList.remove("loading");
}, 500);

document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton");
  const convertText = document.getElementById("convert_text");
  const copyNotification = document.getElementById("copyNotification");

  copyButton.addEventListener("click", () => {
    convertText.select();
    document.execCommand("copy");

    copyNotification.classList.add("show");
    setTimeout(() => {
      copyNotification.classList.remove("show");
    }, 2000);
  });
});
const loader = document.getElementById("loading");

// Clears and save the body of the input and textarea
const btn = document.getElementById("saveButton");
if (btn) {
  btn.addEventListener("click", () => {
    const inputField = document.getElementById("inputText");
    const textareaField = document.getElementById("convert_text");

    const inputText = inputField.value;
    const convertedText = textareaField.value;

    // Save to JSON file (data.json)
    fetch("/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: {
          filename: inputText,
        },
        textarea: {
          convertedtext: convertedText,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          inputField.value = "";
          textareaField.value = "";

          // Save to text file
          const element = document.createElement("a");
          const file = new Blob([convertedText], { type: "text/plain" });
          element.href = URL.createObjectURL(file);
          element.download = `${inputText}.txt`;
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        } else {
          console.error(response.statusText);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
} else {
  console.error("Button not found");
}
