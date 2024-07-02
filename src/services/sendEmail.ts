import { createTransport } from "nodemailer";
import { config } from "../config/config";

export const sendEmail = (recipient: string) => {
  try {
    const transport = createTransport({
      service: config.EMAIL_SERVICE,
      host: config.EMAIL_HOST,
      port: Number(config.EMAIL_PORT),
      auth: {
        user: config.EMAIL_USER,
        //user: config.EMAIL,
        pass: config.EMAIL_PWD,
      },
    });

    const mailOptions = {
      from: config.EMAIL_USER,
      to: "ianian2b@gmail.com",
      subject: "Test email",
      text: " Hello, this is the test",
    };

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {}
};
