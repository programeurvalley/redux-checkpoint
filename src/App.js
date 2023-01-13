import React from 'react';
import { useSelector } from 'react-redux';
import ListTask from './components/ListTask';

const App = () => {
	const state = useSelector((state) => ({...state}));
	console.log("state :", state);

	return (
		<div className='App'>
			<ListTask />
		</div>
	);
};

export default App;
