import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './Footer/Footer';
import NavBar from './Navbar/Navbar';
import Home from './Home/Home';
import Procedimentos from './Procedimentos/Procedimentos'
import Sobre from './Sobre/Sobre'
import NotFound from './Components/NotFound/NotFound';


function App() {
  return <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='procedimentos' element={<Procedimentos />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </>
}

export default App;
