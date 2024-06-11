import { useState } from "react"
import { getRandom, sum} from "./getrandom";
export default function Lotery(){
    let [num,setnum]=useState(getRandom(3));
    let isWin=(sum(num)===15);
    let BuyNew=()=>{
        setnum(getRandom(3));
    }
    return (
        <>
         <h2>Lotery Game</h2>
         <div className="ticket" style={{border:"solid",backgroundColor:"yellow"}}>
            <span>{num[0]}</span>
            <span>{num[1]}</span>
            <span>{num[2]}</span>
         </div>
         <button onClick={BuyNew}>Buy Ticket</button>
         <br></br>
         <h3>{isWin && "Congrates"}</h3>
        </>
    )
}
