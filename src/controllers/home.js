/**
 * A Home Controller
 */

// import datasource to extract data from
import DataSource from "../lib/DataSource.js";

export const home = async (req, res) => {
  // repo is een object dat de CRUD operaties bevat
  const navRepo = DataSource.getRepository("NavigationItem");
  const userRepo = DataSource.getRepository("User");

  // haal alle navigation items op
  const menuItems = await navRepo.find();
  const userData = await userRepo.findOneBy({ id: 1 });

  res.render("home", {
    menuItems,
    userData,
  });
};
