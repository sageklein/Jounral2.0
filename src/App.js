// Authors: Sage Klein
// Purpose of the File: to hold functionality for sessionStorage for login, renders the <Navbar> and <ApplicationViews.js>

//<Dashboard.js> renders the <NavBar> and <ApplicationViews> 
import React, { Component } from 'react'
import EntryList from '../src/components/entries/EntryList'
import NavBar from '../src/components/navbar/NavBar'
import '../src/index.css'
// import Dashboard from './components/dashboard/Dashboard'

//Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

class App extends Component {
	//On startup, there is no user (user: false)
	state = {
		user: sessionStorage.getItem("userId") !== null
	};

	// Check if userId are in session storage
	//returns true/false
	isAuthenticated = () => sessionStorage.getItem("userId") !== null;


	clearUser = () => {
    console.log("clearing user", "clearUser")
		sessionStorage.clear();
	};

	render() {
		return (
			<>
				<NavBar
				/>

				<EntryList
				/>
			</>
		);
	}
}

export default App;
