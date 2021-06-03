import React from 'react';
import {Route} from 'react-router-dom';
import {Home, About, Edit} from '../pages'

function App() {
  return (
    <div>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/about" component={About}/>
      <Route path = "/about/:name" component={About}/>
      <Route path = "/edit" component={Edit}/>
    </div>
  );
}

export default App;
