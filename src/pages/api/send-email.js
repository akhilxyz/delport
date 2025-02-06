import nodemailer from 'nodemailer';
import { CONTACTFORMTEMPLATE, DRIVERAPPLICATION } from 'src/templates/email-templates';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, data, type } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NM_USERNAME, // Your email
        pass: process.env.NM_PASSWORD, // Your email password
      },
    });

    const mailOptions = {
      to,
      subject,
      html: type === 'DRIVERAPPLICATION' ? DRIVERAPPLICATION(data) : CONTACTFORMTEMPLATE(data),
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
