import React from 'react';
import {RouteHandler} from 'react-router';
import stylesheet from 'react-jss';

let styles = {
	homepage: {
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
			Hi there
			<RouteHandler flux={this.props.flux} />
		</div>;
	}
}
