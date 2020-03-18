import React, { Component } from "react";
import APIManager from "../../api/APIManager";


class EntryForm extends Component {
	state = {
		entryTitle: "",
		date: "",
		loadingStatus: false
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	/*  Local method for validation, set loadingStatus, create entry object, invoke the APIManager post method, and redirect to the full entry list
	 */
	constructNewEntry = evt => {
		evt.preventDefault();
		if (this.state.entryTitle === "" || this.state.date === "") {
			window.alert("Please input an entry title and date");
		} else {
			this.setState({ loadingStatus: true });
			const entry = {
				title: this.state.entryTitle,
				date: this.state.date
			};

			// Create the entry and redirect user to entry list
			APIManager.post(entry).then(() =>
				this.props.history.push("/entries")
			);
		}
	};

	render() {
		return (
			<>
				<form>
					<fieldset>
						<div className="formGrid">
							<input
								type="text"
								required
								onChange={this.handleFieldChange}
								id="entryTitle"
								placeholder="Title"
							/>
							<label htmlFor="entryName">Date</label>
							<input
								type="text"
								required
								onChange={this.handleFieldChange}
								id="date"
								placeholder="Date"
							/>
							<label htmlFor="date">Date</label>
						</div>
						<div className="alignRight">
							<button
								type="button"
								disabled={this.state.loadingStatus}
								onClick={this.constructNewEntry}
							>
								Submit
							</button>
						</div>
					</fieldset>
				</form>
			</>
		);
	}
}

export default EntryForm;
