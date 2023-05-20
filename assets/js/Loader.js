// LOADER OF TABLE.EJS
setTimeout(() => {
  loader.style.display = "none";
}, 500);

setTimeout(function () {
  var loading = document.getElementById("loading");
  loading.classList.add("hidden");
  document.body.classList.remove("loading");
}, 500);

const loader = document.getElementById("loading");
