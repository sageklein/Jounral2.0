import React, { Component } from "react";
//import the components we will need
import EntryCard from "./EntryCard";
import APIManager from "../../api/APIManager";
import "./entry.css"

class EntryList extends Component {
	//define what this component needs to render
	state = {
		entries: []
	};
	deleteEntry = id => {
		APIManager.delete(id).then(() => {
			APIManager.getAll().then(newEntries => {
				this.setState({
					entries: newEntries
				});
			});
		});
	};

	getData = () => APIManager.getAll();

	componentDidMount() {
		console.log("ENTRY LIST: ComponentDidMount");
		//getAll from APIManager and hang on to that data; put it in state
		APIManager.getAll().then(entries => {
			this.setState({
				entries: entries
			});
		});
	}

	render() {
		console.log("ENTRY LIST: Render");

		return (
			<>
				<section className="sectionContent">
					<button
						type="button"
						className="btn"
						onClick={() => {
							this.props.history.push("/entryCard");
						}}
					>
						Submit
					</button>
				</section>

				<div className="containerCards">
					{this.state.entries.map(entry => (
						<EntryCard
							key={entry.id}
							entry={entry}
							deleteEntry={this.deleteEntry}
							{...this.props}
						/>
					))}
				</div>
			</>
		);
	}
}

export default EntryList;
