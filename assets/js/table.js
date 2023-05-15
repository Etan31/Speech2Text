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

//deleteBtn

function confirmDelete() {
  const confirmation = confirm(
    "Delete Confirmation\n\nAre you sure you want to erase the table?"
  );
  if (confirmation === true) {
    deleteData();
  }
}

function deleteData() {
  fetch("/deleteData", { method: "POST" })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      location.reload();
    })
    .catch((error) => console.error(error));
}


//delete function.
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", popup);

function popup() {
  const modal = document.getElementById("myModal");
  const header = document.getElementById("modal-header");
  const message = document.getElementById("modal-message");
  const deleteBtn = document.querySelector(".delete-btn");
  const cancelBtn = document.querySelector(".cancel-btn");

  header.textContent = "Delete Confirmation";
  message.textContent = "Are you sure you want to erase the table?";

  modal.style.display = "flex";
  modal.style.justifyContent = "evenly";
  modal.style.flexWrap = "nowwrap";
  modal.style.alignItems = "center";

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  deleteBtn.addEventListener("click", deleteData);
}

function deleteData() {
  fetch("/deleteData", { method: "POST" })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      location.reload();
    })
    .catch((error) => console.error(error));
}
