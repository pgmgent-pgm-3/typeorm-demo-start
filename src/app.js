import express from "express";
import "dotenv/config";

// import handlebars
import { create } from "express-handlebars";
import HandlebarsHelpers from "./lib/HandlebarsHelpers.js";

// import consts
import { SOURCE_PATH, VIEWS_PATH } from "./consts.js";

// import plain, hardcoded data from data folder
import menuItems from "./data/menu.js";
import userData from "./data/user.js";

// init express
const app = express();
app.use(express.static("public"));

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
app.get("/", (req, res) => {
  res.render("home", {
    menuItems,
    userData,
  });
});

// start the server
app.listen(process.env.PORT, () => {
  console.log(
    `Application is runninig on http://localhost:${process.env.PORT}/.`
  );
});
