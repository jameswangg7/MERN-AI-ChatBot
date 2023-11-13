import {Request,Response, NextFunction } from "express";
import User from "../models/User.js";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai";
import { configureOpenAI } from "../config/openai-config.js";

export const generateChatCompletion=async (req: Request, res:Response, next:NextFunction)=>{
    const {message}=req.body;
    const user=await User.findById(res.locals.jwtData.id)
    if(!user) return res.status(401).json({message:"user not registered OR token malfunctioned"})
   //get chats
    const chats=user.chats.map(({role, content})=>({
        role, content}) ) as ChatCompletionRequestMessage[];

}