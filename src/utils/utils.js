import { TOTAL_NUMBER_OF_API_PAGES } from './constants';

const getRandomPageNumber = () => Math.floor(Math.random() * TOTAL_NUMBER_OF_API_PAGES);

export { getRandomPageNumber };
