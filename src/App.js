
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Homepage/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
