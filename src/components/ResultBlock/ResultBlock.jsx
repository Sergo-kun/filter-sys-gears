import React, { useEffect, useState } from 'react'
import { filter } from './filter'

export default function ResultBlock({setIncomingValue,incomingValue, conditionValue}) {

const [resultat, setResultat] = useState('')
useEffect(() => {
   
 setResultat(filter(incomingValue, conditionValue))
 console.log(resultat)
},[incomingValue, setIncomingValue])

  return (
    <div className='block'>
    <div className='title'>Результат</div>
    <textarea className='innerText' defaultValue={resultat} readOnly/>

  </div>
  )
}
