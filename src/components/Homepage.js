import '../App.css'

function Homepage(){
    return (
        <div className="Homepage-container">
            <h1 className="homepage-h1">I am the Homepage page!</h1>
            <img className="wallpaper" src={require("../wallpaper.jpg")} alt="wallpaper"/> 
            <p>Here we will put a basic landing page with info about the app itself! Maybe a login/sign up page for others to use.</p>
        </div>
    )
}

export default Homepage