import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/pages/Register';
import Show from './components/pages/Show';
import Delete from './components/pages/Delete';
import Update from './components/pages/Update';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/update/:userId' element={<Update/>}></Route>
        <Route path='/delete/:userId' element={<Delete/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
