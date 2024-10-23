FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta padrão do React
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
