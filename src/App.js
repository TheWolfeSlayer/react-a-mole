import { useState } from "react";
import MoleContainer from './component/MoleContainer'



function App() {
  let [score, setScore] = useState(0)
  function createMoleHill() {
    let hills = []
    for(let ii = 0; ii < 9 ; ii++ ) {
      hills.push(<MoleContainer key={ii} setScore={setScore} score={score}/>)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  return (
    <div className="App">
      <h1>React a mole</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
