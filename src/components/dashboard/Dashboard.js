import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./dashboard.css";

class Dashboard extends Component {
	render() {
		return (
			<div className="background">
                THIS IS THE DASHBOARD
			</div>
		);
	}
}

export default withRouter(Dashboard);
