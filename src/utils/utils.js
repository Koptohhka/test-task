const calculatePaginationValue = (dataLength) => {
  const CARDS_PER_PAGE = 10;
  const numberOfPages = dataLength / CARDS_PER_PAGE;
  return numberOfPages;
};

export { calculatePaginationValue };
