// Authors: Sage Klein
// Purpose of the File: to house the routes/paths to each component

import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login"
import Register from "./auth/Register"
import EntryCard from "../components/entries/EntryCard"
import EntryDetails from "../components/entries/EntryDetials";
import EntryEditForm from "../components/entries/EntryEditForm";
import EntryForm from "../components/entries/EntryForm";
import EntryList from "../components/entries/EntryList";
import Dashboard from "../components/dashboard/Dashboard"
import Home from "../components/home/Home"
export default class ApplicationViews extends Component {

  render() {
    		console.log('from app js', this.props);
    return (
		<>
			<Route
				exact
				path="/"
				render={props => {
					return <Home />;
				}}
			/>
			<Route
				exact
				path="/EntryCard"
				render={props => {
					return <EntryCard {...props} />;
				}}
			/>
			<Route
				exact
				path="/EntryDetail"
				render={props => {
					return <EntryDetail {...props} />;
				}}
			/>
			<Route
				exact
				path="/EntryList"
				render={props => {
					return <EntryList {...props} />;
				}}
			/>
			<Route
				exact
				path="/login"
				render={props => {
					return <Login setUser={this.props.setUser} {...props} />;
				}}
			/>
			<Route
				exact
				path="/register"
				render={props => {
					return <Register setUser={this.props.setUser} {...props} />;
				}}
			/>
			<Route
				exact
				path="/dashboard"
				render={props => {
					if (this.props.isAuthenticated()) {
						return <Dashboard {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
		</>
	);
  }
}

