import {getAllUsers} from './controllers/users'

export default function routes(app) {
  app.get('/users', getAllUsers);
}
