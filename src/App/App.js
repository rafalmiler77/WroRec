/**
 * Created by rafael on 25.02.17.
 */
import React from 'react';
import { mainView } from '../main-view';
import './App.css';

const App = props => (
  <mainView>{props.children}</mainView>
);
App.propTypes = {
  children: React.PropTypes.element.isRequired,
};
export default App;
