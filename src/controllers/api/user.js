/**
 * The user API controllers
 */

import DataSource from "../../lib/DataSource.js";

export const getUsers = async (req, res, next) => {
  try {
    const userRepository = DataSource.getRepository("User");
    const users = await userRepository.find();

    // const user = users.filter((user) => user.id === 1);
    // console.log('user with id 1', user.pop());

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({
      status: "Er liep iets fout!",
    });
  }
};

export const postUser = async (req, res, next) => {
  try {
    const userRepository = DataSource.getRepository("User");

    // get existing user (if there is one...)
    const user = await userRepository.findOneBy({ name: req.body.name });

    // if we have an user, return the existing one
    if (user) {
      res.status(200).json({
        status: "User already exists in database",
      });
    } else {
      // if the user does not exist... create a new one in the database!
      await userRepository.save(req.body);

      // let the client know that we added an entry
      res.status(201).json({
        status: "We create a new user in the database!",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "Er liep iets fout!",
    });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    // get the id with destructuring
    const { id } = req.params;

    // get the user repository
    const userRepository = DataSource.getRepository("User");

    // get the user with a specific id
    const user = await userRepository.findOneBy({ id });

    // does the user exist?
    if (user) {
      // remove the user
      await userRepository.delete(user);
    }

    // send a response
    res.status(204).json({
      status: "We deleted the record in the database!",
    });
  } catch (e) {
    res.status(500).json({
      status: "Er liep iets fout!",
    });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const userRepository = DataSource.getRepository("User");
    const user = await userRepository.findOneBy({ id: req.body.id });

    // change the name of the user
    // user.name = req.body.name;
    const newUser = { ...user, ...req.body };

    // save the data in the database
    await userRepository.save(newUser);

    // give a response to the client
    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({
      status: "Er liep iets fout!",
    });
  }
};