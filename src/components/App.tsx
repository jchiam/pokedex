import React, { Component } from 'react';

export default class App extends Component<any, any> {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
