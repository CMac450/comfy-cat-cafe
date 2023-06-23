import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Checkout from './pages/checkout';
import Cats from './pages/resident-cats';
import NavigationBar from './components/NavBar/navbar.js'
// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css'; 
import 'primeflex/primeflex.css';
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <div className='app'>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/resident-cats' element={<Cats />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
};

export default App;