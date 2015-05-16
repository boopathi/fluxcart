import {Flux} from 'flummox';

import HomepageActions from './actions/Homepage';
import HomepageStore from './stores/Homepage';

import BrowsepageActions from './actions/Browsepage';
import BrowsepageStore from './stores/Browsepage';

import ProductpageActions from './actions/Productpage';
import ProductpageStore from './stores/Productpage';

export default class App extends Flux {
	constructor() {
		super();

		this.createActions('home', HomepageActions);
		this.createStore('home', HomepageStore, this);

		// this.createActions('browse', BrowsepageActions);
		// this.createStore('browse', BrowsepageStore);

		// this.createActions('product', ProductpageActions);
		// this.createStore('product', ProductpageStore);

	}
}
