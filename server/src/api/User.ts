import e from "express";
import express, { Request, Response } from "express";

const returnUser = (req: Request, res: Response) => {
    res.json({
        name: "John Doe",
        email: "",
        isLogged: true
    });
}

export default returnUser;