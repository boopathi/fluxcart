import React from 'react';
import stylesheet from 'react-jss';
import {Link} from 'react-router';

let styles = {
  dealsContainer: {
    'background-color': 'black',
    color: 'white'
  },
  deal: {
    'background-color': 'white',
    color: 'black'
  }
};

@stylesheet(styles)
export default class extends React.Component {
  render() {
    return <div>
      asdf
    </div>;
  }
}
