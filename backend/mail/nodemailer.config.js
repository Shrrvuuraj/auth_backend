import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "proman43998@gmail.com",
    pass: "rzmsuufnznmjloau" // <-- your App Password, no spaces
  },
});

(async () => {
  try {
    const info = await transporter.sendMail({
      from: "proman43998@gmail.com",
      to: "proman43998@gmail.com",
      subject: "Hello",
      text: "Hello world",
    });
    console.log("✅ Message sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
