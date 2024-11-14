document.getElementById("tileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let roomLength = parseFloat(document.getElementById("roomLength").value);
    let roomWidth = parseFloat(document.getElementById("roomWidth").value);
    let tileLength = parseFloat(document.getElementById("tileLength").value);
    let tileWidth = parseFloat(document.getElementById("tileWidth").value);

    if (isNaN(roomLength) || isNaN(roomWidth) || isNaN(tileLength) || isNaN(tileWidth) ||
        roomLength <= 0 || roomWidth <= 0 || tileLength <= 0 || tileWidth <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    let roomArea = roomLength * roomWidth;
    let tileArea = tileLength * tileWidth;

    let tilesNeeded = Math.ceil(roomArea / tileArea);

    document.getElementById("tilesNeeded").innerText = "Tiles Needed: " + tilesNeeded;
    document.getElementById("result").style.display = "block";
    
    
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
});
