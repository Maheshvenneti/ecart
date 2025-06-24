import './App.css';
import Home from "./pages/home";
import ProductDetail from "./pages/ProductDetails"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
