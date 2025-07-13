import nodemailer from "nodemailer"

export const sendEmail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // or "Yahoo", "Outlook" etc.
    auth: {
      user: process.env.MAIL_USER,  // example: yourname@gmail.com
      pass: process.env.MAIL_PASS   // App password (not your Gmail password)
    },
  })

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: subject,
    text: text,
  })
}
