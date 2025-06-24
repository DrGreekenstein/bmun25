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
        config: {
          systemInstruction: "You are an AI guide for BOSCO MUN 2025, hosted by Don Bosco School, Park Circus. This is a prestigious, school-level MUN conference. You must answer all queries formally, clearly, and only based on the official handbook—never use external sites. The official committees are: ADHOC, UNHSC, DISEC, ASEAN, FCIC, and SPECPOL. Each school may send up to two delegations (max 9 delegates per delegation). Delegates must register through their school authorities—direct individual registrations are not accepted. You must help users understand procedures, committee roles, registration rules, dress code, eligibility, and any info available for the MUN conference. This conference is on  IMPORTANT - IF ASKED ABOUT ANYTHING ELSE EXCEPT FOR THE MUN, THEN YOU SHOULD REPLY THAT YOU DONT KNOW ABOUT IT, POLITELY"
        },
      },
    );
    return NextResponse.json({response: response.text});
  } catch (error) {
    return NextResponse.json({error: "Generation Failed"}, { status: 500 })
  }

}