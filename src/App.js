import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components views
import List from "./views/List";
import Country from "./views/Country";

class App extends Component {

	render() {
		return (
			<Router>
				<div className="App">
					< div >
						<nav className="navbar navbar-dark bg-primary mb-3">
							<div className="container">
								<a className="navbar-brand" href="/">WikiCountries</a>
							</div>
						</nav>
						<div className="container">
							<div className="row">
								<div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
									<Switch>
										<Route exact path="/" component={List} />
										<Route path="/:cca3" component={List} />
									</Switch>
								</div>
								<div className="col-7">
									<Route path="/:cca3" component={Country} />
								</div>
							</div>
						</div>
					</div >
				</div>
			</Router>

		);
	}
}

export default App;
