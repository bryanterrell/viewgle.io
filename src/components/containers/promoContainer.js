import React, { Component } from 'react';
import _ from 'lodash';

class PromoContainer extends Component {
  getData () {
    //TODO: implement data fetching here
    let mockPromos = [
      { id: 1, from: 'UNTUCKit', subject: 'Casual shirts for men.', body: 'Shirts designed to be worn untucked. Better length, better fit, better look.' },
      { id: 2, from: 'Google CS First', subject: 'Free Coding Curriculum', body: 'Start teaching kids CS this summer!' }
    ];

    return {
      promos: mockPromos
    }
  }

	render() {
    const data = this.getData(),
      newProps = _.extend(data, _.omit(this.props, 'component'));

    // console.log('PromoContainer.render', data);
    // console.log('PromoContainer.render', this.props);
    // console.log('PromoContainer.render', newProps);

		return <this.props.component {...newProps}/>
	}
}

export default PromoContainer;
