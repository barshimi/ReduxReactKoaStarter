import React, { Component, PropTypes, defaultProps } from 'react';
import css from 'styles/css.css';
export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element,
    actions  : React.PropTypes.object,
    navTitle : React.PropTypes.object,
    menuState: React.PropTypes.string
  }

  static defaultProps = {
  name: 'Guest'
};

  constructor (props) {
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
  }

  componentWillMount () {
    // add event listeners (Flux Store, WebSocket, document, etc.)
  }

  componentDidMount () {
    // React.getDOMNode()
  }

  componentWillUnmount () {
    // remove event listeners (Flux Store, WebSocket, document, etc.)
  }

  get smilingMessage () {
    return (this.state.smiling) ? "is smiling" : "";
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        {this.props.name} {this.smilingMessage}
      </div>
    );
  }
}



