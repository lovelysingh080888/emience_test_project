const envconfig = require("./config/envconfig");
require("./config/db.config");
const express = require("express");
const path = require("path");
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const productRouter = require("./app/routes/product");
const authRouter = require("./app/routes/auth");
const { verifyAcessToken } = require("./app/middleware/auth.middleware");
const { commonLimiter, authLimiter } = require("./app/helpers/rate-limitter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet())
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/auth",authLimiter, authRouter);
app.use("/api/product",[verifyAcessToken, commonLimiter], productRouter);

app.use('*', (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Page not found',
      error: {
        statusCode: 404,
        message: 'This route not existing',
      },
    });
});
app.listen(envconfig.PORT, envconfig.HOST, () => {
  console.log(
    `Application runnning on host ${envconfig.HOST} & port ${envconfig.PORT}`
  );
});
