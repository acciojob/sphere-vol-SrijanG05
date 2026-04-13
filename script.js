function volume_sphere() {
    //Write your code here
  let rad=document.getElementById('radius').value;
	let volout=document.getElementById('volume');
	const r=parseFloat(rad);
	 if (isNaN(r) || r < 0) {
    volumeOutput.value = 'NaN';
	 }
	else{
   let vol=(4 / 3) * Math.PI * Math.pow(r, 3);
		volout.value=vol.toFixed(4);
	}
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
