document.getElementById('brickForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBricks();
});

function calculateBricks() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const brickSize = parseFloat(document.getElementById('brickSize').value);

    const wallVolume = length * width * height;
    const bricksNeeded = Math.ceil(wallVolume / brickSize);

    document.getElementById('bricksNeeded').textContent = `Bricks needed: ${bricksNeeded}`;
    document.getElementById('result').style.display = 'block';
}
document.getElementById('loftForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateLoftVolume();
});

function calculateLoftVolume() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    const loftVolume = length * width * height;

    document.getElementById('loftVolume').textContent = `Loft Volume: ${loftVolume.toFixed(2)} cubic meters`;
    document.getElementById('result').style.display = 'block';
}
