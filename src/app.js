import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import swaggerUiExpress from 'swagger-ui-express';


import envsConfig from './config/envs.config.js';
import { connectMongoDB } from './config/connectMongoDB.config.js';
import { initializePassport } from './config/passport.config.js';
import { specs } from './config/swagger.config.js';
import index from './routes/index.routes.js';

const app = express();

// Middlewares 
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  


app.use(
  session({
    secret: envsConfig.SECRET_CODE_SESSION, 
    resave: true,  
    saveUninitialized: true,  
  })
);


app.use(cookieParser());  


initializePassport();  
passport.use(passport.initialize());  
passport.use(passport.session());  


app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs)); 

// Conexión a la base de datos MongoDB
connectMongoDB();  

// Rutas
app.use('/api', index);  

// Iniciar el servidor
app.listen(envsConfig.PORT, () => {
  console.log(`Listening on ${envsConfig.PORT}`);  
});
