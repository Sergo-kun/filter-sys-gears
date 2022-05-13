const sortByStr = (obj, param) => {
    const arr = [...obj].sort((obj1, obj2) => {
        if (obj1[param] < obj2[param]) {
          return -1;
        }
        if (obj1[param] > obj2[param]) {
          return 1;
        }
        return 0;
      });
      return arr;
}

export default sortByStr