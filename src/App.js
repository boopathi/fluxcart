import React from 'react';
import {RouteHandler} from 'react-router';
import Flux from './Flux';

let flux = new Flux();

export default class App extends React.Component {
	render() {
		return <div>
			<RouteHandler flux={flux}/>
		</div>;
	}
}
