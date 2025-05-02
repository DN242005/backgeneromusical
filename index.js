const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const db = require("./models");
const songRoutes = require("./routes/song.routes");

const PORT = 3000;


// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", songRoutes);

// 🔥 Sincronizar base de datos y prueba directa con .findAll()
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("✅ Base de datos sincronizada");

    // 🔍 Prueba directa para saber si funciona el modelo
    db.songs.findAll()
      .then(data => {
        console.log("🎯 Consulta directa desde index.js:", data.length);
      })
      .catch(err => {
        console.error("💥 Error al consultar desde index.js:", err.message);
      });

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al sincronizar la base de datos:", err.message);
  });
