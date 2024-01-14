const getRandomProducts = (arr, n) => {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);

  if (n > len) {
    n = len;

    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    // throw new RangeError("getRandom: more elements taken than available");
  } else {
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
  }
  return result;
};

export default getRandomProducts;
