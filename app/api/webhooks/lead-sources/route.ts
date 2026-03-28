import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Example: Logic to parse IndiaMart/MagicBricks JSON 
    // const lead = { name: data.SENDER_NAME, phone: data.MOBILE, source: 'IndiaMart' };
    
    // Save to Database here (e.g., using Prisma/Drizzle)
    // await db.lead.create({ data: lead });

    return NextResponse.json({ message: 'Lead captured successfully', received: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 400 });
  }
}