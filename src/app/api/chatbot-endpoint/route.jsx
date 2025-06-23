import React from "react";
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

export async function POST(req){
  try {
    const {prompt} = await req.json();
  
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });
    return NextResponse.json({response: response.text});
  } catch (error) {
    return NextResponse.json({error: "Generation Failed"}, { status: 500 })
  }

}