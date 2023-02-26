import menuItems from "../data/menu.js";
import userData from "../data/user.js";

/**
 * A Home Controller
 */

export const home = (req, res) => {
  res.render("home", {
    menuItems,
    userData,
  });
};
