const databaseQuery = require("../config/databaseQuery");

const OK = 200;
const InternalServer = 500;

exports.getTableInfo = async (req, res) => {
  const queryGetTableInfo = "SELECT * FROM tb_table WHERE table_name = ?";
  const queryGetTableResults =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ? order by results_id desc";

  const queryGetTableResultsAsc =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ?";

  const queryGetMinMaxTableResultCount =
    "SELECT MAX(results_id) as maxResults_id FROM tb_results WHERE results_table = ? AND current_shoe = ?";

  const queryGetCustomizeTableResults =
    "SELECT * FROM tb_results WHERE results_table = ? AND results_id BETWEEN ? AND ? order by results_id desc";

  const queryGetResultCount =
    "SELECT results_num, COUNT(results_num) AS count FROM tb_results WHERE results_table = ? AND current_shoe = ? GROUP BY results_num ORDER BY results_num DESC LIMIT 100";

  const {
    query: { tableName },
  } = req;

  try {
    const tableResultsMin = 20;

    const getTableInfo = await databaseQuery(queryGetTableInfo, [tableName]);

    const currentShoe = getTableInfo[0]?.current_shoe;

    const getLatestResultsId = await databaseQuery(
      queryGetMinMaxTableResultCount,
      [tableName, currentShoe]
    );

    const latestResultsId = getLatestResultsId[0]?.maxResults_id;

    const getResultsCount = await databaseQuery(queryGetResultCount, [
      tableName,
      currentShoe,
    ]);

    const getTableResults = await databaseQuery(queryGetTableResults, [
      tableName,
      currentShoe,
    ]);

    const getTableResultsAsc = await databaseQuery(queryGetTableResultsAsc, [
      tableName,
      currentShoe,
    ]);
    const tableTotalLength = getTableResults.length;

    const newStartIndex =
      tableTotalLength - tableResultsMin <= 0
        ? 1
        : tableTotalLength - tableResultsMin;

    function initialStartIndex() {
      return getTableResultsAsc.find((t, index) => index == newStartIndex)
        ?.results_id;
    }

    const startIndex = initialStartIndex();
    const getCustomizeTableResults = await databaseQuery(
      queryGetCustomizeTableResults,
      [tableName, startIndex, latestResultsId]
    );

    function calculatePercentageResults() {
      let newArr = [];
      console.log(tableTotalLength);
      getResultsCount.map((c) =>
        newArr.push({
          resultName: c.results_num,
          calc: `${Number((c.count * 100) / tableTotalLength).toFixed(0)}%`,
        })
      );
      return newArr;
    }

    return res.status(OK).send({
      tableInfo: getTableInfo,
      tableResults:
        tableTotalLength <= 20 ? getTableResults : getCustomizeTableResults,
      tablePercentage: calculatePercentageResults(),
    });
  } catch (error) {
    return res.status(InternalServer).send({
      message: "Internal server error.",
    });
  }
};

exports.postResults = async (req, res) => {
  const queryGetCurrentShoeTable =
    "SELECT current_shoe FROM tb_table WHERE table_name = ?";
  const queryInsertResults =
    "INSERT INTO tb_results(`results_table`, `results_num`, `current_shoe`, `results_created`) VALUE(?, ?, ?, NOW())";
  const queryGetTableResults =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ? order by results_id desc";

  const queryGetTableResultsAsc =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ?";

  const queryGetMinMaxTableResultCount =
    "SELECT MAX(results_id) as maxResults_id FROM tb_results WHERE results_table = ? AND current_shoe = ?";

  const queryGetCustomizeTableResults =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ? AND results_id BETWEEN ? AND ? order by results_id desc";

  const queryGetResultCount =
    "SELECT results_num, COUNT(results_num) AS count FROM tb_results WHERE results_table = ? AND current_shoe = ? GROUP BY results_num ORDER BY results_num DESC LIMIT 100";

  const {
    body: { table_name, results_num },
  } = req;
  try {
    const tableResultsMin = 20;

    const getCurrentShoeTable = await databaseQuery(queryGetCurrentShoeTable, [
      table_name,
    ]);
    const currShoeTable = getCurrentShoeTable[0]?.current_shoe;
    console.log(currShoeTable);
    await databaseQuery(queryInsertResults, [
      table_name,
      results_num,
      currShoeTable,
    ]);

    const getTableResults = await databaseQuery(queryGetTableResults, [
      table_name,
      currShoeTable,
    ]);
    const tableTotalLength = getTableResults.length;
    const getLatestResultsId = await databaseQuery(
      queryGetMinMaxTableResultCount,
      [table_name, currShoeTable]
    );
    const latestResultsId = getLatestResultsId[0]?.maxResults_id;
    const calculateStartIndex = tableTotalLength - tableResultsMin;
    const newStartIndex = calculateStartIndex <= 0 ? 1 : calculateStartIndex;

    const getTableResultsAsc = await databaseQuery(queryGetTableResultsAsc, [
      table_name,
      currShoeTable,
    ]);

    function initialStartIndex() {
      return getTableResultsAsc.find((t, index) => index == newStartIndex)
        ?.results_id;
    }

    const startIndex = initialStartIndex();
    const getCustomizeTableResults = await databaseQuery(
      queryGetCustomizeTableResults,
      [table_name, currShoeTable, startIndex, latestResultsId]
    );

    const getResultsCount = await databaseQuery(queryGetResultCount, [
      table_name,
      currShoeTable,
    ]);
    function calculatePercentageResults() {
      let newArr = [];
      getResultsCount.map((c) =>
        newArr.push({
          resultName: c.results_num,
          calc: `${Number((c.count * 100) / tableTotalLength).toFixed(0)}%`,
        })
      );
      return newArr;
    }

    return res.status(OK).send({
      tableResults:
        tableTotalLength <= 20 ? getTableResults : getCustomizeTableResults,
      tablePercentage: calculatePercentageResults(),
    });
  } catch (error) {
    return res.status(InternalServer).send({
      message: "Internal server error.",
    });
  }
};

