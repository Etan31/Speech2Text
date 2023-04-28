// document.addEventListener("DOMContentLoaded", () => {
//   // Fetch the data from the JSON file
//   fetch("/tableList")
//     .then((response) => response.json())
//     .then((data) => {
//       // Select the table body element
//       const tableBody = document.getElementById("tbody");
//       // Loop through the data and create a row for each item
//       data.forEach((item) => {
//         // Create a new table row
//         const row = document.createElement("tr");
//         // Create a cell for the filename and add it to the row
//         const filenameCell = document.createElement("td");
//         filenameCell.textContent = item.input.filename;
//         filenameCell.style.width = "30%";

//         row.appendChild(filenameCell);
//         // Create a cell for the converted text and add it to the row
//         const convertedTextCell = document.createElement("td");
//         convertedTextCell.textContent = item.textarea.convertedtext;
//         convertedTextCell.style.width = "70%"; // Set width to 70%
//         row.appendChild(convertedTextCell);
//         // Add the row to the table body
//         tableBody.appendChild(row);
//       });
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

//FUNCTION TO UPDATE TABLE DATA WHEN SEARCHING
// const searchInput = document.querySelector('input[type="text"]');
const search = document.getElementById("searchInput");
const tableBody = document.getElementById("tbody");

function updateTable(data) {
  const searchTerm = searchInput.value.toLowerCase();

  tableBody.innerHTML = "";

  for (const item of data) {
    const filename = item.input.filename.toLowerCase();
    const convertedText = item.textarea.convertedtext.toLowerCase();

    if (filename.includes(searchTerm) || convertedText.includes(searchTerm)) {
      // const row = document.createElement("tr");

      // const filenameCell = document.createElement("td");
      // filenameCell.textContent = item.input.filename;
      // const convertedTextCell = document.createElement("td");
      // convertedTextCell.textContent = item.textarea.convertedtext;

      // row.appendChild(filenameCell);
      // row.appendChild(convertedTextCell);
      // tableBody.appendChild(row);
      const row = document.createElement("tr");
      // Create a cell for the filename and add it to the row
      const filenameCell = document.createElement("td");
      filenameCell.textContent = item.input.filename;
      filenameCell.style.width = "30%";

      row.appendChild(filenameCell);
      // Create a cell for the converted text and add it to the row
      const convertedTextCell = document.createElement("td");
      convertedTextCell.textContent = item.textarea.convertedtext;
      convertedTextCell.style.width = "70%"; // Set width to 70%
      row.appendChild(convertedTextCell);
      // Add the row to the table body
      tableBody.appendChild(row);
    }
  }
}

// searchInput.addEventListener("input", updateTable);
// updateTable();

searchInput.addEventListener("input", () => {
  fetch("/saveData/data.json")
    .then((response) => response.json())
    .then((data) => updateTable(data))
    .catch((error) => console.log(error));
});

// Call updateTable once when the page loads
fetch("/saveData/data.json")
  .then((response) => response.json())
  .then((data) => updateTable(data))
  .catch((error) => console.log(error));
