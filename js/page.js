function changeImage() {
  var img1 = document.getElementById("image1");
  var img2 = document.getElementById("image2");

  img1.style.display = "none";
  img2.style.display = "inline";
}

function changeImageback() {
  var img1 = document.getElementById("image1");
  var img2 = document.getElementById("image2");

  img1.style.display = "inline";
  img2.style.display = "none";
}

function generateCertificate() {
    const nameInput = document.getElementById('name').value;
    const certName = document.getElementById('cert-name');
    const dateElement = document.getElementById('date');
    const certificateDiv = document.getElementById('certificate');
    const inputContainer = document.getElementById('input-container');

    // Get today's date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString(undefined, options);

    certName.textContent = nameInput || "Name not provided";
    dateElement.textContent = dateString;
    certificateDiv.style.display = 'block'; // Show the certificate
    inputContainer.style.display = 'none'; // Hide the input field
}

function previewImage(event) {
    const imageInput = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    const inputContainer = document.getElementById('inputContainer'); // Reference to the input container

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block'; // Show the image
            inputContainer.style.display = 'none'; // Hide the input field
        }
        reader.readAsDataURL(imageInput); // Convert image file to base64 data URL
    } else {
        imagePreview.style.display = 'none'; // Hide if no image
    }
}