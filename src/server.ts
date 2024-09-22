import { createServer } from 'http';
import { app } from './app';

const port = process.env.PORT || 3000;

(async () => {
  createServer(app).listen(port, () => console.info(`Server running on port ${port}`));
})();
