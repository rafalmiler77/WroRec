/**
 * Created by rafael on 25.02.17.
 */
import React from 'react';
import { mainView } from '../main-view';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this.props, 'rendering');
    return (
      <mainView>{this.props.children}</mainView>
    );
  }
}

export default App;
