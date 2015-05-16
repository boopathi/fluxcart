import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Flux from './Flux';
import stylesheet from './jss';

let flux = new Flux();

let styles = {
	clearer: {
		clear: 'both'
	},
	ul: {
		margin: 0,
		padding: 0,
	},
	li: {
		padding: '3px',
		float: 'left',
		margin: '5px',
		'list-style': 'none',
		'&:hover': {
			'background-color': 'black'
		}
	},
	link: {
		'line-height': '10px',
		padding: '0 10px',
		border: 'solid 1px black',
		'text-decoration': 'none'
	}
};

@stylesheet(styles)
export default class App extends React.Component {
	render() {
		let pages = [
			'app',
			'homepage',
			'deals',
			'browsepage',
			'filters',
			'productpage',
			'comments'
		];
		let {classes} = this.props.sheet;
		return <div>
			<ul className={classes.ul}>
				{pages.map(function(p) {
					return <li className={classes.li}>
						<Link to={p} className={classes.link}>{p}</Link>
					</li>;
				})}
			</ul>
			<div className={classes.clearer}></div>
			<RouteHandler flux={flux}/>
		</div>;
	}
}
