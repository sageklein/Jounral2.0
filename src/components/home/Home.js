// Author: Sage Klein
// Purpose of the File: The actual factual dashboard.
import Login from "../auth/Login";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component {
	render() {
		return <Login />;
	}
}

export default withRouter(Home);
