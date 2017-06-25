import * as express from 'express';
import * as hsts from 'hsts';
import * as path from 'path';

const app = express();

app.use(hsts({
  maxAge: 15552000
}));

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

const port = process.env.PORT || 8080;

app.listen(port);

console.log(`App listening on port ${port}`);
