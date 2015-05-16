// prelude
import 'babel-core/polyfill';
import BPromise from 'bluebird';
window.Promise = BPromise;
const __DEV__ = true;
if (__DEV__) {
	Promise.longStackTraces();
	Error.stackTraceLimit = Infinity;
}

import React from 'react';

// level 0
import App from './src/App';

// level 1
import Homepage from './src/components/Homepage';
import Browsepage from './src/components/Browsepage';
import Productpage from './src/components/Productpage';
import Intropage from './src/components/Intropage';

// level 2
import Deals from './src/components/Deals';
import Filters from './src/components/Filters';
import Comments from './src/components/Comments';

import Router from 'react-router';
import RouterContainer from './src/components/RouterContainer';

let {
	DefaultRoute,
	Route,
	RouteHandler,
} = Router;

let routes = (
	<Route name='app' path='/' handler={App}>
		<Route name='homepage' path='/home' handler={Homepage}>
			<Route name='deals' path='/deals' handler={Deals} />
		</Route>
		<Route name='browsepage' path='/browse' handler={Browsepage}>
			<Route name='filters' path='/deals' handler={Filters} />
		</Route>
		<Route name='productpage' path='/p' handler={Productpage}>
			<Route name='comments' path='/deals' handler={Comments} />
		</Route>
		<DefaultRoute handler={Intropage} />
	</Route>
);

RouterContainer.set(Router.create({ routes }));

window.addEventListener('DOMContentLoaded', function() {
	let container = document.createElement('div');
	container.id = 'fluxcart';

	document.body.appendChild(container);
	RouterContainer.get().run(function(Handler) {
		React.render(<Handler/>, container);
	});
});
