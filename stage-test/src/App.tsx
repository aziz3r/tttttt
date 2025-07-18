import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import './App.css';
import Home from './pages/home/Home.tsx';
import './i18n.ts';
import { useTranslation } from 'react-i18next';


const App = () => {
  const { t, i18n } = useTranslation();

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
