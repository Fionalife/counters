import React, {useState} from 'react';


function Buttonmodule(){
	const [count,setCount] = useState(0)

	const Increat =() =>{
		setCount(count+1)
	}
	const Decreat = () =>{
		setCount(count-1)
	}
	return(
		<div>
			<h1>{count}</h1>
			<button className="Addbtn" onClick={Increat}>+</button>
			<button className="Decbtn" onClick={Decreat}>-</button>
		</div>
	)

}
export default Buttonmodule;