import express, { Request, Response } from "express";
import returnUser from "./api/User";


const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/user', (req: Request, res: Response) => {
  returnUser(req, res);
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});