import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
          <Route path="Portfolio/" element={<LandingPage />} />
          <Route path="Portfolio/home" element={<Home />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
