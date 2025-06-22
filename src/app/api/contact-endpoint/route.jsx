import connectDB from '@/lib/connectDB';
import React from 'react'
import { Contact } from '@/lib/models/contact';
import { NextResponse } from 'next/server';

export async function POST(req){
  const detailings = await req.json();
  if(!detailings.firstName || !detailings.lastName|| !detailings.email|| !detailings.message){
    return NextResponse.json({ success: false })
  }
  
  try{
    await connectDB()
    await new Contact(detailings).save()
    return NextResponse.json({ success: true })
  }catch{
    return NextResponse.json({ success: false })
  }
}

export default Contact