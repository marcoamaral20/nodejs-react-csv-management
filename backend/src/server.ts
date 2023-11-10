import express from 'express';
import { router } from './router/router';

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});