import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import https from "https";
import MemoryManager from "./memory/Manager";

import fs from "fs";
import { getUserApi, loginUserApi, logoutUserApi } from "./api/UserApi";
import { UserData } from "./dataTypes/UserTypes";

export const sessionManager = new MemoryManager<string, UserData>();

const app = express();
app.use(cookieParser("secret:8sdf4ds6f482dsf64e86s24f8er6j762hg4lktfd"));

app.use(cors());
const port = 3001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*"); //Origin, X-Requested-With, Content-Type, Accept, application/json, Cookie
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/user/get', (req: Request, res: Response) => {
  getUserApi(req, res);
});

app.get('/user/login', (req: Request, res: Response) => {
  loginUserApi(req, res);
});

app.post('/user/logout', (req: Request, res: Response) => {
  logoutUserApi(req, res);
});

/*https.createServer(credentials, app).listen(3001, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});*/


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});