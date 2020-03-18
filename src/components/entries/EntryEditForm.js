import React, { Component } from "react";
import APIManager from "../../api/APIManager";

class EntryEditForm extends Component {
	//set the initial state
	state = {
		title: "",
		date: "",
		loadingStatus: true,
		imageUrl: "",
		entryId: "",
		isEntryValid: false
	};

	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	updateExistingEntry = evt => {
		evt.preventDefault();
		this.setState({ loadingStatus: true });
		const editedEntry = {
			id: this.props.match.params.entryId,
			title: this.state.entryTitle,
			employeeId: this.state.entryId,
			date: this.state.date
		};

		APIManager.update(editedEntry).then(() =>
			this.props.history.push("/entries")
		);
	};

	componentDidMount() {
		EmployeeManager.getAll().then(allEntries => {
			APIManager.get(this.props.match.params.entryId).then(entry => {
				this.setState({
					title: entry.title,
					date: entry.date,
					loadingStatus: false,
					allEntries: allEntries
				});
			});
		});
	}

	render() {
		return (
			<>
				<form>
					<fieldset>
						<div className="formGrid">
							<input
								type="text"
								required
								className="formControl"
								onChange={this.handleFieldChange}
								id="entryTitle"
								value={this.state.entryTitle}
							/>
							<label htmlFor="entryTitle">Entry Title</label>

							<input
								type="text"
								required
								className="formControl"
								onChange={this.handleFieldChange}
								id="date"
								value={this.state.date}
							/>
							<label htmlFor="date">Date</label>
						</div>
						<select
							className="formControl"
							id="entryId"
							value={this.state.entryId}
							onChange={this.handleFieldChange}
						>
							{this.state.allEntries.map(entry => (
								<option key={entry.id} value={entry.id}>
									{entry.title}
								</option>
							))}
						</select>
						<div className="alignRight">
							<button
								type="button"
								disabled={this.state.loadingStatus}
								onClick={this.updateExistingEntry}
								className="btn btn-primary"
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

export default EntryEditForm;
