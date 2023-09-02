import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(NextRequest: any) {


    try {
        const { name, email, message } = await NextRequest.json();
        console.log(name, email, message)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            // host: 'smtpro.zoho.in',
            // port: 465,
            // secure: true,
            // text: message,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOption = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "THE HAMLET Email",
            html: `
            <h3>New Email</h3>
            <hr/>
            <h3>Name: </h3><p>${name}</p>
            <hr/>
            <h3>Email: ${email}</h3>
            <hr/>
            <h3> Message: </h3> 
            <p>${message}</p>
            <hr/>
            `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}