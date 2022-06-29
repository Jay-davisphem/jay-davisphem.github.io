import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from './components/Navbar' 
import ScrollToTop from './components/ScrollToTop' 
import Home from './components/Home/Home' 
import './style.css'
import './App.css'

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
    <Loader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={Home} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
