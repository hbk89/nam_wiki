import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Route} from 'react-router-dom';
import {Home, Domain, New, Update, Wiki, History} from '.';
import Login from '../components/Login/Login.js';
import Header from '../components/Header/Header';

import '../css/Section.css'

function App() {
  // 계정 정보
  const [info, setInfo] = useState({
    // id: "",
    // name: "",
    // provider: "", // 추후 구글뿐만 아니라 다른 것들
  });

  const [ip, setIp] = useState("");
    
  useEffect(() => {
    axios
    .get("https://api.ip.pe.kr/")
    .then((res) => {
      console.log(res.data);
      setIp(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [info])

  return (
    <div>
      <Login info={info} setInfo={setInfo} ip={ip}/>
      <Header/>
      <div className = "section" >
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/domain/:name" component={Domain}/>
      <Route exact path = "/wiki/:id" render={(props)=><Wiki info={info} {...props}/>}/>
      {/* 새 등록 */}
      <Route exact path = "/new/:name" render={(props)=><New info={info} {...props}/>}/>
      {/* 업데이트 */}
      <Route exact path = "/update/:id" render={(props)=><Update info={info} {...props}/>}/>
      <Route exact path = "/history/:id" render={(props)=><History {...props}/>}/>
      </div>
    </div>
  );
}

export default App;
