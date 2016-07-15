import React from 'react';

export class FlexRow extends React.Component {
  static get defaultProps () {
    return {
      justify: null,
      align:   null,
      style:   {}
    }
  }

  render () {
    return <FlexContent direction='row'
                        justify={this.props.justify}
                        align={this.props.align}
                        style={this.props.style}>
      {this.props.children}
    </FlexContent>
  }
}

export class FlexCol extends React.Component {
  static get defaultProps () {
    return {
      justify: null,
      align:   null,
      style:   {}
    }
  }

  render () {
    return <FlexContent direction='column'
                        justify={this.props.justify}
                        align={this.props.align}
                        style={this.props.style}>
      {this.props.children}
    </FlexContent>
  }
}

export class FlexRowCenter extends React.Component {
  static get defaultProps () {
    return {
      style: {}
    }
  }

  render () {
    return <FlexContent direction='row'
                        justify='center'
                        align='center'
                        onClick={this.props.onClick}
                        style={this.props.style}>
      {this.props.children}
    </FlexContent>
  }
}

export class FlexColCenter extends React.Component {
  static get defaultProps () {
    return {
      style: {}
    }
  }

  render () {
    return <FlexCol justify='center' align='center' style={this.props.style}>
      {this.props.children}
    </FlexCol>
  }
}

class FlexContent extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = () => this.onClick();
  }

  static get defaultProps () {
    return {
      direction: 'row',
      justify:   null,
      align:     null,
      style:     {}
    }
  }

  onClick(e) {
    console.log('FlexContent.onClick', e);
  }

  render () {
    let wrapper = {
      display:       'flex',
      flexDirection: this.props.direction
    };

    _.extend(wrapper, this.props.style);

    if (this.props.justify) {
      wrapper.justifyContent = this.props.justify;
    }
    if (this.props.align) {
      wrapper.alignItems = this.props.align;
    }

    return <div style={wrapper} onClick={this.onClick}>
      {this.props.children}
    </div>
  }
}
