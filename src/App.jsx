import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux'; 
// import store from './App/store'; 
import Hero from './Components/Hero/Hero'; 
import Login from './Pages/login/Login'; 

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
