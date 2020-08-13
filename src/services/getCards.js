import axios from 'axios';

const getCards = async () => {
  try {
    const data = await axios.get();
    return data;
  } catch (e) {
    return false;
  }
};

export { getCards };
