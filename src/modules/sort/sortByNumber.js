const sortByNumber = (obj, sortParam) => {
 return [...obj].sort((obj1, obj2) => obj1[sortParam] - obj2[sortParam])
}


export default sortByNumber