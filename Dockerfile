FROM node:20

# Crear directorio de la app
WORKDIR /app

# Copiar solo package.json y package-lock.json para instalar dependencias primero
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto que usará el contenedor (Render espera que uses process.env.PORT)
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]
