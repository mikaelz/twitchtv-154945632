import { User } from "../models"

function getAllUsers(req, res, next) {
  User.findAll().then((users) => {
    res.send(JSON.stringify(users));
  });
}

export {
  getAllUsers
}
