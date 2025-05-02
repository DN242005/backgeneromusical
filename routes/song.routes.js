const express = require("express");
const router = express.Router();
const controller = require("../controllers/songController");

// Crear canción
router.post("/songs", controller.createSong);

// Obtener todas las canciones
router.get("/songs", controller.getAllSongs);

// Eliminar una canción (opcional si lo usarás)
router.delete("/songs/:id", controller.deleteSong);

module.exports = router;
