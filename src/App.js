import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchUser from "./components/SearchUser";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <SearchUser/>
    </div>
  );
}

export default App;
