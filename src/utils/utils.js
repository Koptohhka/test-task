const calculatePaginationValue = (dataLength) => {
  const CARDS_PER_PAGE = 10;
  const numberOfPages = dataLength / CARDS_PER_PAGE;
  return numberOfPages;
};

const getRandomPageNumber = () => Math.floor(Math.random() * 124);

export { calculatePaginationValue, getRandomPageNumber };
