import React from 'react';
import {RouteHandler, Link} from 'react-router';
import stylesheet from '../jss';
import FluxComponent from 'flummox/component';

let styles = {
	homepage: {
		margin: 0,
		padding: 0
	},
	header: {
		'background-color': 'black',
		color: 'white'
	}
};

@stylesheet(styles)
class HomeContent extends React.Component {
	render() {
		const {classes} = this.props.sheet;
		return <div>
			<h1 className={classes.header}>Flux cart</h1>
			{
				this.props.home.loading ||
				<ul>
					<li><Link to='deals'>Deals</Link></li>
					<li><Link to='browsepage'>Browse</Link></li>
					<li><Link to='productpage'>Product</Link></li>
				</ul>
			}
			{this.props.home.loading ? "Loading...": "Loaded"}
		</div>;
	}
}

@stylesheet(styles)
export default class extends React.Component {
	componentWillMount() {
		this.props.flux.getActions('home').fetch(2000);
	}
	render() {
		const {classes} = this.props.sheet;
		return <div className={classes.homepage}>
			<FluxComponent
				flux={this.props.flux}
				connectToStores={
					{
						home: store => ({
							home: store.state
						})
					}
				}>
				<HomeContent/>
			</FluxComponent>
			<RouteHandler flux={this.props.flux} />
		</div>;
	}
}
