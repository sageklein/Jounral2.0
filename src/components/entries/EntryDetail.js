import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import APIManager from "../../api/APIManager";

class EntryDetail extends Component {
	state = {
		title: "",
		date: "",
		loadingStatus: true,
		imageUrl: "",
		entryId: "",
		isEntryValid: false
	};

	handleDelete = () => {
		//invoke the delete function in APIManger and re-direct to the entry list.
		this.setState({ loadingStatus: true });
		APIManager.delete(this.props.entryId).then(() =>
			this.props.history.push("/entries")
		);
	};

	componentDidMount() {
		console.log("EntryDetail: ComponentDidMount");
		//get(id) from APIManager and hang on to that data; put it into state
		APIManager.get(this.props.entryId).then(entry => {
			if (entry.title) {
				var isEntryValid = true;
			}
			this.setState({
				title: entry.title,
				date: entry.date,
				entryId: entry.entryId,
				loadingStatus: false,
				url: entry.url,
				isEntryValid: isEntryValid
			});
		});
	}

	render() {
		if (this.state.loadingStatus) return <p>Loading...</p>;
		if (!this.state.loadingStatus && this.state.isEntryValid) {
			return (
				<div className="card">
					<div className="cardContent">
						{/* <picture>
            				<img src={require(`./Images${this.state.url}`)} alt=" " />
          					</picture> */}
						<h3>
							Title:{" "}
							<span style={{ color: "darkslategrey" }}>
								{this.state.title}
							</span>
						</h3>
						<p>Date: {this.state.date}</p>

						<button
							type="button"
							disabled={this.state.loadingStatus}
							onClick={this.handleDelete}
						>
							Delete
						</button>
						<button
							type="button"
							onClick={() => {
								this.props.history.push(
									`/entries/${this.props.entry.id}/edit`
								);
							}}
						>
							Edit
						</button>
					</div>
				</div>
			);
		} else {
			return <Redirect to="/" />;
		}
	}
}

export default EntryDetail;
