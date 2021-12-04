import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={HomePage} exact />
				<Route path='/edit' component={EditPage} exact />
			</Switch>
		</Router>
	);
};

export default App;
