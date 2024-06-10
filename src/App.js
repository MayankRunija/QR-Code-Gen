import { useEffect, useState } from 'react'; 
import './App.css'; 

function App() { 
const [temp, setTemp] = useState(""); 
const [word, setWord] = useState(""); 
const [size, setSize] = useState(400); 
const [bgColor, setBgColor] = useState("ffffff"); 
const [qrCode, setQrCode] = useState(""); 

// Changing the URL only when the user 
// changes the input 
useEffect(() => { 
	setQrCode 
(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`); 
}, [word, size, bgColor]); 

// Updating the input word when user 
// click on the generate button 
function handleClick() { 
	setWord(temp); 
} 

return ( 
	<div className="App">
		
	<h1>QR Code Generator</h1>
	<h3>You can generator QR code upto 4000 words</h3>
	<div id='inpu'>
	<div className="input-box"> 
		<div className="gen"> 
		<input type="text" onChange={ 
			(e) => {setTemp(e.target.value)}} 
			placeholder="Enter text to encode" /> 
		<button className="button" id='btn-gen'
			onClick={handleClick}> 
			Generate 
		</button> 
		</div> 
		<div className="extra"> 
		<h5 id='colText'>Background Color:</h5> 
		<input id='col' type="color" onChange={(e) => 
		{ setBgColor(e.target.value.substring(1)) }} /> 
		<h5 id='dia'>Dimension:</h5> 
		<input id='dia-input' type="range" min="200" max="600"
		value={size} onChange={(e) => 
		{setSize(e.target.value)}} /> 
		</div> 
	</div> 
	</div> 
	<div className="output-box" id='outpu'> 
		<img id='out' src={qrCode} alt="" /> 
		<a href={qrCode} download="QRCode"> 
		<button type="button">Download</button> 
		</a> 
	</div> 
	</div> 
); 
} 

export default App;
