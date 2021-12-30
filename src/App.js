import './App.css';

//imports
import { Route, Routes } from 'react-router-dom'


//components
import { Header, Footer } from './components/HeaderFooter';
import Homepage from './components/Homepage';
import Passport from './components/Passport';
import DailyTask from './components/DailyTask';
import Newsletter from './components/Newsletter';
import StalkMarket from './components/StalkMarket';
import Wardrobe from './components/Wardrobe';



function App() {


  return (
    <div className="app-container">
      <Header/>
      <div className="app-body">
        <Routes>

        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/passport" element={<Passport/>}/>
        <Route path="/dailytask" element={<DailyTask/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path="/stalkmarket" element={<StalkMarket/>}/>
        <Route path="/wardrobe" element={<Wardrobe/>}/>
        <Route path="*" element={<Homepage/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
