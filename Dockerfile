# Node.js 18 kullan
FROM node:20

WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install --legacy-peer-deps

# Bellek sınırını artır
ENV NODE_OPTIONS="--max-old-space-size=1024"

# Diğer tüm dosyaları kopyala
COPY . . 

# React projesini build et
RUN npm run build

# Uygulamayı başlat
CMD ["npm", "start"]
