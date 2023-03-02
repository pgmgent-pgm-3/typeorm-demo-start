import express from "express";
import "dotenv/config";

// import handlebars
import { create } from "express-handlebars";
import HandlebarsHelpers from "./lib/HandlebarsHelpers.js";

// import consts
import { VIEWS_PATH } from "./consts.js";

// import plain, hardcoded data from data folder
import { home } from "./controllers/home.js";
import bodyParser from "body-parser";

import DataSource from "./lib/DataSource.js";
import {
  deleteInterest,
  getInterests,
  postInterest,
  updateInterest,
} from "./controllers/api/interest.js";
import {
  deleteUser,
  getUsers,
  postUser,
  updateUser,
} from "./controllers/api/user.js";

// init express
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init handlebars
const hbs = create({
  helpers: HandlebarsHelpers,
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH);

/**
 * App Routing
 * @todo: move to a separate file
 */
app.get("/", home);

/**
 * API Routing
 */
app.get("/api/interest", getInterests);
app.post("/api/interest", postInterest);
app.delete("/api/interest/:id", deleteInterest);
app.put("/api/interest", updateInterest);

app.get("/api/user", getUsers);
app.post("/api/user", postUser);
app.delete("/api/user/:id", deleteUser);
app.put("/api/user", updateUser);

// start the server
DataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Application is running on http://localhost:${process.env.PORT}/.`
      );
    });
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });
