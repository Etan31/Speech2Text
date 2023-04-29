//APPEND DATA
const saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", saveData);

function saveData() {
  const inputText = document.querySelector("#inputText").value;
  const textareaText = document.querySelector("#convert_text").value;

  const data = {
    input: {
      filename: inputText,
    },
    textarea: {
      convertedtext: textareaText,
    },
  };

  // Send POST request to server to append data to data.json
  fetch("http://localhost:5500/saveData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
}

const inputText = document.getElementById("inputText");
const textarea = document.getElementById("convert_text");

function updateButtonState() {
  if (inputText.value.trim() !== "" && textarea.value.trim() !== "") {
    saveButton.removeAttribute("disabled");
  } else {
    saveButton.setAttribute("disabled", true);
  }
}

inputText.addEventListener("input", updateButtonState);
textarea.addEventListener("input", updateButtonState);

saveButton.addEventListener("click", function () {
  const converted_text = inputText.value.trim();
});

updateButtonState();
