import './App.css';
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

        <p>I am the App page!</p>
        <p>Here you'll add your routing and Header/Footer components!</p>
        <Homepage/>
        <Passport/>
        <DailyTask/>
        <Newsletter/>
        <StalkMarket/>
        <Wardrobe/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
