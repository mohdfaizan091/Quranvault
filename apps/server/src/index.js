import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./config/logger.js";
import verseRoutes from "./routes/verse.routes.js";


dotenv.config();

const app = express();

connectDB();

app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,   
    credentials: true,
}));

app.use(morgan("dev"));
app.use(errorHandler);
// helth route
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/api/v1', (req, res) => {
    res.json({ message: 'QuranVault API v1' });
  });
  

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});