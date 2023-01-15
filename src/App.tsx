import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
