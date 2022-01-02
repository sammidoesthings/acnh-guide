import {Link} from 'react-router-dom';

function Header(){
    return (
        <div className="Header-container">
            <div className="nav-links">
                <div>
                    <Link to="/">Home</Link>
                </div>

                <div>
                    <Link to="/passport">Passport</Link>
                </div>

                <div>
                    <Link to="/dailytask">DailyNook</Link>
                    </div>

                <div>
                    <Link to="/newsletter">Newsletter</Link>
                </div>

                <div>
                    <Link to="/stalkmarket">StalkMarket</Link>
                </div>

                <div>
                    <Link to="/wardrobe">Wardrobe</Link>
                </div>
            </div>
        </div>
    )
}

function Footer(){
    return (
        <div className="Footer-container">
            <div className="footer-links">
                <div>
                    <Link to="/">home</Link>
                </div>

                <div>
                    <Link to="/passport">passport</Link>
                </div>

                <div>
                    <Link to="/dailytask">daily nook</Link>
                    </div>

                <div>
                    <Link to="/newsletter">newsletter</Link>
                </div>

                <div>
                    <Link to="/stalkmarket">stalk market</Link>
                </div>

                <div>
                    <Link to="/wardrobe">wardrobe</Link>
                </div>
            </div>
        </div>
    )
}

export { Header, Footer}