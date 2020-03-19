import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
	handleLogout = () => {
		this.props.clearUser();
		this.props.history.push("/");
	};
	render() {
		return (
			<header>
				<h1 className="siteTitle">
					JOURNAL
					<br />
					<small>where life meets paper</small>
				</h1>
				<nav>
					<ul className="container">
						<li>
							<Link className="nav-link" to="/entryList">
								All Entries
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/entryForm">
								New Entry
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/entrySearch">
								Search Entries
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default withRouter(NavBar);
