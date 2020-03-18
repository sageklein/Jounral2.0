import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firstLetterCase } from "../../modules/helpers";
import APIManager from "../../api/APIManager";

class EntryCard extends Component {
	handleDelete = id => {
		APIManager.delete(id).then(() => this.props.getData());
	};
	render() {
		return (
			<div className="card">
				<div className="cardContent">
					<picture>
						{/* <img src={require("")} alt="" /> */}
					</picture>
					<h3>
						Title:{" "}
						<span className="cardTitle">
							{firstLetterCase(this.props.entry.title)}
						</span>
					</h3>
					<p>Date: {this.props.entry.date}</p>
					<Link to={`/entries/${this.props.entry.id}`}>
						<button>Details</button>
					</Link>
					<button
						type="button"
						onClick={() => this.handleDelete(this.props.entry.id)}
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
	}
}

export default EntryCard;
