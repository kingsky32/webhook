import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

const PORT = process.env.PORT ?? 3000;

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(req.params);
  res.send('Done');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

export default app;
