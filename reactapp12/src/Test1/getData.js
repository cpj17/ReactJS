import axios from 'axios';

const fetchData = async (apiURL) => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    throw error; // You can choose to rethrow the error or handle it differently
  }
};

export default fetchData;