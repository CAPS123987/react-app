import { Request, Response } from "express";
import crypto from "crypto";
import { sessionManager } from "../server";
import { hostUser, UserData } from "../dataTypes/UserTypes";
import { get } from "http";

export const setNewSession = (res: Response) : string => {
    const id:string = crypto.randomBytes(128).toString('hex');
    
    res.cookie("SessionID", id, {httpOnly: true, secure: true, sameSite: "none", path: "/", expires: new Date(Date.now() + 1000*60*60*24)});

    return id;
}

export const getSession = ( req : Request , res : Response) : string => {
    const session = req.cookies["SessionID"];
    if(session === undefined) {
        return setNewSession(res);
    } else {
        return session;
    }
}

export const getUser = (req: Request, res: Response) : UserData => {
    const session = getSession(req, res);

    return getUserFromSesion(session);
}

export const getUserFromSesion = (session: string) : UserData => {
        if (!sessionManager.contains(session)) {
        return hostUser;
    }

    return sessionManager.get(session);
}

export const loginUser = ( req : Request, res : Response) : UserData => {
    const session = getSession(req, res);
    const name = (req.query.name ?? "").toString();
    const email = (req.query.email ?? "").toString();

    sessionManager.set(session, {name: name, email: email, isLogged: true});

    return getUserFromSesion(session);
}

export const logoutUser = ( req : Request, res: Response) => {
    const session = getSession(req, res);

    sessionManager.set(session, hostUser);
}