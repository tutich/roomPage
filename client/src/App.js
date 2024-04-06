import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
