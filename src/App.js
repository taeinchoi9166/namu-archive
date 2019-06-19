import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {SideBar} from './components/SideBar';
import {Wrapper} from "./components/common/Wrapper";
import {Header} from './components/Header';
import {Browser} from './components/Browser';
import {Panel} from './components/Panel';
import {Viewer} from "./components/Viewer";

const App = () => {
  return (
    <Fragment>
        <SideBar/>
        <Wrapper>
          <Header/>
          <Panel/>
          <Browser/>
          <Viewer/>
        </Wrapper>
    </Fragment>
  );
}

export default App;
