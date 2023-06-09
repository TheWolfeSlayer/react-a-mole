import { useState } from "react";
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const moleBopped = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    
    let displayMole = theMole ? <Mole setScore={props.setScore} setTheMole={setTheMole} moleBopped={moleBopped} /> : <EmptySlot setTheMole={setTheMole} />

    return (
        <div>
            {displayMole}
        </div>
    )
}

export default MoleContainer