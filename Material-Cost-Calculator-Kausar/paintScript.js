document.getElementById("paintForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let wallLength = parseFloat(document.getElementById("wallLength").value);
    let wallHeight = parseFloat(document.getElementById("wallHeight").value);
    let coverage = parseFloat(document.getElementById("coverage").value);

    if (isNaN(wallLength) || isNaN(wallHeight) || isNaN(coverage) ||
        wallLength <= 0 || wallHeight <= 0 || coverage <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    let wallArea = wallLength * wallHeight;
    let paintNeeded = wallArea / coverage;

    document.getElementById("paintNeeded").innerText = "Paint Needed: " + paintNeeded.toFixed(2) + " liters";
    document.getElementById("result").style.display = "block";
    
    
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
});
