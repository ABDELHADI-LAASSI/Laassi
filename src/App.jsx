import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main_layout">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
