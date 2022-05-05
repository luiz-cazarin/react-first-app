import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/projects" element={<Projects/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/login" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
