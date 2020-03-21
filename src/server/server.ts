import * as express from 'express';
import apiRouter from './routes';
import * as cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

