document.addEventListener("DOMContentLoaded", function () {
  const imageInput = document.getElementById("image-input");
  const imagePreview = document.getElementById("image-preview");
  const uploadForm = document.getElementById("upload-form");
  const loadingSpinner = document.getElementById("loading-spinner");

  imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  uploadForm.addEventListener("submit", function () {
    loadingSpinner.style.display = "block";
  });
});