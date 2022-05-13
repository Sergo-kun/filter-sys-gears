import sortByNumber from "./sortByNumber";
import sortByStr from "./sortByStr";



const sortResult = (result, data, sortParam) => {
    console.log( data.data[0][sortParam])
    const sortParamType = typeof data.data[0][sortParam]; // дізнаємося по якому типу данних сортувати

    if (sortParamType === 'number') {// якщо сортувати по числам
      return sortByNumber(result, sortParam);
    }    // якщо по алфавіту
    return sortByStr(result, sortParam);
  };
  


export default sortResult