import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import router from './routes/userRoute';
const server = express();
const port = 8080;
server.use(cors());
server.use(bodyParser.json());
server.use('/api/user', router);

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
