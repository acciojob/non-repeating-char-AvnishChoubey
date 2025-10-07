function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = {};
	
	for(let i=0;i<str.length;i++)
	{
		let char = str[i];
		arr[char] = (arr[char] || 0) + 1;
	}

	for(let i=0;i<str.length;i++)
	{
		if(arr[str[i]] === 1)
			return str[i];
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
