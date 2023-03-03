import { DataSource } from "typeorm";

// import van de navigation item entity
import NavigationItem from "../models/NavigationItem.js";
import User from "../models/User.js";
import Interest from "../models/Interest.js";
import LunchBox from "../models/LunchBox.js";
import Pet from "../models/Pet.js";

// steek die in een array
const entities = [NavigationItem, User, Interest, LunchBox, Pet];

const DS = new DataSource({
  type: process.env.DATABASE_TYPE,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: entities, // vertel aan de datasource welke entities die moet gebruiken
});

export default DS;
