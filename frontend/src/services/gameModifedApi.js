import axios from "axios";

const localHost = import.meta.env.VITE_localhost;
const api = import.meta.env.VITE_api;
const getTableInfo = import.meta.env.VITE_GET_TABLE_INFO;
const postTableResults = import.meta.env.VITE_POST_TABLE_RESULT;
const deleteTableResults = import.meta.env.VITE_DELETE_TABLE_RESULT;

const fetchGetResults = async (table_name) => {
  try {
    const response = await axios.post(
      `${localHost}/${api}/${getTableInfo}?tableName=${table_name}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchInsertResults = async ({ table_name, results_num }) => {
  try {
    const response = await axios.post(
      `${localHost}/${api}/${postTableResults}`,
      {
        table_name: table_name,
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
      `${localHost}/${api}/${deleteTableResults}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchGetResults, fetchInsertResults, fetchDeleteResults };
