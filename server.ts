import express from 'express';
const app = express();
import UserController from './controllers/UserController';
import * as schema from './schemas/ListUserSchema';
import checkJoi from './middlewares/check-joi'

app.get('/', checkJoi(schema.schemaIndex), UserController.listUser)

const port = process.env.port || 3000;

app.listen(port, () => console.log(`test`));