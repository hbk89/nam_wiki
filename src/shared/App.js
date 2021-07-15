import React from 'react';
import {Route} from 'react-router-dom';
import {Home, Domain, New, Update, Wiki} from '../pages'
import Header from '../components/Header/Header'

import '../css/Section.css'
function App() {
  return (
    <div>
      <Header/>
      <div className = "section" >
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/about" component={Domain}/>
      <Route exact path = "/about/:name" component={Domain}/>
      <Route exact path = "/wiki/:id" component={Wiki}/>
      {/* <Route exact path = "/edit" component={Edit}/> */}
      {/* 새 등록 */}
      <Route exact path = "/new/:name" component={New}/>
      {/* 업데이트 */}
      <Route exact path = "/update/:id" component={Update}/>
      </div>
    </div>
  );
}

export default App;
