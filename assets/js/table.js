//FUNCTION TO UPDATE TABLE DATA WHEN SEARCHING
const search = document.getElementById("searchInput");
const tableBody = document.getElementById("tbody");

function updateTable(data) {
  const searchTerm = searchInput.value.toLowerCase();

  tableBody.innerHTML = "";

  for (const item of data) {
    const filename = item.input.filename.toLowerCase();
    const convertedText = item.textarea.convertedtext.toLowerCase();

    if (filename.includes(searchTerm) || convertedText.includes(searchTerm)) {
      const row = document.createElement("tr");
      const filenameCell = document.createElement("td");
      filenameCell.textContent = item.input.filename;
      filenameCell.style.width = "30%";

      row.appendChild(filenameCell);
      const convertedTextCell = document.createElement("td");
      convertedTextCell.textContent = item.textarea.convertedtext;
      convertedTextCell.style.width = "70%";
      row.appendChild(convertedTextCell);
      // Add the row to the table body
      tableBody.appendChild(row);
    }
  }
}
searchInput.addEventListener("input", () => {
  fetch("/saveData/data.json")
    .then((response) => response.json())
    .then((data) => updateTable(data))
    .catch((error) => console.log(error));
});

fetch("/saveData/data.json")
  .then((response) => response.json())
  .then((data) => updateTable(data))
  .catch((error) => console.log(error));
