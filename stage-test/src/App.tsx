import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import './App.css';
import Home from './pages/home/Home.tsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <Home /> 
      </div>
    </div>
  );
};

export default App;
