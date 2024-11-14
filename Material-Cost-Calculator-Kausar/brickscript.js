document.getElementById("brickForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let wallLength = parseFloat(document.getElementById("wallLength").value);
    let wallHeight = parseFloat(document.getElementById("wallHeight").value);
    let brickLength = parseFloat(document.getElementById("brickLength").value);
    let brickHeight = parseFloat(document.getElementById("brickHeight").value);

    if (isNaN(wallLength) || isNaN(wallHeight) || isNaN(brickLength) || isNaN(brickHeight) ||
        wallLength <= 0 || wallHeight <= 0 || brickLength <= 0 || brickHeight <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

   
    let wallArea = wallLength * wallHeight;

   
    let brickArea = brickLength * brickHeight;

  
    let bricksNeeded = Math.ceil(wallArea / brickArea);

    
    document.getElementById("bricksNeeded").innerText = "Bricks Needed: " + bricksNeeded;
    document.getElementById("result").style.display = "block";
    
  
    document.getElementById('resultBox').style.display = 'block';

   
    document.getElementById('resultText').innerText = 'Bricks Needed: ' + bricksNeeded;

   
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
});
