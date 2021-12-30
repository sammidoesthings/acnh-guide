import {Route, Routes, Navigate, Link, NavLink} from 'react-router-dom';

// import Homepage from './Homepage';
// import Passport from './Passport';
// import DailyTask from './DailyTask';
// import Newsletter from './Newsletter';
// import StalkMarket from './StalkMarket';
// import Wardrobe from './Wardrobe';

function Header(){
    return (
        <div className="Header-container">
        
        <Link to="/">Home</Link>
        <Link to="/passport">Passport</Link>
        <Link to="/dailytask">DailyNook</Link>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/stalkmarket">Stalk Market</Link>
        <Link to="/wardrobe">Wardrobe</Link>
        </div>
    )
}

function Footer(){
    return (
        <div className="Footer-container">
            <p>I am the footer!</p> 
        </div>
    )
}

export { Header, Footer}