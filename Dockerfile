# Etap 1: Budowanie aplikacji
FROM node:22.8 AS builder

# Ustaw katalog roboczy dla budowy
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj wszystkie zależności
RUN npm install

# Skopiuj resztę kodu aplikacji
COPY . .

# Buduj aplikację (wynik znajdzie się w .output/)
RUN npm run build
ENV NODE_ENV=production

# Etap 2: Finalny obraz
FROM node:22.8-slim

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj tylko wynik budowy z poprzedniego etapu
COPY --from=builder /app/.output ./

# Instalacja zależności produkcyjnych (tylko to, co potrzebne)
RUN apt-get update && apt-get install -y libvips

# Eksponuj port HTTPS (jeśli aplikacja jest w trybie produkcyjnym)
EXPOSE 443

# Uruchom aplikację
CMD ["node", "server/index.mjs"]
