import React, {useState} from 'react';


function Task(props) {
    
    const [complete, setComplete] = useState(false)

    if (complete) {
        // do this
        return (
            <div style={{
                cursor: "pointer",
                textDecoration: "line-through"
            }} onClick={()=>{
                setComplete(!complete)
            }}>
                {props.text}
            </div>
        )
    } else if (!complete) {
        // do this
        return (
            <div style={{
                cursor: "pointer"
        }} onClick={()=>{
                setComplete(!complete)
            }}>
                {props.text}
            </div>
        )
    }
}

function DailyTask(props){

    return (
        <div className="DailyTask-container">
            <img className="acnh-logo" src={require("../acnh.jpeg")} alt="acnh logo"/> 
            <h1>Daily Island Tasks</h1> 
            <Task text={"Shake Trees"}/>
            <Task text={"Hit Rocks"}/>
            <Task text={"Find Fossils"}/>
            <Task text={"Nook Terminal"}/>
            <Task text={"Plant Money Tree"}/>            
        </div>
    )
}

export default DailyTask