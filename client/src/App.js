import React from 'react';
import './App.css';
// import { Login } from './components/login';
import { Nav } from './components/Nav';
import { FoodDiaryProvider } from './components/context/FoodDiaryContext'

function App() {
  return (
    <>
      <FoodDiaryProvider>
        <div className="App">
          {/* <Login /> */}
          <Nav />
        </div>
      </FoodDiaryProvider>
    </>
  );
}

export default App;
