import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend('re_ji1iBa6s_4PGqdranEn6dRuff4ogCsPhQ');
export async function GET(req) {
    try {
        console.log("Sending email...");
        const {Name, email, message} = await req.body();
      const response=  await resend.emails.send({
            from: `${email}<onboarding@resend.dev>`,
            to: ['vabhsingh@gmail.com'],
            subject: "New request",
            text: `Name: ${Name}\nEmail: ${email}\nMessage: ${message}`,
        });
        console.log("Email sent:", response);
        return NextResponse.json({ message: "email sent 9" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "error sending email", error: error.message }, { status: 500 });
    }
}
 