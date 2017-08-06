import { User } from "../models"

function getAllUsers(req, res, next) {
  User.findAll().then((users) => {
    res.json(users);
    // res.send(JSON.stringify(users));
  });
}

function createUser(req, res, next) {
  return User.create({ username: req.body.username })
    .then((user) => {
      res.status(200).json(user);
  }).catch((error) => {
    res.status(500).json(error);
  });
}

export {
  getAllUsers,
  createUser,
}
