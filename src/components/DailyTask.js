function DailyTask(props){



    return (
        <div className="DailyTask-container">
            <p>Here is a cute logo from acnh!</p> 
            <p>Here is your daily to-do list!</p> 
            <p>Here we will put a daily to do list, with items such as shake trees, hit rocks, plant money tree, etc.</p>
            <br></br>
            <form className="form-container">


                <div className="check-item">
                    <label> Shake Trees
                        <input
                            type="checkbox"
                            name="trees"
                            checked="false"
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default DailyTask