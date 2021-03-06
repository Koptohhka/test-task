import axios from 'axios';
import { API_URL } from '../utils/constants';

const getCards = async (endPoint) => {
  try {
    const data = await axios.get((API_URL + endPoint));
    return data;
  } catch (e) {
    return false;
  }
};

export default getCards;
