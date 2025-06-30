import axios from "axios";

const localHost = import.meta.env.VITE_localhost;
const api = import.meta.env.VITE_api;
const getTableInfo = import.meta.env.VITE_GET_TABLE_INFO;
const postTableResults = import.meta.env.VITE_POST_TABLE_RESULT;
const deleteTableResults = import.meta.env.VITE_DELETE_TABLE_RESULT;
const updateNewShoeResults = import.meta.env.VITE_UPDATE_NEW_SHOE;
const getShoeTable = import.meta.env.VITE_GET_TABLE_SHOE;
const enterShoeTalbe = import.meta.env.VITE_LOCATE_TABLE_SHOE;

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

const fetchDeleteResults = async (table_name) => {
  try {
    const response = await axios.delete(
      `${localHost}/${api}/${deleteTableResults}?table_name=${table_name}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchUpdateNewShoeTable = async ({ table_name }) => {
  try {
    const response = await axios.post(
      `${localHost}/${api}/${updateNewShoeResults}`,
      {
        table_name: table_name,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchShoeTable = async ({ table_name }) => {
  try {
    // fetchShoeTable
    const response = await axios.post(`${localHost}/${api}/${getShoeTable}`, {
      table_name: table_name,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchLocateShoeTable = async ({ current_shoe, table_name }) => {
  try {
    // fetchShoeTable
    const response = await axios.put(`${localHost}/${api}/${enterShoeTalbe}`, {
      current_shoe: current_shoe,
      table_name: table_name,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  fetchGetResults,
  fetchInsertResults,
  fetchDeleteResults,
  fetchUpdateNewShoeTable,
  fetchShoeTable,
  fetchLocateShoeTable,
};
