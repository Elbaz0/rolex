import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import About from './page/About';
import Catageris from './page/Catageris';
import Footer from './page/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cat1 from './page/Cat1';
import Cat2 from './page/Cat2';
import Cat3 from './page/Cat3';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route index element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cats' element={<Catageris />} />
          <Route path='/cat1' element={<Cat1 />} />
          <Route path='/cat2' element={<Cat2 />} />
          <Route path='/cat3' element={<Cat3 />} />



        </Routes>




      </BrowserRouter>

    </div>
  );
}

export default App;




