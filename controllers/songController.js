const db = require("../models");
const Song = db.songs;

// Crear canción
const createSong = async (req, res) => {
  try {
    const data = await Song.create(req.body);
    res.status(201).json({ message: "🎵 Canción creada", data });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la canción", details: error.message });
  }
};

// Obtener todas las canciones (versión real con DB)
const getAllSongs = async (req, res) => {
  try {
    const data = await Song.findAll();
    console.log("✅ Canciones recuperadas:", data.length);
    res.status(200).json(data);
  } catch (error) {
    console.error("❌ Error en getAllSongs:", error.message);
    res.status(500).json({ error: "Error al obtener canciones", details: error.message });
  }
};

// Eliminar canción por ID
const deleteSong = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Song.destroy({ where: { id } });

    if (deleted) {
      res.status(200).json({ message: "❌ Canción eliminada" });
    } else {
      res.status(404).json({ message: "No se encontró la canción con ese ID" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar", details: error.message });
  }
};

module.exports = {
  createSong,
  getAllSongs,
  deleteSong,
};
