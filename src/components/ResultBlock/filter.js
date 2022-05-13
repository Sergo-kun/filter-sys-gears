import { SORT_PARAM_NAME, INCLUDE_PARAM_NAME, EXCLUDE_PARAM_NAME  } from "./actionParamNames"
import filterResult from "../../modules/filter/filterResult"
import sortResult from "../../modules/sort/sortResult"



export  function filter(incomingValue, conditionValue) {
    if (!incomingValue || !conditionValue) { // якщо критерії перебору та данні пусті
        return
    }
   const  conditionsObj = conditionValue['condition']
 const conditionNames = Object.keys(conditionsObj)
    let result = incomingValue

 conditionNames.forEach((conditionName) => {
     if (conditionName === EXCLUDE_PARAM_NAME || conditionName === INCLUDE_PARAM_NAME){ // перевірка на наявність або відсутність єлементів в рядку
        const filterParam = conditionsObj[conditionName][0];
        result = filterResult(result, filterParam, conditionName);       
     }
     if (conditionName === SORT_PARAM_NAME) { // перевірка для фільтрації
        const sortParam = conditionsObj[conditionName][0];
        result = sortResult(result, incomingValue, sortParam);
       
      }
 })
 return JSON.stringify(result, null, 2)

}
