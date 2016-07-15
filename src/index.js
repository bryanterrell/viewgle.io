import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import PromoContainer from './components/containers/promoContainer';
import PromoListing from './components/promoListing';
import PromoListingItem from  './components/promoListingItem';
import Promo from  './components/promo';
import NotFound from './components/notFound';

class App extends Component {
	render() {
		return (
			<div>
				<PromoContainer component={PromoListing}/>
			</div>
		);
	}
}

// ReactDOM.render(<App />, document.querySelector('.container'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="promo" component={Promo}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('root'))
