import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';

// Import components new

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBarExample from './layouts/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBarExample />}>
        <Route inde element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='products' element={<Products />}/>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>     
      </BrowserRouter>
      <Footer />
      
    </div>
    
  );
}

export default App;
