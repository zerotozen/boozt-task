export const sortProductsByLowerPrice = (collectionData) => {
  return collectionData.sort(function (a, b) {
    if (a.actual_price < b.actual_price) return -1;
    if (a.actual_price < b.actual_price) return 1;
    return 0;
  });
};

export const sortProductsByHigherPrice = (collectionData) => {
  return collectionData.sort(function (a, b) {
    if (a.actual_price > b.actual_price) return -1;
    if (a.actual_price > b.actual_price) return 1;
    return 0;
  });
};
