import { INCLUDE_PARAM_NAME, EXCLUDE_PARAM_NAME } from "../../components/ResultBlock/actionParamNames";



const filterResult = (data, filterParam, conditionName) => {
   
    //data - данні які потрібно перебрати
    //filterParam - наприклад name: Masha
    //conditionName - відбирати всіх з данними name: Masha або ігнорувати
    
    const paramValue = Object.values(filterParam)// дістаєм значення
    const paramKey = Object.keys(filterParam) // дістаємо ключ
   


    let result = null
    if (conditionName === EXCLUDE_PARAM_NAME){// перевіряємо чи включати в список такі данні
        result = data.data.filter((obj) => obj[paramKey] !== paramValue[0])
   
    }
    if (conditionName === INCLUDE_PARAM_NAME){// перевіряємо чи ігнорувати такі данні
        result = data.data.filter((obj) => obj[paramKey] === paramValue[0])
    }
    return result
    
}


export default filterResult