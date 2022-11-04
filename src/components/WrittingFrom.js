import React, { useState } from "react";

const WrittingFrom = (props) => {
	const [text, setText] = useState("");

	const clickHandlerUpper = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to uppercase!", "success");
	};
	const clickHandlerClear = () => {
		let newText = "";
		setText(newText);
		props.showAlert("Text Cleared!", "success");
	};
	const clickHandlerCopy = () => {
		navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
	};
	const clickHandlerRemoveSpace = () => {
		let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
	};
	const clickHandlerLower = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lowercase!", "success");
	};

	const changehandler = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			<div className="container my-3" style={{color: props.mode === "dark"?"white":"#042743"}}>
				<h3 >{props.heading}</h3>
				<div className="mb-3">
					<textarea
						className="form-control"
						value={text}
						onChange={changehandler}
						rows="8"
						placeholder="Write text here"
            id="myText"
            style={{backgroundColor: props.mode === "dark"?"#343a40":"white", color: props.mode === "dark"?"white":"#042743" }}
					></textarea>
				</div>
				<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickHandlerUpper}>
					Convert to Uppercase
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickHandlerLower}>
					Convert to Lowercase
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickHandlerClear}>
					Clear
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickHandlerCopy}>
					Copy Text
				</button>
				<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickHandlerRemoveSpace}>
					Remove Extra Spaces
				</button>
			</div>
			<div className="container my-3" style={{color: props.mode === "dark"?"white":"#042743"}}>
				<h3>Your text Summary</h3>
				<p>
				{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
				</p>
				<p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
				<h3>Preview</h3>
				<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
			</div>
		</>
	);
};

export default WrittingFrom;
