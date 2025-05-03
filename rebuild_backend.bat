@echo off
echo 🔥 Eliminando node_modules y package-lock.json...

rmdir /s /q node_modules
del package-lock.json

echo ✅ Instalando dependencias limpias...
npm install

echo 🚀 Reconstruyendo imagen Docker sin cache...
docker build --no-cache -t daniel24paz/backgeneromusical:latest .

echo 🐳 Ejecutando contenedor en puerto 3000...
docker run -p 3000:3000 daniel24paz/backgeneromusical:latest
