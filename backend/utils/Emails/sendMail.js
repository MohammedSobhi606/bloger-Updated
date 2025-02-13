import nodemailer from "nodemailer";
const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "moha2000.yahoo@gmail.com",
      pass: "evbk bisn kfwm oggi",
    },
  });

  const mailOptions = {
    from: "moha2000.yahoo@gmail.com",
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };
  await transporter.sendMail(mailOptions);
};

export default sendMail;
