require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./db.js");
const router = require("./routes/index.js");
const errorMiddleware = require("./midllewares/errorMiddleware.js");


const PORT =  process.env.PORT;
const app = express();

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`))
  } catch (e) {
    console.log(e);
  }
};

start();
