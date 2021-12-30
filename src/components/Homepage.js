import '../App.css'

function Homepage(){
    return (
        <div className="Homepage-container">
            <h1 className="homepage-h1">SobyLand Island Guide!</h1>
            <img className="wallpaper" src={require("../wallpaper.jpg")} alt="wallpaper"/>
            <p>Here we will put a basic landing page with info about the app itself! Maybe a login/sign up page for others to use.</p>
            <p>This is a personal guide to my Animal Crossing: New Horizons island, SobyLand.</p>
            <p>This project is made in React JS.</p>
            <p><span className="bold">Here's your guide to the guide!</span></p>
            <ul>
                <li><span className="bold">· Passport:</span> Find information about the Island Representative (me!) and the SobyLand's native flowers and fruit!</li>

                <li><span className="bold">· DailyNook:</span> Check off a list of tasks that the Island Representative is responsible for every day!</li>

                <li><span className="bold">· Newsletter:</span> Get the scoop on upcoming birthdays and holidays, weather reports, and island visitors!</li>

                <li><span className="bold">· StalkMarket:</span> Nook Cranny's AM and PM turnip prices, recorded every day (except Sunday!)</li>

                <li><span className="bold">· Wardrobe:</span> Mix and match new outfit pieces from the entire Nook universe catalog!</li>
            </ul>
        </div>
    )
}

export default Homepage