exports.deleteResults = async (req, res) => {
  const queryGetCurrentShoeTable =
    "SELECT current_shoe FROM tb_table WHERE table_name = ?";

  const queryGetLatestResultsId =
    "SELECT MAX(results_id) as results_id FROM tb_results WHERE results_table = ? AND current_shoe = ? LIMIT 1;";

  const queryDeleteLatestResults =
    "DELETE FROM tb_results WHERE results_id = ?";

  const queryGetTableResults =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ? order by results_id desc";

  const queryGetTableResultsAsc =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ?";

  const queryGetMinMaxTableResultCount =
    "SELECT MAX(results_id) as maxResults_id FROM tb_results WHERE results_table = ? AND current_shoe = ?";

  const queryGetCustomizeTableResults =
    "SELECT * FROM tb_results WHERE results_table = ? AND current_shoe = ? AND results_id BETWEEN ? AND ? order by results_id desc";

  const queryGetResultCount =
    "SELECT results_num, COUNT(results_num) AS count FROM tb_results WHERE results_table = ? AND current_shoe = ? GROUP BY results_num ORDER BY results_num DESC LIMIT 100";

  const {
    query: { table_name },
  } = req;

  try {
    const tableResultsMin = 20;

    const getCurrentShoeTable = await databaseQuery(queryGetCurrentShoeTable, [
      table_name,
    ]);
    const currShoeTable = getCurrentShoeTable[0]?.current_shoe;

    const getLatestResultsId = await databaseQuery(queryGetLatestResultsId, [
      table_name,
      currShoeTable,
    ]);

    const latestResultsId = getLatestResultsId[0]?.results_id;
    await databaseQuery(queryDeleteLatestResults, [latestResultsId]);

    const getTableResults = await databaseQuery(queryGetTableResults, [
      table_name,
      currShoeTable,
    ]);

    const tableTotalLength = getTableResults.length;
    const getLatestMaxResultId = await databaseQuery(
      queryGetMinMaxTableResultCount,
      [table_name, currShoeTable]
    );
    const maxResultsId = getLatestMaxResultId[0]?.maxResults_id;

    const newStartIndex =
      tableTotalLength - tableResultsMin <= 0
        ? 1
        : tableTotalLength - tableResultsMin;

    const getTableResultsAsc = await databaseQuery(queryGetTableResultsAsc, [
      table_name,
      currShoeTable,
    ]);

    function initialStartIndex() {
      return getTableResultsAsc.find((t, index) => index == newStartIndex)
        ?.results_id;
    }

    const startIndex = initialStartIndex();
    const getCustomizeTableResults = await databaseQuery(
      queryGetCustomizeTableResults,
      [table_name, currShoeTable, startIndex, maxResultsId]
    );

    const getResultsCount = await databaseQuery(queryGetResultCount, [
      table_name,
      currShoeTable,
    ]);
    function calculatePercentageResults() {
      let newArr = [];
      getResultsCount.map((c) =>
        newArr.push({
          resultName: c.results_num,
          calc: `${Number((c.count * 100) / tableTotalLength).toFixed(0)}%`,
        })
      );
      return newArr;
    }

    return res.status(OK).send({
      tableResults:
        tableTotalLength <= 20 ? getTableResults : getCustomizeTableResults,
      tablePercentage: calculatePercentageResults(),
    });
  } catch (error) {
    return res.status(InternalServer).send({
      message: "Internal server error.",
      error: error,
    });
  }
};

