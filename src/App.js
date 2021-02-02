import './App.css';
import { TopNav } from './Components/TopNav/TopNav';
import React from 'react';
import { LeftCard } from './Components/LeftCard/LeftCard';


function App() {
  return (
    <div className="App">
      <container className="TopNav">
        <TopNav />
      </container>
      <container  className="LeftCard">
        <LeftCard />
      </container>
    </div>
  );
};

export default App;
