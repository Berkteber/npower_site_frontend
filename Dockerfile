 
# Railway için React proje Dockerfile
FROM node:18 AS build

# Çalışma dizinini belirle
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install --omit=dev

# Diğer tüm dosyaları kopyala
COPY . . 

# React projesini build et
RUN npm run build

# Uygulamayı başlat
CMD ["npm", "start"]
