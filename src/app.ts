import * as express from 'express';
import * as logger from 'morgan';

const PORT = process.env.PORT ?? 3000;

const app: express.Application = express();

app.use(logger('dev'));

app.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send('Done');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

export default app;
