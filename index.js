const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

const db = require("./models");
const songRoutes = require("./routes/song.routes");

const PORT = process.env.PORT || 3000;

// ✅ Middleware para CORS (Render)
app.use(cors({
  origin: 'https://frontgeneromusical.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.options('*', cors()); // 🔥 Responde preflight para CORS

app.use(express.json());

// ✅ Rutas
app.use("/api", songRoutes);

// ✅ Conexión a la BD sin reinicio forzoso
db.sequelize.sync()
  .then(() => {
    console.log("✅ Base de datos sincronizada");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al sincronizar la base de datos:", err.message);
  });
