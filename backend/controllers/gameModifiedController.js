const databaseQuery = require("../config/databaseQuery");

const OK = 200;
const InternalServer = 500;

exports.getTableInfo = async (req, res) => {
  const queryGetTableInfo = "SELECT * FROM tb_table WHERE table_name = ?";
  const queryGetTableResults =
    "SELECT * FROM tb_results order by results_id desc";

  const queryGetTableResultsAsc = "SELECT * FROM tb_results";

  const queryGetMinMaxTableResultCount =
    "SELECT MAX(results_id) as maxResults_id FROM tb_results";

  const queryGetCustomizeTableResults =
    "SELECT * FROM tb_results WHERE results_id BETWEEN ? AND ? order by results_id desc";

  const queryGetResultCount =
    "SELECT results_num, COUNT(results_num) AS count FROM tb_results GROUP BY results_num ORDER BY results_num DESC";

  const {
    query: { tableName },
  } = req;

  try {
    const tableResultsMin = 20;
    const getResultsCount = await databaseQuery(queryGetResultCount);
    const getLatestResultsId = await databaseQuery(
      queryGetMinMaxTableResultCount
    );
    const latestResultsId = getLatestResultsId[0]?.maxResults_id;
    const getTableInfo = await databaseQuery(queryGetTableInfo, [tableName]);
    const getTableResults = await databaseQuery(queryGetTableResults);
    const getTableResultsAsc = await databaseQuery(queryGetTableResultsAsc);
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
      [startIndex, latestResultsId]
    );

    function calculatePercentageResults() {
      let newArr = [];
      getResultsCount.map((c) =>
        newArr.push({
          resultName: c.results_num,
          calc: c.count,
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
      error: error,
    });
  }
};

exports.postResults = async (req, res) => {
  const queryInsertResults =
    "INSERT INTO tb_results(`results_table`, `results_num`, `results_created`) VALUE(?, ?, NOW())";
  const queryGetTableResults =
    "SELECT * FROM tb_results order by results_id desc";

  const queryGetTableResultsAsc = "SELECT * FROM tb_results";

  const queryGetMinMaxTableResultCount =
    "SELECT MAX(results_id) as maxResults_id FROM tb_results";

  const queryGetCustomizeTableResults =
    "SELECT * FROM tb_results WHERE results_id BETWEEN ? AND ? order by results_id desc";

  const queryGetResultCount =
    "SELECT results_num, COUNT(results_num) AS count FROM tb_results GROUP BY results_num ORDER BY results_num DESC";

  const {
    body: { table_name, results_num },
  } = req;
  try {
    const tableResultsMin = 20;
    await databaseQuery(queryInsertResults, [table_name, results_num]);

    const getTableResults = await databaseQuery(queryGetTableResults);
    const tableTotalLength = getTableResults.length;
    const getLatestResultsId = await databaseQuery(
      queryGetMinMaxTableResultCount
    );
    const latestResultsId = getLatestResultsId[0]?.maxResults_id;
    const calculateStartIndex = tableTotalLength - tableResultsMin;
    const newStartIndex = calculateStartIndex <= 0 ? 1 : calculateStartIndex;

    const getTableResultsAsc = await databaseQuery(queryGetTableResultsAsc);

    function initialStartIndex() {
      return getTableResultsAsc.find((t, index) => index == newStartIndex)
        ?.results_id;
    }

    const startIndex = initialStartIndex();
    const getCustomizeTableResults = await databaseQuery(
      queryGetCustomizeTableResults,
      [startIndex, latestResultsId]
    );

    const getResultsCount = await databaseQuery(queryGetResultCount);
    function calculatePercentageResults() {
      let newArr = [];
      getResultsCount.map((c) =>
        newArr.push({
          resultName: c.results_num,
          calc: Number((c.count / tableTotalLength) * 100).toFixed(2) + "%",
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
  const queryGetLatestResultsId =
    "SELECT MAX(results_id) as results_id FROM tb_results LIMIT 1;";

  const queryDeleteLatestResults =
    "DELETE FROM tb_results WHERE results_id = ?";

  const queryGetTableResults =
    "SELECT * FROM tb_results order by results_id desc";

  const queryGetTableResultsAsc = "SELECT * FROM tb_results";

  const queryGetMinMaxTableResultCount =
    "SELECT MAX(results_id) as maxResults_id FROM tb_results";

  const queryGetCustomizeTableResults =
    "SELECT * FROM tb_results WHERE results_id BETWEEN ? AND ? order by results_id desc";

  const queryGetResultCount =
    "SELECT results_num, COUNT(results_num) AS count FROM tb_results GROUP BY results_num ORDER BY results_num DESC";

  try {
    const tableResultsMin = 20;
    const getLatestResultsId = await databaseQuery(queryGetLatestResultsId);

    const latestResultsId = getLatestResultsId[0]?.results_id;
    await databaseQuery(queryDeleteLatestResults, [latestResultsId]);

    const getTableResults = await databaseQuery(queryGetTableResults);

    const tableTotalLength = getTableResults.length;
    const getLatestMaxResultId = await databaseQuery(
      queryGetMinMaxTableResultCount
    );
    const maxResultsId = getLatestMaxResultId[0]?.maxResults_id;

    const newStartIndex =
      tableTotalLength - tableResultsMin <= 0
        ? 1
        : tableTotalLength - tableResultsMin;

    const getTableResultsAsc = await databaseQuery(queryGetTableResultsAsc);

    function initialStartIndex() {
      return getTableResultsAsc.find((t, index) => index == newStartIndex)
        ?.results_id;
    }

    const startIndex = initialStartIndex();
    const getCustomizeTableResults = await databaseQuery(
      queryGetCustomizeTableResults,
      [startIndex, maxResultsId]
    );

    const getResultsCount = await databaseQuery(queryGetResultCount);
    function calculatePercentageResults() {
      console.log(getResultsCount);
      console.log("Total length: ", tableTotalLength);
      let newArr = [];
      getResultsCount.map((c) =>
        newArr.push({
          resultName: c.results_num,
          calc: Number((c.count / tableTotalLength) * 100).toFixed(2) + "%",
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
