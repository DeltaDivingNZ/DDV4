// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || message.trim() === "") {
      return NextResponse.json({ reply: "Please send a message." });
    }

    // Call OpenAI Chat API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // stable and widely available
        messages: [
          {
            role: "system",
            content: `
You are the virtual assistant for Delta Detailing, NZ. 
Answer customer questions about car detailing services, packages, and pricing in a friendly, clear, Kiwi tone. 
If asked about Pricing, give general ranges based on service type and vehicle size: 
Premium interior: $89-$149
Ultimate Interior: $179-$249
Premium exterior: $99-$179
Ultimate exterior: $119-$199
Cut & Polish (1 stage): $249-$399
Paint Correction (2 stage): $399-$549
Ceramic coating: +$350 on top of Cut & Polish or Paint Correction
If asked about Packages, explain types: Interior, Exterior, Full Detail, Ceramic Coating, Paint Correction
If asked how long a service takes: Interior 2-4h, Exterior 2-4h, Cut & Polish 3-6h, Paint Correction 5-8h, Ceramic Coating 6-10h, Headlight 1h, Engine Bay 1h
Keep answers short, mobile-friendly, professional, and friendly. 
Always suggest getting a quote if unsure.
            `,
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // Error from OpenAI API
    if (!data.choices || data.choices.length === 0) {
      console.error("OpenAI API returned empty choices:", data);
      return NextResponse.json({
        reply: "Sorry, the AI didn’t return a response. Check server logs.",
      });
    }

    const reply = data.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({
      reply: "Sorry, something went wrong. Check server logs.",
    });
  }
}
