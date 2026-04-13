function volume_sphere() {
    //Write your code here
  if (event) event.preventDefault();

  const radiusInput = document.getElementById('radius').value;
  const volumeOutput = document.getElementById('volume');

  const r = parseFloat(radiusInput);

  if (isNaN(r) || r < 0) {
    volumeOutput.value = 'NaN';
  } else {
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    volumeOutput.value = volume.toFixed(4);
  }
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
