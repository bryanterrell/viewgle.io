import React, { Component } from 'react';
import { Row, Col, Glyphicon, Label } from 'react-bootstrap';
import { FlexRow, FlexRowCenter, FlexCol, FlexColCenter } from './flex';

class PromoListingItem extends Component {
  onClick() {
    console.log('PromoListingItem.onClick');
  }

	render() {
    let promo = this.props.promo;

    let wrapper = {
        padding: '0 10px',
        width: '100%',
        height: 40,
        border: 'solid 1px lightgray'
      },
      textWrapper = {
        flex: 1,
        flexWrap: 'nowrap',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      };

		return (
      <FlexRowCenter justify='space-around'style={wrapper} onClick={this.onClick}>
        <div style={{width: 40}}>
          <Glyphicon glyph="star-empty" style={{color: 'gray'}}/>
        </div>

        <div style={{flex: 'initial', width: 180, minWidth: 100}}>
          <span style={{fontWeight: 600}}>{promo.from}</span>
        </div>

        <FlexRow style={{width: 80}}>
          <Label bsStyle="warning">Ad</Label>
          <Glyphicon glyph="info-sign" style={{paddingLeft: 5, color: 'gray'}}/>
        </FlexRow>

        <div style={textWrapper}>
          <span style={{fontWeight: 600, paddingRight: 7}}>{promo.subject}</span>
          <span style={{color: 'gray'}}>
            {promo.body}
          </span>
        </div>
      </FlexRowCenter>
    );
	}
}

export default PromoListingItem;
