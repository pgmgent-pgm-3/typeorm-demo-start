/**
 * A Home Controller
 */

// import plain, hardcoded data from data folder
import menuItems from "../data/menu.js";
import userData from "../data/user.js";

export const home = (req, res) => {
  res.render("home", {
    menuItems,
    userData,
  });
}