const outputNode = document.querySelector("#output");
const inputNode = document.querySelector("#input");
const inputHandler = (e) => {
  if(/[^01]/.test(e.target.value)) {
		outputNode.innerHTML = "Not a valid binary number";
		inputNode.style.border = "2px solid red";
  } else {
		inputNode.style.border = "none";
		outputNode.innerHTML = binaryToDec(e.target.value);
	}
};
const binaryToDec = (binString) => {
	let result = 0;
	for(let i = 0; i < binString.length; i++) {
  	let value = binString.charAt(i);
    result += value * 2 ** (binString.length-1-i);
  }
  return result;
};

inputNode.addEventListener("keyup", inputHandler);