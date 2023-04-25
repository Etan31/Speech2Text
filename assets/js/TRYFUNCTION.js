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
