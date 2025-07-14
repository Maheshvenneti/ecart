import './App.css';
import Home from "./pages/home";
import ProductDetail from "./pages/ProductDetails"
import Products from './pages/Products';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
