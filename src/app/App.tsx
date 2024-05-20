import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from '../stories/MyButton';
import { MyModalDialog } form '../stories/MyModalDialog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Тест
        </p>
         <MyButton label="Hello 2" />
         <MyModalDialog text="Hello! I am a moal dialog!" />
      </header>
    </div>
  );
}

export default App;
