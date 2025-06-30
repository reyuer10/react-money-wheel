const express = require("express");
const router = express.Router();
const gameModifiedController = require("../controllers/gameModifiedController");

router.post("/GET/table/info", gameModifiedController.getTableInfo);
router.post("/POST/table/insert", gameModifiedController.postResults);
router.delete("/DELETE/table/delete", gameModifiedController.deleteResults);
router.post("/UPDATE/table/shoe", gameModifiedController.newShoeTable);
router.post("/GET/table/shoe", gameModifiedController.getTableShoe);
router.put("/PUT/table/locate/shoe", gameModifiedController.enterTableShoe);

module.exports = router;
