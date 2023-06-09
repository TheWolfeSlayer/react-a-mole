import { useEffect } from "react";
import mole from "../mole/mole.png"

let Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setTheMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={mole} onClick={props.moleBopped} />
        </div>
    )
}

export default Mole