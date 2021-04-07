// React Modules
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// Components
import HomePage from './Pages/HomePage';
import SubmitPage from './Pages/SubmitPage';
import LoginPage from './Pages/LoginPage';


// Main App Component
function App() {

	// Routes
	return (
	<div>
		<Router>
			<Switch>
				<Route path="/submit">
					<SubmitPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	</div>
	);
}

// Export
export default App;