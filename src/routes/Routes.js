import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/menu' component={Menu} />
				<Route exact path='/about' component={About} />
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
};

export default Routes;
