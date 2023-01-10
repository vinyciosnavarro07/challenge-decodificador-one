var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function encode() {

  var text = textInput.value;

  var resultEncode = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  document.getElementById('output').innerHTML = '<textarea readonly id="input">' + resultEncode + '</textarea>'
  
}



function decode(){

  var text = textInput.value;

  var resultDecode = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
  document.getElementById('output').innerHTML = '<textarea readonly id="input">' + resultDecode + '</textarea>'
  
}


function copy(){

	var textoCopiado = document.getElementById("input");

	textoCopiado.select();
	textoCopiado.setSelectionRange(0, 9999999999);
	document.execCommand("copy")
	alert("Texto copiado")

}