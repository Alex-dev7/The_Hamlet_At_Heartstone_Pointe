import { NextResponse, NextRequest } from 'next/server';
// import nodemailer from 'nodemailer'

export async function POST(NextRequest: any) {

    console.log(await NextRequest.json())
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    // try {
    //     const { subject, message } = await request.json();

    //     const transporter = nodemailer.createTransport({
    //         service: 'zoho',
    //         host: 'smtpro.zoho.in',
    //         port: 465,
    //         secure: true,
    //         auth: {
    //             user: 'careeros@tryporpra.com',
    //             pass: process.env.NEXT_PUBLIC_PASSWORD
    //         }
    //     })

    //     const mailOption = {
    //         from: 'careeros@tryporpra.com',
    //         to: 'augustinerepos@gmail.com',
    //         subject: "Send Email Tutorial",
    //         html: `
    //     <h3>Hello Augustine</h3>
    //     <li> title: ${subject}</li>
    //     <li> message: ${message}</li> 
    //     `
    //     }

    //     await transporter.sendMail(mailOption)

    //     return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    // } catch (error) {
    //     return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    // }
}