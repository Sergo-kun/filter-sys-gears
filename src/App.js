import { useState } from 'react';
import './App.css';
import InerBlock from './components/InnerBlock/InerBlock';
import ResultBlock from './components/ResultBlock/ResultBlock';

function App() {
const [incomingValue, setIncomingValue] = useState("") /*данні що потрібно перебрати */
  const [conditionValue, setConditionValue] = useState("") // критерії по яким данні будуть перебиратися

  



  return (
    <div className="App">
     

     <InerBlock  setIncomingValue={setIncomingValue} setConditionValue={setConditionValue}/>{/*блок для вводу іеформації */}
      <ResultBlock setIncomingValue={setIncomingValue} incomingValue={incomingValue} conditionValue={conditionValue}/>{/*блок для виводу інформації*/}


     
    </div>
  );
}

export default App;
