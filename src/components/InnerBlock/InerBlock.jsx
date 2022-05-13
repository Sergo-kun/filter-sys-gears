import React from 'react'
import { useState } from 'react'
import { toJSON, fromJSON } from '../../helper/helper'

export default function InerBlock({setIncomingValue, setConditionValue}) {


     const [incomingText, setIncomingText] = useState(toJSON(
        {"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
         {"user": "john@mail.com", "rating": 25, "disabled": true}
       ], 
  
    }, true)  )
    const [condition, setCondition] = useState(toJSON(
        {
            "condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}
        }
    ))
    const heandlerEnter = e => {
        if (e.key === "Enter"){
            heandlerFind(e)
        }
    }
    const heandlerFind = e => {
        e.preventDefault()
        if (!incomingText || !condition) {
            alert("Вхідні данні або умова не можуть бути пустими")
            return
        }
        const incominData = fromJSON(incomingText)
        const conditionData = fromJSON(condition)
        setIncomingValue(incominData)
        setConditionValue(conditionData)
        
    }
    


  return (
    <div className='block'>
    <div className='title'>Вхідні данні</div>
    <textarea 
    className='innerText'
     style={{"height" : "300px"}} 
     defaultValue={incomingText}
     onChange={e => setIncomingText(e.target.value)}
    
     />
    <div className='title'>Умова</div>
    <textarea className='innerText'
     style={{"height" : "100px"}}
      defaultValue={condition}
      onChange={e => setCondition(e.target.value)}
      />
<button onClick={heandlerFind}>Відібрати</button>
  </div>
  )
}
