import React from "react";
// import APIManager from "../../api/APIManager";
import "./entry.css";


const EntryForm = () => {
	return (
		<form className="containerCard">
			<div className="entryTitle">
				<label>Title</label>
				<input type="text" className="title" required />
			</div>

			<div className="entryText">
				<label>What Happened Today?</label>
				<input type="text" className="entry" required />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
export default EntryForm;
