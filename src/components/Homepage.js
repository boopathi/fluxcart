import React from 'react';
import {RouteHandler, Link} from 'react-router';
import stylesheet from '../jss';

let styles = {
	homepage: {
		margin: 0,
		padding: 0
	},
	header: {
		'background-color': 'purple',
		color: 'white'
	}
}

@stylesheet(styles)
export default class extends React.Component {
	state = {
		data: {}
	}
	render() {
		const {classes} = this.props.sheet;
		return <div className={classes.homepage}>
			<h1 className={classes.header}>Hi there</h1>
			<ul>
				<li><Link to='deals'>Deals</Link></li>
				<li><Link to='browsepage'>Browse</Link></li>
				<li><Link to='productpage'>Product</Link></li>
			</ul>
			<RouteHandler flux={this.props.flux} />
		</div>;
	}
}
