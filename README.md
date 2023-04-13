
# NodeJS/ReactJS - RERO FITNESS

  
## About
Application to register gym workouts using docker and nginx

## How to run for development


1. Clone this repository
```bash
git clone https://github.com/sararchh/projeto-rerofitness.git
```
2. Install all dependencies
```bash
npm i
```
3. . Configure the `.env` file using the `.env.example` file in each back and front directory (see "Running locally application or inside docker section" for details)
   
   BACKEND: 
```bash
MONGO_FULL_URL=

JWT_SECRET=
JWT_REFRESH_SECRET=
JWT_EXPIRES=

PORT=

MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
```

FRONT: 
```
VITE_API=http://localhost:80/api
```

1. Execute server
```bash
npm run dev
```
1. Build
```bash
npm run build
```
  

## Building and starting for production for the BACKEND
  
```bash
npm run  build
npm start
```

## Building and starting for production for the FRONTEND
  
```bash
npm run  build
npm start
```

## Docker

```bash
docker-compose up
```

## Access in browser using docker
```
http://localhost:80
```



<p  align="center">Made with 💜 by <a  href="https://github.com/sararchh"  target="_blank">Sara Rocha</a></p>