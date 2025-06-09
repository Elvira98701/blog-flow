import { createTransport } from "nodemailer";

export const sendEmail = async (
  to: string,
  subject: string,
  htmlTemaplate: string
) => {
  const transporter = createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL || "your-email@domain.com",
    to,
    subject,
    html: htmlTemaplate,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw error;
  }
};
