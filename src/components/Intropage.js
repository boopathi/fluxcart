import React from 'react';
import stylesheet from 'react-jss';

let classes = {
	title: {
		'background-color': 'black',
		'color': 'white'
	}
};

@stylesheet
export default class extends React.Component {
	render() {
		const style = this.props.sheet;
		return <div>
			<h1 className={style.title}>
				Welcome to Fluxcart !!!
			</h1>
		</div>
	}
}