exports.newShoeTable = async (req, res) => {
  const queryFindTableCurrentShoe =
    "SELECT current_shoe FROM tb_table WHERE table_name = ?";

  const queryNewShoeTable =
    "UPDATE tb_table SET current_shoe = ? WHERE table_name = ?";

  const queryGetCurrentShoeLimitOneTable =
    "SELECT MAX(current_shoe) as current_shoe FROM tb_results WHERE results_table = ?";

  const queryReportAddlogs =
    "INSERT INTO tb_logs (`logs_content`, `logs_message`, `logs_from`, `logs_to`, `logs_created`) VALUE('New Shoe', ?, ?, ?, NOW())";

  const {
    body: { table_name },
  } = req;

  try {
    const findcurrentShoeTable = await databaseQuery(
      queryFindTableCurrentShoe,
      [table_name]
    );

    const findLatestCurrentShoe = await databaseQuery(
      queryGetCurrentShoeLimitOneTable,
      [table_name]
    );

    const latestCurrentShoe = findLatestCurrentShoe[0]?.current_shoe;

    const currShoeTable = findcurrentShoeTable[0]?.current_shoe;
    const incrementCurrentShoe = currShoeTable + 1;
    const incrementLatestShoe = latestCurrentShoe + 1;

    console.log("currShoeTable: ", currShoeTable);
    console.log("latestCurrentShoe: ", latestCurrentShoe);

    if (currShoeTable == null) {
      await databaseQuery(queryReportAddlogs, [
        `New shoe detected on table ${table_name}`,
        null,
        1,
      ]);
      await databaseQuery(queryNewShoeTable, [1, table_name]);
    }
    if (currShoeTable < latestCurrentShoe) {
      await databaseQuery(queryReportAddlogs, [
        `New shoe detected on table ${table_name}`,
        currShoeTable,
        incrementLatestShoe,
      ]);
      await databaseQuery(queryNewShoeTable, [incrementLatestShoe, table_name]);
    } else {
      await databaseQuery(queryReportAddlogs, [
        `New shoe detected on table ${table_name}`,
        currShoeTable,
        incrementCurrentShoe,
      ]);
      await databaseQuery(queryNewShoeTable, [
        incrementCurrentShoe,
        table_name,
      ]);
    }

    return res.status(OK).send({
      message: `New shoe from table ${table_name}`,
    });
  } catch (error) {
    return res.status(InternalServer).send({
      message: "Internal server error.",
      error: error,
    });
  }
};

exports.getTableShoe = async (req, res) => {
  const queryGetTableShoe =
    "SELECT current_shoe, MAX(results_created) AS latest_created FROM tb_results WHERE results_table = ? AND current_shoe != '' GROUP BY current_shoe order by current_shoe desc LIMIT 10";

  const {
    body: { table_name },
  } = req;

  try {
    console.log(table_name);
    const getTableShoe = await databaseQuery(queryGetTableShoe, [table_name]);

    return res.status(OK).send(getTableShoe);
  } catch (error) {
    res.status(InternalServer).send({
      message: "Internal server error.",
    });
  }
};

exports.enterTableShoe = async (req, res) => {
  const queryLocateTableShoe =
    "UPDATE tb_table SET current_shoe = ? WHERE table_name = ?";

  const queryGetCurrentShoeTable =
    "SELECT current_shoe FROM tb_table WHERE table_name = ?";

  const queryReportAddlogs =
    "INSERT INTO tb_logs (`logs_content`, `logs_message`, `logs_from`, `logs_to`, `logs_created`) VALUE('Enter shoe', ?, ?, ?, NOW())";

  const {
    body: { table_name, current_shoe },
  } = req;

  try {
    const getCurrentShoeTable = await databaseQuery(queryGetCurrentShoeTable, [
      table_name,
    ]);

    const prevShoeTable = getCurrentShoeTable[0]?.current_shoe;
    const getTableShoe = await databaseQuery(queryLocateTableShoe, [
      current_shoe,
      table_name,
    ]);

    await databaseQuery(queryReportAddlogs, [
      `The system reported that a user entered a different shoe on table ${table_name}`,
      prevShoeTable,
      current_shoe,
    ]);

    return res.status(OK).send(getTableShoe);
  } catch (error) {
    res.status(InternalServer).send({
      message: "Internal server error.",
    });
  }
};
