const express = require("express");
const router = express.Router();
const controller = require("../controllers/song.controller");

// Crear canción
router.post("/songs", controller.create);

// Obtener todas las canciones (si tienes esto en el controller también)
router.get("/songs", controller.findAll);

module.exports = router;
