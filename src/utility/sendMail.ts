import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS;

  if (!user || !pass) {
    console.error(
      "Nodemailer credentials are not set in environment variables.",
    );
    return new Promise((resolve) =>
      resolve({ status: 500, message: "Internal server error" }),
    );
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject: "Portfolio: [" + subject + " ]",
    text: `${name}: <${email}>\n${message}`,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending mail:", error);
        resolve({ status: 500, message: "Failed to send mail" });
      } else {
        console.log("Mail sent successfully");
        resolve({ status: 200, message: "Mail send successfully" });
      }
    });
  });
};
