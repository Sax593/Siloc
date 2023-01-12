const express = require("express");
const fs = require("fs");

const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.post("/api/licence", upload.single("licence"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;

  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

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

const siloControllers = require("./controllers/siloControllers");

router.get("/silo", siloControllers.browse);
router.get("/silo/:id", siloControllers.read);
router.put("/silo/:id", siloControllers.edit);
router.post("/silo", siloControllers.add);
router.delete("/silo/:id", siloControllers.destroy);

const bookingControllers = require("./controllers/bookingControllers");

router.get("/booking", bookingControllers.browse);
router.get("/booking/:id", bookingControllers.read);
router.put("/booking/:id", bookingControllers.edit);
router.post("/booking", bookingControllers.add);
router.delete("/booking/:id", bookingControllers.destroy);

const transferControllers = require("./controllers/transferControllers");

router.get("/transfer", transferControllers.browse);
router.get("/transfer/:id", transferControllers.read);
router.put("/transfer/:id", transferControllers.edit);
router.post("/transfer", transferControllers.add);
router.delete("/transfer/:id", transferControllers.destroy);

module.exports = router;
