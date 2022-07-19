# react-express-ecom

## Setup

1. cd backend & yarn install
2. cd frontend & yarn install  

## Installs

- For Windows: For windows: https://docs.microsoft.com/en-us/windows/wsl/install
- Local Postgres : https://www.pgadmin.org/download/
- Local Redis: https://redis.io/docs/getting-started/

## Migration

1. cd to backend
2. npx prisma init
3. edit newly created .env

Add these variables:

DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/DBNAME?schema=public"
DB_HOST= postgres
DB_PORT= 5433
DB_USER= postgres
DB_PASSWORD= postgres
DB_NAME= postgres
REDIS_HOST= 127.0.0.1
REDIS_PORT= 6379
REDIS_PASSWORD= password
CHOKIDAR_USEPOLLING= true

4. npx prisma generate

## Startup

1. cd backend
2. open 2 wsl terminals "redis-server" "redis-cli"
3. yarn dev
4. cd frontend 
5. yarn start



