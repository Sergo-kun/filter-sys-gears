export const toJSON = (data, boolean) => {
    try {
        if (boolean){
            return JSON.stringify(data, null, 2)
        }else{
            return JSON.stringify(data)
        }
       
    } catch (error) {
        alert("Не вийшло трасформувати в JSON(((")
        return null
    }
}
export const fromJSON = (data) => {
    try {
        return JSON.parse(data)
    } catch (error) {
        alert("Не вийшло трансформувати з JSON-у")
        return null
    }
}