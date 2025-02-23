import express, { Request, Response } from "express";
import { getSession, getUser, loginUser, logoutUser } from "../function/User";
import { hostUser, UserData } from "../dataTypes/UserTypes";


export const getUserApi = (req: Request, res: Response) => {
    const user : UserData = getUser(req, res);

    res.json(user);
}

export const loginUserApi = (req: Request, res: Response) => {
    const user = loginUser(req, res);

    res.json(user);
}

export const logoutUserApi = (req: Request, res: Response) => {
    logoutUser(req, res);

    res.json(hostUser);
}
