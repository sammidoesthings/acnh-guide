import '../App.css';

function PriceForm(){
    return (
        <div className="PriceForm-container">
            <p>Add the turnip prices for today!<br></br>
                AM prices are between 8AM - 12:00PM <br></br>
                PM prices are between 12:01PM - 10PM
            </p>
            <br></br>
            <br></br>
            <form className="turnip-prices">

            {/* <label>  AM Price: &nbsp;
                <input
                    type="dropdown"
                    name="am-price"
                />
            </label>

            <label>  PM Price: &nbsp;
                <input
                    type="text"
                    name="pm-price"
                />
            </label> */}

            <div>
                <label> What is the Date:
                    <input
                        type="month"
                    />
                </label>
            </div>

            <div>
                <label> AM or PM?
                    <select value="dropdown">
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </label>
            </div>

            {/* Need to add a handle change, handle submit, and default values. Maybe change price type from number to text? */}


            <div>
                <label> What's Timmy and Tommy's price?
                    <input
                        type="number"
                    />
                </label>
            </div>

            </form>
        </div>
    )
}

function PriceOutput(){
    return (
        <div className="PriceOutput-container">
            This is going to be a table that takes in the AM and PM prices of turnips for the day/week.
        </div>
    )
}


function StalkMarket(){
    return (
        <div className="StalkMarket-container">
            <h1 className="homepage-h1">Joan's Stalk Market</h1>
            <p>Daisy Mae, the adorable, snot-nosed boar, has taken over selling turnips for her grandmother Joan due to her weakening knees, and travels to islands just like ours every Sunday, from 5am - 12:00pm with a basket of them on her head. The prices vary week to week, but average around 90 - 120 bells a pop--and if we play our cards right and catch Timmy and Tommy when they're buying high, we can make a right fortune out of them!  </p>
            <br></br>
            <p>Stalk market prices may fluctuate, but there is <span>some</span> predictability to them. The key is learning to recognize the patterns of the highs and lows! We do this by making it easy to submit the changing prices and keeping a record of every week since it opened!</p>
            <br></br>
            <p>Go ahead, try it for yourself! Select a date, AM or PM, and insert an example price (like 350 bells)--and then watch it appear in the corresponding position on our chart!</p>


            <p>Here we will put tracker for Turnip prices, and potentially a calendar to predict highs and lows!</p>

            {/* Instead of doing the form like I was, we should make one form and send it to a database--user selects a date and AM or PM from a dropdown menu, and then inserts the bells value and hits submit. That object is then sent to the database, and the values are returned to fill in the corresponding area on the chart.

            Need to figure out how to make a table in React, and make a database/endpoints for our Turnip prices.
            
            Plans in ipad! */}
            <br></br>
            <PriceForm/>
            <br></br>
            <PriceOutput/>

        </div>
    )
}


export default StalkMarket