import React from 'react';
import {Route} from 'react-router-dom';
import {Home, About, Edit} from '../pages'
import Header from '../components/Header/Header'
import Section from '../components/Section/Section'

import '../css/Section.css'
function App() {
  return (
    <div>
      <Header/>
      <div className = "section" >
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/about" component={About}/>
      <Route path = "/about/:name" component={About}/>
      <Route exact path = "/edit" component={Edit}/>
      <Route path = "/edit/:name" component={Edit}/>
      </div>
    </div>
  );
}

export default App;
