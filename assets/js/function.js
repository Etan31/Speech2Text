function show() {
  var editBtn = document.getElementById("edit");
  if (editBtn.style.display === "none") {
    editBtn.style.display = "block";
    editBtn.style.float = "right";
  } else {
    editBtn.style.display = "none";
  }
}

///////////////////////////////////////////////////////////////////////// (NOT STRUCTURED) SAVED THE INPUT TEXT
// document.getElementById("saveButton").addEventListener("click", function() {
//   // Get input text value
//   var inputText = document.getElementById("inputText").value;

//   // Create JSON object
//   var data = { "inputText": inputText };

//   // Convert JSON object to string
//   var jsonString = JSON.stringify(data);

//   // Create a Blob with the JSON string
//   var blob = new Blob([jsonString], { type: "application/json" });

//   // Create a download link
//   var downloadLink = document.createElement("a");
//   downloadLink.href = URL.createObjectURL(blob);
//   downloadLink.download = "data.json";

//   // Append the download link to the document and click it
//   document.body.appendChild(downloadLink);
//   downloadLink.click();

//   // Clean up
//   document.body.removeChild(downloadLink);
//   URL.revokeObjectURL(downloadLink.href);
// });

/////////////////
/////////////////STRUCTURED AND CAN BE SAVE, BUT STILL SAVE IN A MULTIPLE FILE

// const saveButton = document.querySelector("#saveButton");
// saveButton.addEventListener("click", saveData);

// function saveData() {
//   // Retrieve input values
//   const inputText = document.querySelector("#inputText").value;
//   const textareaText = document.querySelector("#convert_text").value;

//   // Create data object with input values
//   const data = {
//     input: {
//       filename: inputText
//     },
//     textarea: {
//       convertedtext: textareaText
//     }
//   };
//   // Convert data object to JSON string
//   const jsonData = JSON.stringify(data, null, 2);

//   // Create new Blob object with JSON data
//   const blob = new Blob([jsonData], {type: "application/json"});

//   // Create new anchor element to download JSON file
//   const anchor = document.createElement("a");
//   anchor.download = "data.json";
//   anchor.href = window.URL.createObjectURL(blob);
//   anchor.click();
//   console.log("written successfully");
// }

// const saveButton = document.querySelector("#saveButton");
// saveButton.addEventListener("click", saveData);

// function saveData() {
//   // Retrieve input values
//   const inputText = document.querySelector("#inputText").value;
//   const textareaText = document.querySelector("#convert_text").value;

//   // Create data object with input values
//   const data = {
//     input: {
//       filename: inputText
//     },
//     textarea: {
//       convertedtext: textareaText
//     }
//   };

//   // Check if the data.json file exists
//   fetch("data.json")
//     .then(response => {
//       if (response.status === 404) {
//         // If data.json doesn't exist, create it and write the data to it
//         const jsonData = JSON.stringify([data], null, 2);
//         const blob = new Blob([jsonData], {type: "application/json"});
//         const anchor = document.createElement("a");
//         anchor.download = "data.json";
//         anchor.href = window.URL.createObjectURL(blob);
//         anchor.click();
//         console.log("data.json created and data written successfully");
//       } else {
//         // If data.json exists, read the existing data and append the new data to it
//         response.json()
//           .then(existingData => {
//             existingData.push(data);
//             const jsonData = JSON.stringify(existingData, null, 2);
//             const blob = new Blob([jsonData], {type: "application/json"});
//             const anchor = document.createElement("a");
//             anchor.download = "data.json";
//             anchor.href = window.URL.createObjectURL(blob);
//             anchor.click();
//             console.log("data appended to data.json successfully");
//           })
//           .catch(error => console.error(error));
//       }
//     })
//     .catch(error => console.error(error));
// }

///try

////TRYING TO APPEND DATA FROM THE DATA.JSON FILE
////NOT TESTED YET

// // Check if data.json exists
// if (!fs.existsSync('data.json')) {
//   // If it doesn't exist, create an empty JSON array in a new file named data.json
//   fs.writeFileSync('data.json', '[]');
// }

// // Attach a click event listener to the saveButton
// document.getElementById('saveButton').addEventListener('click', function() {
//   // Extract values from inputText and converted_text
//   const inputText = document.getElementById('inputText').value;
//   const convertedText = document.getElementById('converted_text').value;

//   // Create a new object with the extracted values
//   const newData = { inputText, convertedText };

//   // Load the existing data from data.json
//   const existingData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

//   // Add the new data to the existing data array
//   existingData.push(newData);

//   // Write the updated data back to data.json
//   fs.writeFileSync('data.json', JSON.stringify(existingData));
// });

// function saveData() {
//   // Retrieve input values
//   const inputText = document.querySelector("#inputText").value;
//   const textareaText = document.querySelector("#convert_text").value;

//   // Load existing data from file or create empty array if file doesn't exist
//   let existingData = [];
//   try {
//     existingData = JSON.parse(localStorage.getItem("data")) || [];
//   } catch (error) {
//     console.error(error);
//   }

//   // Add new data to array
//   existingData.push({
//     input: {
//       filename: inputText
//     },
//     textarea: {
//       convertedtext: textareaText
//     }
//   });

//   // Convert data array to JSON string
//   const jsonData = JSON.stringify(existingData, null, 2);

//   // Save updated data to file
//   try {
//     localStorage.setItem("data", jsonData);
//     console.log("Data saved successfully.");
//   } catch (error) {
//     console.error(error);
//   }
// }
