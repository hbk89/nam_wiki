import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {Home, Domain, New, Update, Wiki} from '.';
import Login from './Login.js';
import Logout from './Logout.js';
import Header from '../components/Header/Header';

import '../css/Section.css'

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      {logged? <Logout/> : <Login/>}
      <Header/>
      <div className = "section" >
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/domain" component={Domain}/>
      <Route exact path = "/domain/:name" component={Domain}/>
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
