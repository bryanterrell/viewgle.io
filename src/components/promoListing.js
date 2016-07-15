import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import PromoListingItem from './promoListingItem';

class PromoListing extends Component {
	render() {
    console.log(this.props);

    let promos = this.props.promos.map((promo) => {
      return <PromoListingItem key={promo.id} promo={promo}/>
    });

    return (
      <div>
        {promos}
      </div>
    );
	}
}

export default PromoListing;
