document.getElementById("loftForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(length) || isNaN(width) || isNaN(height) || length <= 0 || width <= 0 || height <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    let loftVolume = length * width * height;

    document.getElementById("loftVolume").innerText = "Loft Volume: " + loftVolume.toFixed(2) + " cubic meters";
    document.getElementById("result").style.display = "block";
    
    
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
});
