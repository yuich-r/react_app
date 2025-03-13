import { useState } from 'react';
export function InputForm(){
	const [inputText,setInputText] = useState(
		''
	  ) 

	const handleOnchange = (event) => {
		console.log(event.target.value);
		setInputText(event.target.value);
	  }

	return(
		<form>
		<input type='text' value={inputText} onChange={handleOnchange}></input>
		<button type='submit'>追加</button>
		</form>
	);
}
