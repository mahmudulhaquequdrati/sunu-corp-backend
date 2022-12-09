const controller = require("../controllers/controller");
const router = require("express").Router();
router.get("/all", controller.getAllDatas);
router.get("/:category", controller.getDatasWithParams);
router.get("/id/:id", controller.getASingleData);

router.delete("/delete/:id", controller.deleteData);

router.put("/update/:id", controller.updateData);

router.post("/add-data", controller.postAData);

module.exports = router;
