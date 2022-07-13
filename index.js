require("dotenv").config();

//import section
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
// DB connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose failed with", err);
});

//middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(compression());
app.use(cors());

//import routes
const formRoutes = require("./routes/form.routes");
const authRoutes = require("./routes/auth.routes");
const authAdminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");
const responseRoutes = require("./routes/response.routes");

//routes middlewares
app.use("/api/auth", authRoutes);
app.use("/api/authAdmin", authAdminRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/users", userRoutes);
app.use("/api/responses", responseRoutes);
//server listening
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
