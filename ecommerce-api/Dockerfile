FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma


RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

# **Thư mục làm việc trong container** là thư mục mà Docker đặt làm **thư mục hiện tại (current directory)** để các lệnh tiếp theo chạy bên trong container.

# Ví dụ:

# ```dockerfile
# WORKDIR /app
# ```

# nghĩa là:

# > "Từ đây trở đi, hãy coi `/app` là thư mục hiện tại trong container."

# ### Ví dụ dễ hiểu

# Giả sử Dockerfile:

# ```dockerfile
# FROM node:22-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# CMD ["npm", "run", "start:dev"]
# ```

# Sau:

# ```dockerfile
# WORKDIR /app
# ```

# container có:

# ```text
# /
# ├── bin/
# ├── etc/
# ├── usr/
# ├── ...
# └── app/          ← thư mục làm việc
#     ├── package.json
#     ├── package-lock.json
#     ├── node_modules/
#     └── src/
# ```

# Khi Docker chạy:

# ```dockerfile
# RUN npm install
# ```

# thì nó tương đương:

# ```bash
# cd /app
# npm install
# ```

# Và khi chạy:

# ```dockerfile
# CMD ["npm", "run", "start:dev"]
# ```

# thì cũng tương đương:

# ```bash
# cd /app
# npm run start:dev
# ```

# ---

# ### Nếu không có `WORKDIR`

# Ví dụ:

# ```dockerfile
# FROM node:22-alpine

# COPY . .

# RUN npm install
# ```

# Docker sẽ không tự biết bạn muốn làm việc ở `/app`. Bạn phải xử lý đường dẫn rõ ràng hơn.

# Vì vậy thường viết:

# ```dockerfile
# WORKDIR /app
# ```

# để cấu trúc rõ ràng.

# ### Một cách hiểu rất đơn giản

# Hãy tưởng tượng bạn SSH vào server:

# ```bash
# ssh server
# cd /app
# npm install
# npm run start
# ```

# thì:

# ```dockerfile
# WORKDIR /app
# ```

# gần giống với việc Docker thực hiện:

# ```bash
# cd /app
# ```

# **Nó không phải thư mục trên máy thật của bạn.** Nó là `/app` **bên trong container**.

# Ví dụ:

# ```text
# Máy của bạn                  Container
# ─────────────                ─────────────
# project/                     /app/
# ├── src/                     ├── src/
# ├── package.json      →      ├── package.json
# └── Dockerfile               └── ...
# ```

# `COPY . .` mới là thao tác **copy dữ liệu từ máy bạn vào `/app` trong container**.
