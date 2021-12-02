import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} exact />
				<Route path='/edit' element={<EditPage />} exact />
			</Routes>
		</Router>
	);
};

export default App;
