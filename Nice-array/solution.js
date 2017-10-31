let isNice = arr => {
  return arr.length > 0 ?
    arr.every((e, i, a) => {
      return a.indexOf(e + 1) !== -1 || a.indexOf(e - 1) !== -1;
    }) : false;
};
