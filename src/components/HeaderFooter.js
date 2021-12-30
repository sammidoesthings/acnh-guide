import {Link} from 'react-router-dom';

function Header(){
    return (
        <div className="Header-container">
        <Link to="/">Home</Link>
        <Link to="/passport">Passport</Link>
        <Link to="/dailytask">DailyNook</Link>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/stalkmarket">StalkMarket</Link>
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