import React from 'react';
import logo from './logo.png';
import './App.css';
import LongMenu from "./components/menu/menu.component"
import TextArea from "./components/textarea/textarea.component"
function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <img src={logo} className="App-logo" alt="Teste Wedy" />
        </div>  
        <div className="spacer"/>
        <LongMenu/>
      </header>
      <TextArea></TextArea>
    </div>
  );
}

export default App;