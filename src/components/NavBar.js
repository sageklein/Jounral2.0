import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";


class NavBar extends Component {
	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;

	logOut = () => {
		this.props.clearUser();
		this.props.history.push("/login");
	};

	render() {
		return (
			<div className="navLinks">
				<nav className="navbar justify-content-between">
					<Link className="logoLink" to="/Dashboard">

					</Link>
					<form className="form-inline">
						<Link className="logoLink" to="/">

						</Link>
					</form>
				</nav>
			</div>
		);
	}
}

export default withRouter(NavBar);
