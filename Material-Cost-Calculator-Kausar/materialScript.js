document.getElementById("materialForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let brickQuantity = parseFloat(document.getElementById("brickQuantity").value) || 0;
    let loftVolume = parseFloat(document.getElementById("loftVolume").value) || 0;
    let paintAmount = parseFloat(document.getElementById("paintAmount").value) || 0;
    let tileQuantity = parseFloat(document.getElementById("tileQuantity").value) || 0;

    
    const brickUnitCost = 0.5; 
    const loftUnitCost = 100; 
    const paintUnitCost = 1; 
    const tileUnitCost = 10; 

    
    let totalBrickCost = brickQuantity * brickUnitCost;
    let totalLoftCost = loftVolume * loftUnitCost;
    let totalPaintCost = paintAmount * paintUnitCost;
    let totalTileCost = tileQuantity * tileUnitCost;

    
    let totalAmount = totalBrickCost + totalLoftCost + totalPaintCost + totalTileCost;

    
   document.getElementById("totalAmount").innerText = "Total Amount: " + totalAmount.toFixed(2) + " AED";
document.getElementById("totalCost").style.display = "block";


    
    document.getElementById("totalCost").scrollIntoView({ behavior: "smooth" });
});
