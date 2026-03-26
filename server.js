import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './db/connect.js';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocument = JSON.parse(
  fs.readFileSync('./swagger.json', 'utf-8')
);
/* ======================
   Global Middleware
====================== */
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});


/* ======================
   Routes
====================== */
app.use('/api', routes);

/* ======================
   Swagger Docs
====================== */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* ======================
   Server Startup
====================== */
if (process.env.MONGO_URI) {
  connectDB()
    .then(() => {
      app.listen(port, () => {
        console.log(`Server running WITH database on port ${port}`);
      });
    })
    .catch((err) => {
      console.error('Database connection failed:', err);
    });
} else {
  app.listen(port, () => {
    console.log(`Server running WITHOUT database on port ${port}`);
  });
}
