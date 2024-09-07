# Użyj oficjalnego obrazu Node.js jako bazowego
FROM node:22.8

# Ustaw katalog roboczy wewnątrz kontenera
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json (jeśli istnieją)
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę kodu aplikacji
COPY .. .

# Eksponuj port developerski Vue (zazwyczaj 3000 lub 8080)
EXPOSE 3000 8080

# Uruchom aplikację w trybie deweloperskim
CMD ["npm", "run", "dev"]
