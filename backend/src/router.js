const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

const vehiculesControllers = require("./controllers/vehiculesControllers");

router.get("/vehicules", vehiculesControllers.browse);
router.get("/vehicules/:id", vehiculesControllers.read);
router.put("/vehicules/:id", vehiculesControllers.edit);
router.post("/vehicules", vehiculesControllers.add);
router.delete("/vehicules/:id", vehiculesControllers.destroy);

const employedControllers = require("./controllers/employedControllers");

router.get("/employed", employedControllers.browse);
router.get("/employed/:id", employedControllers.read);
router.put("/employed/:id", employedControllers.edit);
router.post("/employed", employedControllers.add);
router.delete("/employed/:id", employedControllers.destroy);

const siloControllers = require("./controllers/siloControllers");

router.get("/silo", siloControllers.browse);
router.get("/silo/:id", siloControllers.read);
router.put("/silo/:id", siloControllers.edit);
router.post("/silo", siloControllers.add);
router.delete("/silo/:id", siloControllers.destroy);

module.exports = router;
