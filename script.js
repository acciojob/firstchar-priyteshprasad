function firstChar(text) {
  // your code here
	return text.trim()[0] ? text.trim()[0] : "";
	
}

// Do not change the code below 

const text = prompt("Enter text:"); 
alert(firstChar(text));
