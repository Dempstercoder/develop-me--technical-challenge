import React from 'react';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../Home";
import Games from "../Games";
import Winner from "../Winner";

const App = ({ start }) => (
  <>
        { !start ? <Home /> : <Games /> } 
  </>
);

export default App;