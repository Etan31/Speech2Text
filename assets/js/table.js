document.addEventListener("DOMContentLoaded", () => {
  // Fetch the data from the JSON file
  fetch("/tableList")
    .then((response) => response.json())
    .then((data) => {
      // Select the table body element
      const tableBody = document.getElementById("tbody");
      // Loop through the data and create a row for each item
      data.forEach((item) => {
        // Create a new table row
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
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
