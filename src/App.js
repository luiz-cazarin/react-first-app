import './App.css';
import Home from './components/Home'


function App() {
  return (
    <>
      <div className="header">
        <p className="header-title">Luiz Claudio</p>
        <ul className="sub-header">
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <Home/>
    </>
  );
}

export default App;
