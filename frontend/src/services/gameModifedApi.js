import axios from "axios";

const fetchGetResults = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/moneywheel/GET/table/info"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchInsertResults = async ({ results_num }) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/moneywheel/POST/table/insert",
      {
        results_num: results_num,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchDeleteResults = async () => {
  try {
    const response = await axios.delete(
      "http://localhost:3000/api/moneywheel/DELETE/table/delete"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchGetResults, fetchInsertResults, fetchDeleteResults };
